import { highlights } from '../data/site'

export default function Highlights() {
  return (
    <section className="intro-strip" aria-label="STEKI Vorteile">
      {highlights.map((item) => (
        <div key={item.number}>
          <span>{item.number}</span>
          <strong>{item.title}</strong>
          <small>{item.note}</small>
        </div>
      ))}
    </section>
  )
}
