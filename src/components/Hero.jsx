import Icon from './Icon'
import { site } from '../data/site'

export default function Hero() {
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
          aus unserem Foodtruck – rund um Wettingen und dort, wo du uns brauchst.
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
        <span className="greek-key" aria-hidden="true">ΓΕΥΣΗ • ΠΑΡΑΔΟΣΗ • ΦΙΛΟΞΕΝΙΑ</span>
        <span className="hero-greek hero-greek-left" aria-hidden="true">ΕΛΛΑΔΑ</span>
        <span className="hero-greek hero-greek-right" aria-hidden="true">ΣΤΕΚΙ</span>
        <div className="logo-stage">
          <img src={site.logo} alt="STEKI Greek Taste – griechischer Foodtruck" />
        </div>
        <div className="location-card">
          <span className="location-icon">
            <Icon name="pin" />
          </span>
          <span>
            <small>Hauptstandort</small>
            <strong>{site.address.street}</strong>
            <small>{site.address.city}</small>
          </span>
        </div>
        <span className="sun sun-one"></span>
        <span className="sun sun-two"></span>
        <span className="spark spark-one" aria-hidden="true">✦</span>
        <span className="spark spark-two" aria-hidden="true">✦</span>
      </div>
    </section>
  )
}
