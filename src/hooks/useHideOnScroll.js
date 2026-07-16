import { useEffect, useState } from 'react'

// Hides the target (e.g. the header) when scrolling down and reveals it when
// scrolling back up. Stays visible near the top of the page.
export function useHideOnScroll(topOffset = 40) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll < topOffset) {
        setHidden(false)
      } else if (currentScroll > lastScroll) {
        setHidden(true)
      } else if (currentScroll < lastScroll) {
        setHidden(false)
      }

      lastScroll = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [topOffset])

  return hidden
}
