import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, MapPin, Palette, Wrench } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Luxury Event Design',
    desc: 'Custom concepts and full visual identity crafted to your story.',
  },
  {
    icon: Wrench,
    title: 'Event Production & Management',
    desc: 'From planning to execution with precision and artistry.',
  },
  {
    icon: MapPin,
    title: 'Destination Events',
    desc: 'Exotic and breathtaking locations worldwide.',
  },
  {
    icon: Palette,
    title: 'Creative Direction & Styling',
    desc: 'Artistic supervision, stage design, and aesthetic storytelling.',
  },
]

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white/90 sm:text-4xl"
        >
          Services
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-20 bg-[conic-gradient(from_0deg,rgba(255,255,255,0.05),rgba(251,191,36,0.15),rgba(255,255,255,0.05))] blur-2xl" />
              </div>
              <div className="relative">
                <s.icon className="h-8 w-8 text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]" />
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              </div>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_16px_4px_rgba(251,191,36,0.35)]" />
                Learn more
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
