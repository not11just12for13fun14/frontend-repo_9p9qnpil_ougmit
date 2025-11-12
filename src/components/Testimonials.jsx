import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TestimonialCard = ({ t, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
  >
    <p className="text-white/90">“{t.quote}”</p>
    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    <div className="mt-4 text-sm text-white/70">
      <span className="font-semibold text-white/90">{t.name}</span>
      {t.company && <span> • {t.company}</span>}
    </div>
  </motion.div>
)

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || ''
        const res = await fetch(`${base}/testimonials`)
        const data = await res.json()
        setTestimonials(data)
      } catch (e) {
        // Fallback static if fetch fails
        setTestimonials([
          { name: 'Amelia & Pierre', company: 'Château de Chantilly', quote: 'They transformed our vision into an ethereal celebration. Every moment felt like cinema.' },
          { name: 'Global Ventures Summit', company: 'GVS 2025', quote: 'Impeccable orchestration from arrival to after-party. A masterclass in production.' },
          { name: 'Isla & Noor', company: 'Marrakech Destination Wedding', quote: 'Artful, intimate, and breathtaking. Our guests still talk about it.' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="testimonials" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          Feedback & Testimonials
        </motion.h2>

        {loading ? (
          <div className="mt-10 text-white/70">Loading testimonials…</div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} delay={i * 0.1} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-md"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const form = e.currentTarget
              const payload = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
              }
              try {
                const base = import.meta.env.VITE_BACKEND_URL || ''
                const res = await fetch(`${base}/feedback`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(payload),
                })
                if (!res.ok) throw new Error('Failed to submit')
                form.reset()
                alert("Thank you for your message — we'll be in touch.")
              } catch (err) {
                alert('Unable to send right now. Please try again later.')
              }
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Name</label>
              <input name="name" required className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-amber-300/50" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-white/60">Email</label>
              <input type="email" name="email" required className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-amber-300/50" placeholder="you@domain.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-widest text-white/60">Message</label>
              <textarea name="message" required rows="4" className="mt-2 w-full rounded-lg border border-white/10 bg-white/10 p-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md focus:border-amber-300/50" placeholder="Tell us about your event…" />
            </div>
            <div className="md:col-span-2">
              <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                Let’s Create Magic
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 transition group-hover:shadow-[0_0_16px_4px_rgba(251,191,36,0.45)]" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
