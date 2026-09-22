import { onMounted, onUnmounted } from 'vue'

/**
 * Observes [data-reveal] nodes inside sectionRef and adds .is-revealed on scroll.
 */
export function useScrollReveal(sectionRef, selector = '[data-reveal]') {
  let observer

  onMounted(() => {
    const root = sectionRef.value
    if (!root) return

    const nodes = root.querySelectorAll(selector)
    if (!nodes.length) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      nodes.forEach((node) => node.classList.add('is-revealed'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -6% 0px'
      }
    )

    nodes.forEach((node, index) => {
      if (!node.style.getPropertyValue('--reveal-delay')) {
        node.style.setProperty('--reveal-delay', `${Math.min(index * 85, 510)}ms`)
      }
      observer.observe(node)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
