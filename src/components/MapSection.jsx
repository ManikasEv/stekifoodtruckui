import Icon from './Icon'
import { mapsUrl, site } from '../data/site'

const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery,
)}&z=16&output=embed`

export default function MapSection() {
  return (
    <section className="map-section section" id="karte">
      <div className="map-grid">
        <div className="map-copy">
          <span className="eyebrow">
            <span></span> So findest du uns
          </span>
          <h2>
            Mitten in
            <br />
            Wettingen.
          </h2>
          <p>
            Unseren Hauptstandort an der Bahnhofstrasse 107 erreichst du bequem zu Fuss, mit dem
            Velo oder mit den öffentlichen Verkehrsmitteln. Halte einfach Ausschau nach dem
            STEKI-Bären – wo er steht, gibt es frisches griechisches Streetfood.
          </p>
          <div className="map-address">
            <span className="location-big-icon">
              <Icon name="pin" size={24} />
            </span>
            <span>
              <strong>{site.address.street}</strong>
              <small>{site.address.city}</small>
            </span>
          </div>
          <a className="button" href={mapsUrl} target="_blank" rel="noreferrer">
            Route planen <Icon name="arrow" size={18} />
          </a>
        </div>

        <div className="map-frame">
          <iframe
            src={embedUrl}
            title={`Karte – ${site.name} Hauptstandort, ${site.address.street}, ${site.address.city}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
