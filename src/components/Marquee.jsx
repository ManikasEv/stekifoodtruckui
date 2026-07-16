import { marqueePhrases } from '../data/site'

// Repeat the phrase set enough times so the scrolling strip fills very wide
// screens and loops seamlessly.
const REPEATS = 8

export default function Marquee() {
  return (
    <div className="taste-marquee" aria-hidden="true">
      <div>
        {Array.from({ length: REPEATS }).map((_, copy) =>
          marqueePhrases.map((phrase) => (
            <span key={`${copy}-${phrase}`}>
              {phrase}
              <i>✦</i>
            </span>
          )),
        )}
      </div>
    </div>
  )
}
