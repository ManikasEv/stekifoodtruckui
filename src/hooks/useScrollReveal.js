import { useEffect } from 'react'

const REVEAL_SELECTOR = [
  '.section-heading',
  '.menu-item',
  '.extras',
  '.main-location',
  '.schedule-card',
  '.about-logo',
  '.about-copy',
  '.intro-strip > div',
  '.contact-aside',
  '.booking-form',
  '.map-copy',
  '.map-frame',
].join(', ')

// Adds a fade/slide-in animation to key elements as they enter the viewport.
export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(REVEAL_SELECTOR)
    targets.forEach((target) => target.classList.add('reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -45px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])
}
