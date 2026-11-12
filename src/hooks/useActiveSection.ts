import { useEffect, useState } from 'react'
import type { SectionId } from '../types'

export function useActiveSection(
  sectionIds: readonly SectionId[],
  defaultSection: SectionId = 'home',
): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(defaultSection)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 40) {
          setActiveSection(defaultSection)
          return
        }

        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )

        const topEntry = intersecting[0]
        if (topEntry?.target.id) {
          setActiveSection(topEntry.target.id as SectionId)
        }
      },
      {
        rootMargin: '-25% 0px -60% 0px',
        threshold: [0, 0.05, 0.15, 0.35],
      },
    )

    const observeSections = () => {
      observer.disconnect()
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }
    }

    observeSections()

    // Re-attach observers automatically when lazy-loaded sections mount
    const mainEl = document.getElementById('main-content')
    const mutationObserver = mainEl
      ? new MutationObserver(() => observeSections())
      : null

    if (mainEl && mutationObserver) {
      mutationObserver.observe(mainEl, { childList: true, subtree: false })
    }

    return () => {
      observer.disconnect()
      mutationObserver?.disconnect()
    }
  }, [sectionIds, defaultSection])

  return activeSection
}
