import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Tiktok, Pinterest } from 'lucide-react'

const socials = [
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Pinterest, href: 'https://pinterest.com' },
  { icon: Tiktok, href: 'https://tiktok.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
]

const FollowUs = () => {
  return (
    <section id="follow" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(90%_50%_at_50%_120%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Follow Us
        </motion.h2>
        <div className="mt-10 flex items-center justify-center gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="group relative rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-md"
            >
              <s.icon className="h-6 w-6 text-white transition group-hover:text-amber-300" />
              <span className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-gradient-to-tr from-amber-300/0 via-white/0 to-amber-300/0 opacity-0 blur-2xl transition group-hover:opacity-40" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FollowUs
