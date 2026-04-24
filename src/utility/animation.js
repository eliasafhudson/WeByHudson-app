// ── Slide up desde abajo ──────────────────────────────────────────────────────
export const slipeUp = (delay = 0) => ({
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  },
})

// ── Slide desde un lado ───────────────────────────────────────────────────────
export const slipeInFromSide = (direction = 'left', delay = 0) => ({
  initial: { x: direction === 'left' ? -80 : 80, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  },
})

// ── Fade in simple ────────────────────────────────────────────────────────────
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  },
})

// ── Fade in al entrar en viewport (para useInView) ────────────────────────────
export const fadeInView = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

// ── Scale in ─────────────────────────────────────────────────────────────────
export const scaleIn = (delay = 0) => ({
  initial: { scale: 0.85, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  },
})

// ── Smooth scroll helper ──────────────────────────────────────────────────────
export const smoothScroll = (targetId) => {
  const target = document.querySelector(targetId)
  if (target) {
    const headerOffset = 80
    const offsetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - headerOffset
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
  }
}
