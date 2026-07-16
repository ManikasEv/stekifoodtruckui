import Brand from './Brand'
import Icon from './Icon'
import { navLinks } from '../data/site'
import { useHideOnScroll } from '../hooks/useHideOnScroll'

export default function Header() {
  const hidden = useHideOnScroll()

  return (
    <header className={`header ${hidden ? 'header-hidden' : ''}`}>
      <Brand />
      <nav aria-label="Hauptnavigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="button button-small" href="#kontakt">
        Foodtruck buchen <Icon name="arrow" size={17} />
      </a>
    </header>
  )
}
