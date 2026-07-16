import { extras, menuItems, sauces } from '../data/menu'

export default function Menu() {
  return (
    <section className="menu-section section" id="speisekarte">
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            <span></span> Unsere Speisekarte
          </span>
          <h2>
            Ein Stück Griechenland
            <br />
            auf deinem Teller.
          </h2>
        </div>
        <p>Alle Pita-Gerichte werden mit Tzatziki, Tomaten, Zwiebeln und knusprigen Pommes serviert.</p>
      </div>

      <div className="menu-labels" aria-hidden="true">
        <span></span>
        <span>Pita</span>
        <span>Teller</span>
      </div>
      <div className="menu-list">
        {menuItems.map((item) => (
          <article className={`menu-item ${item.featured ? 'featured' : ''}`} key={item.number}>
            <span className="menu-number">{item.number}</span>
            <div className="menu-copy">
              <div className="menu-name">
                <h3>{item.name}</h3>
                {item.featured && <span>Unser Klassiker</span>}
              </div>
              <small>{item.greek}</small>
              <p>{item.description}</p>
            </div>
            <strong className="price">
              {item.pita}
              <small> CHF</small>
            </strong>
            <strong className="price">
              {item.teller}
              <small> CHF</small>
            </strong>
          </article>
        ))}
      </div>

      <div className="extras">
        <div className="extras-title">
          <span className="eyebrow light">
            <span></span> Dazu & extra
          </span>
          <h3>
            Für den kleinen
            <br />
            Hunger.
          </h3>
          <p>Saucen: {sauces}</p>
        </div>
        <div className="extras-list">
          {extras.map((item) => (
            <div className="extra-item" key={item.name}>
              <span>
                <strong>{item.name}</strong>
                <small>{item.description}</small>
              </span>
              <strong>
                {item.price}
                <small> CHF</small>
              </strong>
            </div>
          ))}
        </div>
      </div>
      <p className="menu-disclaimer">
        Alle Preise in CHF inkl. MwSt. Bei Allergien oder Unverträglichkeiten beraten wir dich gerne persönlich.
      </p>
    </section>
  )
}
