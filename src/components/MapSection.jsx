import Icon from './Icon'
import { embedUrlFor, getTodayStop, mapsUrlFor, weeklyStops } from '../data/site'

export default function MapSection() {
  const liveStop = getTodayStop()
  const featured = liveStop || weeklyStops[0]

  return (
    <section className="map-section section" id="karte">
      <div className="map-grid">
        <div className="map-copy">
          <span className="eyebrow">
            <span></span> So findest du uns
          </span>
          <h2>
            {liveStop ? 'Aktueller Stopp' : 'Nächster Stopp'}
            <br />
            {featured.title}.
          </h2>
          <p>
            STEKI wechselt den Standort nach Wochentag. Wettingen ist vorübergehend geschlossen.
            Hier siehst du den heutigen oder nächsten Treffpunkt – mit der genauen Adresse und Karte.
          </p>
          <div className="map-address">
            <span className="location-big-icon">
              <Icon name="pin" size={24} />
            </span>
            <span>
              <strong>
                {featured.day} · {featured.hours}
              </strong>
              <small>
                {featured.street}, {featured.city}
              </small>
            </span>
          </div>
          <a className="button" href={mapsUrlFor(featured.mapsQuery)} target="_blank" rel="noreferrer">
            Route planen <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="map-frame">
          <iframe
            src={embedUrlFor(featured.mapsQuery)}
            title={`Karte – STEKI ${featured.title}, ${featured.street}, ${featured.city}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
