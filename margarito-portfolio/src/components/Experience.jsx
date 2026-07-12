import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const ROLES = [
  {
    period: 'Mar 2022 — Present',
    role: 'AI Annotation Specialist',
    org: 'Lumen Technology (Remote)',
    points: [
      'Managed end-to-end annotation workflows for image, text, and audio datasets',
      'Conducted rigorous quality assurance checks across labeling batches',
      'Optimised annotation processes, reducing turnaround time by 30%',
      'Annotated and reviewed 100,000+ data points',
      'Collaborated closely with engineers and data scientists on labeling specs',
      'Ensured GDPR compliance across all data-handling processes',
    ],
  },
  {
    period: 'Jan 2022 — Present',
    role: 'Freelance AI Annotation Consultant',
    org: 'Independent',
    points: [
      'Delivered annotation services for technology and e-commerce clients',
      'Structured datasets for ML training and evaluation pipelines',
      'Completed 50+ projects across computer vision and NLP',
      'Advised clients on annotation workflows and best practices',
      'Maintained high-quality, consistent data standards across engagements',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="sequence: timeline"
          confidence={98.9}
          title="Experience, in chronological order"
          subtitle="Two concurrent engagements — a full-time annotation role and an ongoing freelance practice — both active since early 2022."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-truth/60 via-ink-600 to-transparent" />

          <div className="space-y-14">
            {ROLES.map((r, i) => (
              <motion.div
                key={r.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-ink-900 border-2 border-truth" />

                <div className="tag-label text-truth mb-2">{r.period}</div>
                <h3 className="font-display text-xl text-mist-100 font-medium">{r.role}</h3>
                <p className="text-mist-400 text-sm mb-4">{r.org}</p>

                <ul className="space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-mist-300 text-sm leading-relaxed">
                      <span className="text-truth mt-1.5 flex-shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
