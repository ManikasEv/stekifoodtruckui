import Icon from './Icon'
import { mapsUrl, site } from '../data/site'

export default function Location() {
  return (
    <section className="location-section section" id="standort">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <span></span> Wo wir stehen
          </span>
          <h2>
            Finde den STEKI
            <br />
            Foodtruck.
          </h2>
        </div>
        <p>
          Unser Foodtruck ist unterwegs. Hier findest du unseren Hauptstandort und alle aktuellen
          Hinweise zu den nächsten Stopps.
        </p>
      </div>

      <div className="location-grid">
        <article className="main-location">
          <span className="status">
            <i></i> Hauptstandort
          </span>
          <div>
            <span className="location-big-icon">
              <Icon name="pin" size={28} />
            </span>
            <p>{site.address.street}</p>
            <strong>{site.address.city}</strong>
          </div>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Route öffnen <Icon name="arrow" size={18} />
          </a>
        </article>

        <article className="schedule-card">
          <div className="schedule-head">
            <span className="location-big-icon cream">
              <Icon name="clock" size={26} />
            </span>
            <div>
              <small>Standort-Fahrplan</small>
              <h3>Nächste Stopps</h3>
            </div>
          </div>
          <div className="schedule-note">
            <strong>Wir sind unterwegs.</strong>
            <p>
              Die nächsten Standorte und Zeiten werden laufend aktualisiert. Schreib uns für den
              heutigen Standort.
            </p>
          </div>
          <a className="button full" href="#kontakt">
            Standort anfragen <Icon name="mail" size={18} />
          </a>
        </article>
      </div>
      <p className="location-tip">
        <Icon name="truck" size={21} /> Du planst einen Firmenanlass, ein Fest oder einen privaten Event?
      </p>
    </section>
  )
}
