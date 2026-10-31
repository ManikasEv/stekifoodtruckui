import Icon from './Icon'
import {
  closedNotice,
  embedUrlFor,
  getTodayStop,
  isStopActiveOn,
  mapsUrlFor,
  weeklyStops,
} from '../data/site'

export default function Location() {
  const todayStop = getTodayStop()

  return (
    <section className="location-section section" id="standort">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <span></span> Wochenplan
          </span>
          <h2>
            Wo STEKI
            <br />
            heute steht.
          </h2>
        </div>
        <p>Jeder Wochentag hat seinen Ort. Hier stehen Zeit, Adresse und der Weg.</p>
      </div>

      <aside className="closed-banner" role="status">
        <span className="closed-banner-tag">Hinweis</span>
        <div>
          <strong>{closedNotice.title}</strong>
          <p>{closedNotice.text}</p>
        </div>
      </aside>

      <div className="stop-grid">
        {weeklyStops.map((stop) => {
          const isToday = todayStop?.id === stop.id
          const limitedActive = isStopActiveOn(stop)

          return (
            <article
              className={`stop-card ${isToday ? 'is-today' : ''} ${!limitedActive ? 'is-quiet' : ''}`}
              key={stop.id}
            >
              <header className="stop-card-head">
                <span className="stop-day">{stop.day}</span>
                {isToday ? <span className="stop-now">Heute</span> : null}
              </header>

              <h3>{stop.title}</h3>
              {stop.limited ? <p className="stop-limited">{stop.limited}</p> : null}

              <dl className="stop-meta">
                <div>
                  <dt>Zeit</dt>
                  <dd>{stop.hours}</dd>
                </div>
                <div>
                  <dt>Ort</dt>
                  <dd>
                    {stop.street}
                    <br />
                    {stop.city}
                  </dd>
                </div>
              </dl>

              <div className="stop-map">
                <iframe
                  src={embedUrlFor(stop.mapsQuery)}
                  title={`Karte – STEKI in ${stop.title}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a className="stop-route" href={mapsUrlFor(stop.mapsQuery)} target="_blank" rel="noreferrer">
                Route öffnen <Icon name="arrow" size={16} />
              </a>
            </article>
          )
        })}
      </div>

      <p className="location-tip">
        Donnerstag sowie am Wochenende sind wir nur bei Events unterwegs.
      </p>
    </section>
  )
}
