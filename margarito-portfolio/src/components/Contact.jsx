import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const CHANNELS = [
  { icon: Mail, label: 'Email', value: 'margaritotrujillo67@gmail.com', href: 'mailto:margaritotrujillo67@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+1 619 212 1929', href: 'tel:+16192121929' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/margarito-trujillo', href: '#' },
  { icon: Github, label: 'GitHub', value: 'github.com/margarito-trujillo', href: '#' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your form handler / API route of choice (e.g. Formspree, Resend).
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-ink-800/30 border-y border-ink-700">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="class: contact"
          confidence={99.9}
          title="Start a conversation"
          subtitle="Open to full-time, contract, and freelance annotation or AI evaluation work."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-3">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-lg border border-ink-600 bg-ink-800/60 p-4 hover:border-truth/40 transition-colors focus-ring"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded border border-truth/30 text-truth flex-shrink-0">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="tag-label text-mist-400">{c.label}</p>
                    <p className="text-sm text-mist-100 truncate">{c.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-lg border border-ink-600 bg-ink-800/60 p-6 sm:p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 size={32} className="text-truth mb-3" />
                <p className="font-display text-mist-100">Message sent</p>
                <p className="text-sm text-mist-400 mt-1">Thanks for reaching out — expect a reply within 1–2 business days.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="tag-label text-mist-400 block mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-md bg-ink-900 border border-ink-600 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-400 focus:border-truth focus-ring outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="tag-label text-mist-400 block mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full rounded-md bg-ink-900 border border-ink-600 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-400 focus:border-truth focus-ring outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="tag-label text-mist-400 block mb-2">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the dataset, timeline, and scope..."
                    className="w-full rounded-md bg-ink-900 border border-ink-600 px-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-400 focus:border-truth focus-ring outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 rounded-md bg-truth text-ink-950 font-medium text-sm px-5 py-2.5 hover:bg-truth-dim transition-colors focus-ring"
                >
                  Send message
                  <Send size={14} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
