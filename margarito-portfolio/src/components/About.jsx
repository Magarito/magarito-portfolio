import { motion } from 'framer-motion'
import { ShieldCheck, Globe2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import AnimatedCounter from './AnimatedCounter'

const STATS = [
  { value: 100000, suffix: '+', label: 'Data points annotated & reviewed' },
  { value: 30, suffix: '%', label: 'Reduction in annotation turnaround time' },
  { value: 50, suffix: '+', label: 'Freelance annotation projects completed' },
]

const DOMAINS = ['Computer Vision', 'NLP', 'Audio Annotation', 'Dataset QA', 'AI Evaluation', 'Workflow Optimisation', 'GDPR Compliance']

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="class: profile"
          confidence={99.4}
          title="Precision annotation, built for production ML"
          subtitle="Margarito Trujillo is an AI Annotation Specialist with experience supporting machine learning development through dataset creation, annotation, validation, and workflow optimisation."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5 text-mist-300 leading-relaxed">
            <p>
              His work spans computer vision, natural language processing, and audio annotation, with a
              consistent focus on label accuracy, edge-case handling, and dataset consistency across large,
              distributed teams. He collaborates remotely with engineers and data scientists to translate
              model requirements into annotation guidelines that hold up under review.
            </p>
            <p>
              Across full-time and freelance engagements, Margarito has annotated and reviewed{' '}
              <span className="text-mist-100 font-medium">100,000+ data points</span>, reduced annotation
              turnaround time by <span className="text-mist-100 font-medium">30%</span> through workflow
              redesign, and delivered <span className="text-mist-100 font-medium">50+ freelance projects</span>{' '}
              for technology and e-commerce clients — consistently prioritising accuracy, ethical data handling,
              and clear communication with technical stakeholders.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {DOMAINS.map((d) => (
                <span
                  key={d}
                  className="tag-label px-2.5 py-1 rounded border border-ink-600 text-mist-300 bg-ink-800/60"
                >
                  {d}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <span className="inline-flex items-center gap-2 text-sm text-mist-300">
                <ShieldCheck size={16} className="text-truth" /> GDPR-compliant data handling
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-mist-300">
                <Globe2 size={16} className="text-truth" /> Remote-first collaboration
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bbox rounded-lg border border-ink-600 bg-ink-800/50 p-6"
              >
                <div className="font-display text-3xl sm:text-4xl text-truth font-medium">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 tag-label normal-case text-mist-300 leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
