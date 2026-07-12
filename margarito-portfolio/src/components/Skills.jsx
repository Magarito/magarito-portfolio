import { motion } from 'framer-motion'
import { Tags, Wrench, Cpu, BrainCircuit, ScaleIcon, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'

const GROUPS = [
  {
    icon: Tags,
    title: 'Data Annotation & Labelling',
    items: ['Image annotation', 'Text annotation', 'Audio annotation', 'Dataset preparation', 'Quality assurance'],
  },
  {
    icon: Wrench,
    title: 'Annotation Tools',
    items: ['Labelbox', 'Supervisely', 'Amazon SageMaker Ground Truth', 'Prodigy', 'CVAT'],
  },
  {
    icon: Cpu,
    title: 'Machine Learning Support',
    items: ['Dataset validation', 'Training data preparation', 'Data consistency improvement'],
  },
  {
    icon: BrainCircuit,
    title: 'Technical Domains',
    items: ['Computer Vision', 'NLP', 'Sentiment Analysis', 'Speech Recognition'],
  },
  {
    icon: ScaleIcon,
    title: 'Compliance & Ethics',
    items: ['GDPR', 'Ethical AI', 'Data protection'],
  },
  {
    icon: Users,
    title: 'Professional Skills',
    items: ['Attention to detail', 'Communication', 'Remote collaboration', 'Workflow optimisation'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-ink-800/30 border-y border-ink-700">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="class: capabilities"
          confidence={97.8}
          title="A labeled inventory of tools & technical range"
          subtitle="Grouped the way an annotation project itself would be scoped — by task type, tooling, technical domain, and the standards that govern the data."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map((g, i) => {
            const Icon = g.icon
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="rounded-lg border border-ink-600 bg-ink-800/60 backdrop-blur-sm p-6 hover:border-truth/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded border border-truth/30 text-truth">
                    <Icon size={15} />
                  </span>
                  <h3 className="font-display text-sm font-medium text-mist-100">{g.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="tag-label px-2.5 py-1 rounded border border-ink-600 text-mist-300 bg-ink-900/50"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
