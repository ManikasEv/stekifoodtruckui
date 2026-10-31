export const site = {
  name: 'STEKI',
  tagline: 'Greek Taste',
  email: 'info@steki.ch',
  domain: 'steki.ch',
  logo: '/logo.jpeg',
  address: {
    street: 'Landstrasse 89 (Zentrumsplatz)',
    city: '5430 Wettingen',
    mapsQuery: 'Landstrasse 89, 5430 Wettingen',
  },
}

export const closedNotice = {
  title: 'Wettingen vorübergehend geschlossen',
  text: 'Unser bisheriger Standort an der Landstrasse 89 (Zentrumsplatz) in Wettingen ist vorübergehend geschlossen. Bitte nicht mehr dort suchen oder anrufen – den aktuellen Stopp findest du im Wochenplan.',
}

export const weeklyStops = [
  {
    id: 'oberglatt',
    weekday: 1,
    day: 'Montag',
    dayShort: 'Mo',
    hours: '11:00–14:00',
    title: 'Oberglatt',
    street: 'Wehntalerstrasse 7',
    city: '8154 Oberglatt',
    mapsQuery: 'Wehntalerstrasse 7, 8154 Oberglatt',
    note: 'Jede Woche am Montag.',
  },
  {
    id: 'duebendorf',
    weekday: 2,
    day: 'Dienstag',
    dayShort: 'Di',
    hours: '11:00–14:00',
    title: 'Dübendorf',
    street: 'Zürichstrasse 128',
    city: '8600 Dübendorf',
    mapsQuery: 'Zürichstrasse 128, 8600 Dübendorf',
    note: 'Jede Woche am Dienstag.',
  },
  {
    id: 'freilager',
    weekday: 3,
    day: 'Mittwoch',
    dayShort: 'Mi',
    hours: 'Mittags vor Ort',
    title: 'Zürich Freilager',
    street: 'Freilagerplatz',
    city: '8047 Zürich',
    mapsQuery: 'Freilagerplatz, 8047 Zürich',
    note: 'Regelmässig am Mittwoch.',
  },
  {
    id: 'schlieren',
    weekday: 5,
    day: 'Freitag',
    dayShort: 'Fr',
    hours: '11:00–14:00',
    title: 'Schlieren',
    street: 'Rote Platz · Zentrum / Bahnhof',
    city: '8952 Schlieren',
    mapsQuery: 'Rote Platz Schlieren, Zentrum Bahnhof, 8952 Schlieren',
    note: 'Nur im November 2026.',
    limited: 'Nur November 2026',
    activeFrom: '2026-11-01',
    activeTo: '2026-11-30',
  },
]

export const mapsUrlFor = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const embedUrlFor = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`

export const mapsUrl = mapsUrlFor(site.address.mapsQuery)

const zurichParts = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Zurich',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  }).formatToParts(date)

  const get = (type) => parts.find((part) => part.type === type)?.value
  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

  return {
    weekday: weekdayMap[get('weekday')] ?? date.getDay(),
    iso: `${get('year')}-${get('month')}-${get('day')}`,
  }
}

export const isStopActiveOn = (stop, date = new Date()) => {
  const { iso } = zurichParts(date)
  if (stop.activeFrom && iso < stop.activeFrom) return false
  if (stop.activeTo && iso > stop.activeTo) return false
  return true
}

export const getTodayStop = (date = new Date()) => {
  const { weekday } = zurichParts(date)
  const stop = weeklyStops.find((item) => item.weekday === weekday)
  if (!stop || !isStopActiveOn(stop, date)) return null
  return stop
}

export const navLinks = [
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#standort', label: 'Standort' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
]

export const highlights = [
  { number: '01', title: 'Griechische Rezepte', note: 'Ehrlich & traditionell' },
  { number: '02', title: 'Frisch vom Grill', note: 'Für dich zubereitet' },
  { number: '03', title: 'Mobil unterwegs', note: 'Zürich & Umgebung' },
]

export const marqueePhrases = [
  'FRISCH VOM GRILL',
  'ECHTER GESCHMACK',
  'GRIECHISCHE SEELE',
  'UNTERWEGS FÜR DICH',
]
