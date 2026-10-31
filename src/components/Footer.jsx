import Brand from './Brand'
import Icon from './Icon'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Brand className="footer-brand" />
        <p>
          Authentisches griechisches Streetfood
          <br />
          an wechselnden Standorten – frisch und mobil.
        </p>
        <div className="footer-contact">
          <small>Kontakt</small>
          <a href={`mailto:${site.email}`}>
            <Icon name="mail" size={17} /> {site.email}
          </a>
          <a href="#standort">
            <Icon name="pin" size={17} /> Aktuellen Standort ansehen
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} STEKI GmbH. Alle Rechte vorbehalten.</span>
        <span>{site.domain}</span>
      </div>
    </footer>
  )
}
