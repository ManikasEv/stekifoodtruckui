import { useEffect, useState } from 'react'
import { defaultScanMenu } from '../data/scanMenu'
import '../styles/ScanMenu.css'

const price = (value) =>
  new Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Number(value) || 0)

export default function ScanMenu() {
  const [menu, setMenu] = useState(defaultScanMenu)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    document.title = 'Aktuelle Speisekarte | STEKI Greek Taste'

    const loadMenu = async () => {
      try {
        const response = await fetch('/api/menu', { cache: 'no-store' })
        if (!response.ok) throw new Error(`Menu request failed: ${response.status}`)
        setMenu(await response.json())
        setStatus('ready')
      } catch {
        setStatus('fallback')
      }
    }

    loadMenu()
  }, [])

  const availableItems = menu.items.filter((item) => item.available !== false)
  const availableExtras = menu.extras.filter((item) => item.available !== false)

  return (
    <div className="scan-menu-page">
      <header className="scan-header">
        <div className="scan-brand">
          <span className="scan-logo">
            <img src="/logo.jpeg" alt="" />
          </span>
          <span>
            <strong>STEKI</strong>
            <small>Greek Taste</small>
          </span>
        </div>
        <span className="scan-live">
          <i></i> Aktuelle Karte
        </span>
      </header>

      <main>
        <section className="scan-hero">
          <span>ΚΑΛΗ ΟΡΕΞΗ · EN GUETE</span>
          <h1>Unsere<br />Speisekarte</h1>
          <p>{menu.notice}</p>
          {status === 'loading' && <small>Speisekarte wird geladen…</small>}
          {status === 'fallback' && (
            <small>Die Online-Aktualisierung ist momentan nicht erreichbar.</small>
          )}
        </section>

        <section className="scan-items">
          <div className="scan-section-title">
            <span>VOM GRILL</span>
            <div>
              <small>Pita</small>
              <small>Teller</small>
            </div>
          </div>

          {availableItems.map((item, index) => (
            <article className={`scan-item ${item.featured ? 'featured' : ''}`} key={item.id}>
              <span className="scan-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="scan-item-copy">
                <div>
                  <h2>{item.name}</h2>
                  {item.featured && <span>Beliebt</span>}
                </div>
                {item.greek && <small>{item.greek}</small>}
                <p>{item.description}</p>
              </div>
              <strong>{price(item.pita)}</strong>
              <strong>{price(item.plate)}</strong>
            </article>
          ))}
        </section>

        {availableExtras.length > 0 && (
          <section className="scan-extras">
            <div className="scan-extras-heading">
              <span>DAZU & EXTRA</span>
              <h2>Für den kleinen Hunger.</h2>
            </div>
            <div className="scan-extra-list">
              {availableExtras.map((item) => (
                <article key={item.id}>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.description}</small>
                  </span>
                  <strong>{price(item.price)}</strong>
                </article>
              ))}
            </div>
          </section>
        )}

        {menu.sauces && (
          <section className="scan-sauces">
            <span>SAUCEN</span>
            <p>{menu.sauces}</p>
          </section>
        )}
      </main>

      <footer className="scan-footer">
        <div className="scan-brand scan-footer-brand">
          <span className="scan-logo">
            <img src="/logo.jpeg" alt="" />
          </span>
          <span>
            <strong>STEKI</strong>
            <small>Greek Taste</small>
          </span>
        </div>
        <p>Bahnhofstrasse 107 · 5430 Wettingen</p>
        <a href="mailto:info@steki.ch">info@steki.ch</a>
      </footer>
    </div>
  )
}
