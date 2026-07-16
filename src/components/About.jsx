import Icon from './Icon'
import { site } from '../data/site'

export default function About() {
  return (
    <section className="about-section" id="ueber-uns">
      <div className="about-logo">
        <img src={site.logo} alt="STEKI Bär mit griechischem Streetfood" />
      </div>
      <div className="about-copy">
        <span className="eyebrow light">
          <span></span> Über uns
        </span>
        <h2>STEKI. Das griechische Wort ist kein Zufall.</h2>
        <p>
          Ein Steki ist ein beliebter, gastfreundlicher Ort, an dem sich Menschen jeden Alters
          treffen, um gute Gesellschaft, Gemütlichkeit und gutes Essen zu geniessen. Probiere
          unser authentisches griechisches Essen – und vielleicht wird das Steki bald auch dein
          Steki.
        </p>
        <a className="button button-light" href="#kontakt">
          Foodtruck für deinen Event buchen <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  )
}
