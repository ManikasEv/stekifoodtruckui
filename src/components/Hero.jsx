import Icon from './Icon'
import { getTodayStop, weeklyStops } from '../data/site'

export default function Hero() {
  const todayStop = getTodayStop()
  const featured = todayStop || weeklyStops[0]

  return (
    <section className="hero" id="start">
      <div className="hero-copy">
        <span className="eyebrow">
          <span></span> Authentisch. Griechisch. Unterwegs.
        </span>
        <h1>
          Griechischer Geschmack, <em>wo immer du bist.</em>
        </h1>
        <p className="hero-text">
          Frisch vom Grill, mit Herz serviert. Entdecke echtes griechisches Streetfood
          aus unserem Foodtruck – jeden Wochentag an einem klaren Standort. Schau im Wochenplan nach.
        </p>
        <div className="hero-actions">
          <a className="button" href="#speisekarte">
            Speisekarte entdecken <Icon name="arrow" size={18} />
          </a>
          <a className="text-link" href="#standort">
            <Icon name="pin" size={19} /> Aktuellen Standort finden
          </a>
        </div>
        <div className="hero-notes">
          <span>
            <Icon name="check" size={17} /> Frisch zubereitet
          </span>
          <span>
            <Icon name="check" size={17} /> Original griechisch
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-photo">
          <img
            src="/hero-foodtruck.png"
            alt="STEKI Greek Taste – frische griechische Pita direkt aus dem Foodtruck"
          />
        </div>
        <span className="greek-key" aria-hidden="true">ΓΕΥΣΗ • ΠΑΡΑΔΟΣΗ • ΦΙΛΟΞΕΝΙΑ</span>
        <span className="sun sun-one"></span>
        <span className="sun sun-two"></span>
      </div>

      <a className="location-card" href="#standort">
        <span className="location-icon">
          <Icon name="pin" />
        </span>
        <span>
          <small>{todayStop ? 'Heute unterwegs' : 'Wochenplan'}</small>
          <strong>{featured.title}</strong>
          <small>
            {featured.street}, {featured.city}
          </small>
        </span>
      </a>
    </section>
  )
}
