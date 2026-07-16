import { useState } from 'react'
import Icon from './Icon'
import { site } from '../data/site'

// Netlify Forms: the matching static form lives in index.html so Netlify's
// build bots register it; this component posts the same fields.
const FORM_NAME = 'foodtruck-buchung'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
      if (!response.ok) throw new Error(`Form submit failed: ${response.status}`)
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-section section" id="kontakt">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <span></span> Kontakt & Buchung
          </span>
          <h2>
            Hol dir STEKI
            <br />
            zu deinem Event.
          </h2>
        </div>
        <p>
          Firmenanlass, Fest oder einfach eine Frage zum heutigen Standort – schreib uns, wir
          melden uns so schnell wie möglich.
        </p>
      </div>

      <div className="contact-grid">
        <aside className="contact-aside">
          <span className="location-big-icon">
            <Icon name="truck" size={26} />
          </span>
          <h3>Direkt erreichen</h3>
          <p>
            Du magst es lieber persönlich? Schreib uns eine E-Mail – wir antworten in der Regel
            innerhalb von 24 Stunden.
          </p>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={18} /> {site.email}
          </a>
          <span className="contact-aside-address">
            <Icon name="pin" size={18} /> {site.address.street}, {site.address.city}
          </span>
        </aside>

        {status === 'success' ? (
          <div className="booking-form form-success" role="status">
            <span className="location-big-icon cream">
              <Icon name="check" size={26} />
            </span>
            <h3>Danke für deine Anfrage!</h3>
            <p>Wir haben deine Nachricht erhalten und melden uns so schnell wie möglich bei dir.</p>
          </div>
        ) : (
          <form
            className="booking-form"
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden-field" aria-hidden="true">
              <label>
                Dieses Feld nicht ausfüllen: <input name="bot-field" tabIndex="-1" autoComplete="off" />
              </label>
            </p>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="contact-name">Name *</label>
                <input id="contact-name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="contact-email">E-Mail *</label>
                <input id="contact-email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field">
                <label htmlFor="contact-phone">Telefon</label>
                <input id="contact-phone" name="telefon" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="contact-date">Wunschdatum</label>
                <input id="contact-date" name="datum" type="date" />
              </div>
              <div className="field wide">
                <label htmlFor="contact-place">Ort / Anlass</label>
                <input id="contact-place" name="ort" type="text" placeholder="z. B. Firmenfest in Baden" />
              </div>
              <div className="field wide">
                <label htmlFor="contact-message">Nachricht *</label>
                <textarea id="contact-message" name="nachricht" rows="5" required></textarea>
              </div>
            </div>

            <div className="form-footer">
              <p className="form-hint">* Pflichtfelder</p>
              <button className="button" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Wird gesendet…' : 'Anfrage senden'} <Icon name="arrow" size={18} />
              </button>
            </div>

            {status === 'error' && (
              <p className="form-error" role="alert">
                Das hat leider nicht geklappt. Bitte versuche es erneut oder schreib uns direkt an{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
