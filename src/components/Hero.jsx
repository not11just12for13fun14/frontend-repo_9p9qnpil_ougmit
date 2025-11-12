import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section ref={ref} className="relative h-[110vh] w-full overflow-hidden bg-black text-white">
      {/* Background 3D Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient light overlays */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 -left-20 h-[45vh] w-[45vh] rounded-full bg-gradient-to-br from-amber-500/30 via-fuchsia-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[60vh] w-[60vh] rounded-full bg-gradient-to-tr from-white/10 via-amber-300/10 to-purple-400/10 blur-3xl" />
      </div>

      {/* Sparkle particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/60 shadow-[0_0_12px_2px_rgba(255,255,255,0.6)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              transform: `scale(${Math.random() * 1.2 + 0.4})`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`
            }}
          />
        ))}
      </div>

      {/* Loading veil */}
      {loading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-14 w-14 animate-pulse rounded-full bg-gradient-to-br from-amber-400 to-fuchsia-500 shadow-[0_0_40px_8px_rgba(255,199,135,0.45)]" />
            <p className="text-sm tracking-[0.35em] text-white/80">CURATING THE SCENE</p>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <motion.div style={{ y, scale }} className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-balance bg-gradient-to-br from-white via-amber-100 to-amber-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Crafting Unforgettable Moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-white/80"
        >
          World-class event design & production studio for luxury weddings, destination experiences, and cinematic brand events.
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 hover:shadow-[0_0_40px_6px_rgba(255,255,255,0.15)]"
        >
          Explore the Experience
          <span className="h-2 w-2 animate-ping rounded-full bg-amber-300" />
        </motion.a>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <div className="flex items-center gap-2 text-xs tracking-widest">
            <span className="inline-block h-2 w-2 rounded-full bg-white/60" />
            SCROLL
          </div>
        </div>
      </motion.div>

      <style>
        {`
        @keyframes float { 0%,100%{ transform: translateY(0)} 50%{ transform: translateY(-12px) } }
        `}
      </style>
    </section>
  )
}

export default Hero
