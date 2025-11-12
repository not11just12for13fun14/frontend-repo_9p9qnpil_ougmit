import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl"
        >
          A World-Class Event Design & Production Studio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80"
        >
          We create exclusive experiences across the globe — from luxury weddings to immersive corporate events. Our approach blends creative direction, architectural staging, and cinematic production to transform environments and craft unforgettable moments.
        </motion.p>
      </div>
    </section>
  )
}

export default About
