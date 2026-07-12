import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

const DEGREES = [
  {
    degree: 'Master of Science — Computer Science',
    school: 'The University of Texas at Austin',
    year: '2010',
  },
  {
    degree: 'Bachelor of Engineering (B.Eng.) — Computer Engineering',
    school: 'The University of Texas at Austin',
    year: '2000',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading tag="class: education" confidence={100.0} title="Academic background" />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {DEGREES.map((d, i) => (
            <motion.div
              key={d.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-ink-600 bg-ink-800/60 p-6 flex gap-4"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded border border-truth/30 text-truth">
                <GraduationCap size={18} />
              </span>
              <div>
                <p className="font-display text-mist-100 font-medium leading-snug">{d.degree}</p>
                <p className="text-sm text-mist-300 mt-1">{d.school}</p>
                <p className="tag-label text-truth mt-2">{d.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
