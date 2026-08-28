import Icon from './Icon'

const dishes = [
  {
    id: 'pita',
    number: '01',
    tag: 'Original Greek Pita',
    title: 'Die echte griechische Pita.',
    greek: 'Η αυθεντική πίτα',
    text: 'Fluffig, warm und grosszügig gefüllt: saftiges Fleisch vom Grill, knusprige Pommes, frische Tomaten, Zwiebeln und unser cremiges Tzatziki – alles in einer handlichen Pita, wie du sie in Griechenland kennst.',
    note: 'Pita · ab CHF 15',
    image: '/greek-pita.png',
    alt: 'Original griechische Pita mit Grillfleisch, Pommes und Tzatziki von STEKI',
  },
  {
    id: 'teller',
    number: '02',
    tag: 'Delicious Greek Teller',
    title: 'Der Teller für grossen Hunger.',
    greek: 'Το πιάτο μας',
    text: 'Mehr von allem: grosszügige Portionen vom Grill, goldene Pommes frites, warmes Pita-Brot, frischer Salat und Tzatziki extra – ideal, wenn du dich hinsetzen und in Ruhe geniessen möchtest.',
    note: 'Teller · ab CHF 20',
    image: '/greek-teller.png',
    alt: 'Griechischer Teller mit Pancetta, Pommes, Pita und Tzatziki von STEKI',
    reverse: true,
  },
]

export default function FoodShowcase() {
  return (
    <section className="food-showcase section" id="unsere-kueche" aria-labelledby="food-showcase-title">
      <div className="section-heading food-showcase-heading">
        <div>
          <span className="eyebrow">
            <span></span> Unsere Küche
          </span>
          <h2 id="food-showcase-title">
            Zwei Klassiker.
            <br />
            <em>Ein Geschmack.</em>
          </h2>
        </div>
        <p>
          Ob in der Hand oder auf dem Teller – bei STEKI bekommst du echtes griechisches Streetfood:
          frisch vom Grill, mit Liebe zubereitet und serviert.
        </p>
      </div>

      <div className="food-showcase-grid">
        {dishes.map((dish) => (
          <article
            className={`food-card ${dish.reverse ? 'food-card-reverse' : ''}`}
            key={dish.id}
          >
            <div className="food-card-media">
              <img src={dish.image} alt={dish.alt} loading="lazy" />
              <span className="food-card-number">{dish.number}</span>
            </div>
            <div className="food-card-copy">
              <span className="food-card-tag">{dish.tag}</span>
              <h3>{dish.title}</h3>
              <small>{dish.greek}</small>
              <p>{dish.text}</p>
              <div className="food-card-foot">
                <strong>{dish.note}</strong>
                <a className="text-link" href="#speisekarte">
                  Zur Speisekarte <Icon name="arrow" size={17} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
