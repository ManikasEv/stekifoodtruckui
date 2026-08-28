import { useEffect, useState } from 'react'
import Icon from './Icon'

const SLIDE_MS = 6000

const dishes = [
  {
    id: 'pita',
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
    tag: 'Delicious Greek Teller',
    title: 'Der Teller für grossen Hunger.',
    greek: 'Το πιάτο μας',
    text: 'Mehr von allem: grosszügige Portionen vom Grill, goldene Pommes frites, warmes Pita-Brot, frischer Salat und Tzatziki extra – ideal, wenn du dich hinsetzen und in Ruhe geniessen möchtest.',
    note: 'Teller · ab CHF 20',
    image: '/greek-teller.png',
    alt: 'Griechischer Teller mit Pancetta, Pommes, Pita und Tzatziki von STEKI',
  },
]

export default function FoodShowcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % dishes.length)
    }, SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [])

  const dish = dishes[active]

  return (
    <section className="food-spotlight" id="unsere-kueche" aria-label="Unsere Küche">
      <div className="food-spotlight-visual" aria-hidden="true">
        {dishes.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt=""
            className={`food-slide-${item.id} ${index === active ? 'is-active' : ''}`}
          />
        ))}
        <div className="food-spotlight-dots">
          {dishes.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={index === active ? 'is-active' : ''}
              aria-label={`${item.tag} anzeigen`}
              aria-current={index === active ? 'true' : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <div className="food-spotlight-copy">
        <span className="eyebrow">
          <span></span> Unsere Küche
        </span>
        <div className="food-spotlight-slide" key={dish.id}>
          <span className="food-spotlight-tag">{dish.tag}</span>
          <h2>{dish.title}</h2>
          <small>{dish.greek}</small>
          <p>{dish.text}</p>
          <div className="food-spotlight-foot">
            <strong>{dish.note}</strong>
            <a className="text-link" href="#speisekarte">
              Zur Speisekarte <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
