import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EASE = 'power3.out'

/**
 * Wires up the site's scroll/load motion with GSAP + ScrollTrigger.
 * Mirrors the reference site: hero stagger-in on load, section reveals on
 * scroll, staggered grids, scroll-progress bar, hero parallax, 3D card tilt,
 * and tap ripples. Respects prefers-reduced-motion.
 *
 * @param {React.RefObject<HTMLElement>} scope - root element to scope to.
 */
export function useScrollAnimations(scope) {
  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const finePointer = window.matchMedia('(pointer: fine)').matches
      const cleanups = []

      // ---- Hero load-in (immediate, not scroll-triggered) ----
      gsap.from('.hero-label', { y: 20, opacity: 0, duration: 0.6, ease: EASE })
      gsap.from('.hero-title', { y: 44, opacity: 0, duration: 1, ease: EASE, delay: 0.15 })
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: EASE, delay: 0.4 })
      gsap.from('.hero-cta', { y: 24, opacity: 0, duration: 0.8, ease: EASE, delay: 0.6, stagger: 0.12 })
      gsap.from('.hero-pills', { y: 20, opacity: 0, duration: 0.8, ease: EASE, delay: 0.85 })
      gsap.from('.scroll-hint', { opacity: 0, duration: 1, delay: 1.2 })

      // ---- Section reveals (anchor on each <h2> in <main>) ----
      gsap.utils.toArray('main section h2').forEach((h2) => {
        const eyebrow = h2.previousElementSibling
        const intro = h2.nextElementSibling

        if (eyebrow && eyebrow.tagName === 'P') {
          gsap.from(eyebrow, {
            x: -28, opacity: 0, duration: 0.6, ease: EASE,
            scrollTrigger: { trigger: eyebrow, start: 'top 88%' },
          })
        }
        gsap.from(h2, {
          y: 40, opacity: 0, duration: 0.8, ease: EASE,
          scrollTrigger: { trigger: h2, start: 'top 88%' },
        })
        if (intro && intro.tagName === 'P') {
          gsap.from(intro, {
            y: 28, opacity: 0, duration: 0.7, ease: EASE,
            scrollTrigger: { trigger: intro, start: 'top 88%' },
          })
        }
      })

      // ---- Staggered grids + 3D tilt on card items ----
      gsap.utils.toArray('main section .grid').forEach((grid) => {
        const items = Array.from(grid.children)
        if (!items.length) return

        // Keep total stagger short even for the big logo wall.
        const each = Math.min(0.08, 0.5 / items.length)
        gsap.from(items, {
          y: 36, opacity: 0, duration: 0.6, ease: EASE, stagger: each,
          scrollTrigger: { trigger: grid, start: 'top 82%' },
        })

        // Tilt only real cards (those with a heading), not logo tiles.
        if (!finePointer) return
        items.forEach((card) => {
          if (!card.querySelector('h3')) return
          const onMove = (e) => {
            const r = card.getBoundingClientRect()
            const x = (e.clientX - r.left) / r.width - 0.5
            const y = (e.clientY - r.top) / r.height - 0.5
            gsap.to(card, {
              rotateY: x * 6, rotateX: -y * 6, duration: 0.3, ease: 'power2.out',
              transformPerspective: 1000, transformOrigin: 'center',
            })
          }
          const onLeave = () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.4, ease: 'power2.out' })
          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          cleanups.push(() => {
            card.removeEventListener('mousemove', onMove)
            card.removeEventListener('mouseleave', onLeave)
          })
        })
      })

      // ---- Hero parallax (scrub-linked) ----
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const strength = parseFloat(el.dataset.parallax || '0.2')
        gsap.to(el, {
          yPercent: -strength * 50, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true },
        })
      })

      // ---- Scroll progress bar ----
      const bar = document.querySelector('.scroll-progress')
      if (bar) {
        ScrollTrigger.create({
          onUpdate: (self) => { bar.style.transform = `scaleX(${self.progress})` },
        })
      }

      // ---- Tap / click ripple on buttons ----
      const onPointerDown = (e) => {
        const target = e.target.closest('a.rounded-lg, a.rounded-full, button[type="submit"]')
        if (!target) return
        const r = target.getBoundingClientRect()
        const size = Math.max(r.width, r.height)
        const span = document.createElement('span')
        span.className = 'apx-ripple'
        span.style.width = span.style.height = `${size}px`
        span.style.left = `${e.clientX - r.left}px`
        span.style.top = `${e.clientY - r.top}px`
        const prevPos = getComputedStyle(target).position
        if (prevPos === 'static') target.style.position = 'relative'
        target.style.overflow = 'hidden'
        target.appendChild(span)
        span.addEventListener('animationend', () => span.remove(), { once: true })
      }
      document.addEventListener('pointerdown', onPointerDown)
      cleanups.push(() => document.removeEventListener('pointerdown', onPointerDown))

      // Recalculate triggers once async media (fonts, hero video) has settled.
      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh)
      const t = window.setTimeout(refresh, 1200)
      cleanups.push(() => {
        window.removeEventListener('load', refresh)
        window.clearTimeout(t)
      })

      return () => cleanups.forEach((fn) => fn())
    },
    { scope },
  )
}
