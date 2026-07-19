import { getStore } from '@netlify/blobs'
import { defaultScanMenu } from '../../src/data/scanMenu.js'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
}

const json = (data, status = 200) =>
  Response.json(data, {
    status,
    headers: {
      ...corsHeaders,
      'Cache-Control': 'no-store',
    },
  })

const cleanText = (value, maxLength = 500) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''

const cleanPrice = (value) => {
  const number = Number(value)
  return Number.isFinite(number) && number >= 0 ? Math.round(number * 100) / 100 : 0
}

const cleanMenu = (input) => ({
  updatedAt: new Date().toISOString(),
  notice: cleanText(input.notice, 250),
  sauces: cleanText(input.sauces, 350),
  items: Array.isArray(input.items)
    ? input.items.slice(0, 30).map((item, index) => ({
        id: cleanText(item.id, 80) || `item-${index + 1}`,
        name: cleanText(item.name, 120),
        greek: cleanText(item.greek, 120),
        description: cleanText(item.description, 500),
        pita: cleanPrice(item.pita),
        plate: cleanPrice(item.plate),
        available: item.available !== false,
        featured: item.featured === true,
      }))
    : [],
  extras: Array.isArray(input.extras)
    ? input.extras.slice(0, 30).map((item, index) => ({
        id: cleanText(item.id, 80) || `extra-${index + 1}`,
        name: cleanText(item.name, 120),
        description: cleanText(item.description, 500),
        price: cleanPrice(item.price),
        available: item.available !== false,
      }))
    : [],
})

export default async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (request.method !== 'GET' && request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const store = getStore({ name: 'steki-scan-menu', consistency: 'strong' })

  if (request.method === 'GET') {
    const storedMenu = await store.get('current', { type: 'json' })
    return json(storedMenu || defaultScanMenu)
  }

  // Must match CRM default (VITE_MENU_ADMIN_TOKEN / StekiMenuPublish2026!).
  const configuredToken = process.env.MENU_ADMIN_TOKEN || 'StekiMenuPublish2026!'
  const suppliedToken = request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')

  if (!suppliedToken || suppliedToken !== configuredToken) {
    return json({ error: 'Unauthorized' }, 401)
  }

  let input
  try {
    input = await request.json()
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const menu = cleanMenu(input)

  if (!menu.items.length) {
    return json({ error: 'At least one menu item is required' }, 400)
  }

  await store.setJSON('current', menu)
  return json({ ok: true, menu })
}
