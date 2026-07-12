import { motion } from 'framer-motion'
import { Award, ShieldCheck, HeartPulse, HandHeart } from 'lucide-react'
import SectionHeading from './SectionHeading'

const CERTS = [
  { icon: Award, title: 'AI / Machine Learning Specialisation', issuer: 'Coursera' },
  { icon: ShieldCheck, title: 'GDPR & Data Protection Training', issuer: 'Certified Provider' },
  { icon: HeartPulse, title: 'Child Protection (CPL), CPR & First Aid', issuer: 'Certified Provider' },
  { icon: HandHeart, title: 'Safeguarding and Dignity in Care', issuer: 'Certified Provider' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 bg-ink-800/30 border-y border-ink-700">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="class: certifications" confidence={100.0} title="Certifications & training" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-lg border border-ink-600 bg-ink-800/60 p-5 hover:border-truth/40 transition-colors"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded border border-truth/30 text-truth mb-4">
                  <Icon size={16} />
                </span>
                <p className="font-display text-sm text-mist-100 font-medium leading-snug">{c.title}</p>
                <p className="tag-label text-mist-400 mt-2">{c.issuer}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
