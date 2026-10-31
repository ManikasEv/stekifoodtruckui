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
        <p>
          Der Foodtruck ist unterwegs – jeder Wochentag ein klarer Stopp mit Adresse, Zeit und Karte.
          So findest du uns, ohne extra anzurufen.
        </p>
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
              className={`stop-card ${isToday ? 'is-today' : ''} ${!limitedActive ? 'is-limited' : ''}`}
              key={stop.id}
            >
              <div className="stop-card-top">
                <span className="stop-day">
                  <small>{stop.dayShort}</small>
                  <strong>{stop.day}</strong>
                </span>
                <div className="stop-badges">
                  {isToday ? <span className="stop-chip live">Heute vor Ort</span> : null}
                  {stop.limited ? <span className="stop-chip limited">{stop.limited}</span> : null}
                </div>
              </div>

              <h3>{stop.title}</h3>
              <p className="stop-hours">
                <Icon name="clock" size={16} /> {stop.hours}
              </p>
              <p className="stop-address">
                {stop.street}
                <br />
                {stop.city}
              </p>
              {stop.note ? <p className="stop-note">{stop.note}</p> : null}

              <div className="stop-map">
                <iframe
                  src={embedUrlFor(stop.mapsQuery)}
                  title={`Karte – STEKI in ${stop.title}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <a className="button full" href={mapsUrlFor(stop.mapsQuery)} target="_blank" rel="noreferrer">
                Route öffnen <Icon name="arrow" size={16} />
              </a>
            </article>
          )
        })}
      </div>

      <p className="location-tip">
        <Icon name="truck" size={21} /> Kein Stopp am Donnerstag, Samstag und Sonntag – ausser bei Events.
      </p>
    </section>
  )
}
