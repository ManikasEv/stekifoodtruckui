export const site = {
  name: 'STEKI',
  tagline: 'Greek Taste',
  email: 'info@steki.ch',
  domain: 'steki.ch',
  logo: '/logo.jpeg',
  address: {
    street: 'Bahnhofstrasse 107',
    city: '5430 Wettingen',
    mapsQuery: 'Bahnhofstrasse 107, 5430 Wettingen',
  },
}

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery,
)}`

export const navLinks = [
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#standort', label: 'Standort' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export const highlights = [
  { number: '01', title: 'Griechische Rezepte', note: 'Ehrlich & traditionell' },
  { number: '02', title: 'Frisch vom Grill', note: 'Für dich zubereitet' },
  { number: '03', title: 'Mobil unterwegs', note: 'Wettingen & Umgebung' },
]

export const marqueePhrases = [
  'FRISCH VOM GRILL',
  'ECHTER GESCHMACK',
  'GRIECHISCHE SEELE',
  'UNTERWEGS FÜR DICH',
]
