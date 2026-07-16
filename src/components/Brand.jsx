import { site } from '../data/site'

export default function Brand({ className = '', href = '#start' }) {
  return (
    <a className={`brand ${className}`} href={href} aria-label={`${site.name} Startseite`}>
      <span className="brand-mark">
        <img src={site.logo} alt="" />
      </span>
      <span>
        <strong>{site.name}</strong>
        <small>{site.tagline}</small>
      </span>
    </a>
  )
}
