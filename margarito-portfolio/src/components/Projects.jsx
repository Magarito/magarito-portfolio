import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScanEye, MessageSquareText, AudioWaveform, ClipboardCheck, Workflow } from 'lucide-react'
import SectionHeading from './SectionHeading'

const CATEGORIES = ['All', 'Computer Vision', 'NLP', 'Audio', 'QA', 'Workflow']

const PROJECTS = [
  {
    title: 'Computer Vision Dataset Annotation',
    category: 'Computer Vision',
    icon: ScanEye,
    description:
      'Annotated image datasets for object detection and classification models using bounding boxes and segmentation tools.',
    tools: ['CVAT', 'Labelbox', 'SageMaker Ground Truth'],
    achievement: 'Delivered 40,000+ labeled frames across 12 object classes at 98%+ inter-annotator agreement.',
    metric: { value: '98.4%', label: 'label accuracy' },
    tags: ['Bounding boxes', 'Segmentation', 'Object detection'],
    tone: 'truth',
  },
  {
    title: 'NLP Sentiment Analysis Dataset',
    category: 'NLP',
    icon: MessageSquareText,
    description:
      'Labelled text datasets for sentiment classification and natural language understanding tasks.',
    tools: ['Prodigy', 'Labelbox'],
    achievement: 'Structured 25,000+ text samples across 5 sentiment classes for a downstream classifier.',
    metric: { value: '25K+', label: 'samples labeled' },
    tags: ['Sentiment', 'Text classification', 'NLU'],
    tone: 'amber',
  },
  {
    title: 'Speech Recognition Audio Annotation',
    category: 'Audio',
    icon: AudioWaveform,
    description:
      'Annotated and validated speech datasets for machine learning speech recognition systems.',
    tools: ['Custom audio tooling', 'Prodigy'],
    achievement: 'Transcribed and time-aligned 300+ hours of speech audio across multiple accents.',
    metric: { value: '300+', label: 'hours annotated' },
    tags: ['Transcription', 'Time alignment', 'ASR'],
    tone: 'truth',
  },
  {
    title: 'AI Dataset Quality Assurance Pipeline',
    category: 'QA',
    icon: ClipboardCheck,
    description:
      'Performed dataset audits and consistency validation to improve model performance and reduce annotation errors.',
    tools: ['CVAT', 'SageMaker Ground Truth', 'Internal QA dashboards'],
    achievement: 'Reduced downstream annotation error rate by 22% through structured audit sampling.',
    metric: { value: '-22%', label: 'error rate' },
    tags: ['Auditing', 'Consistency checks', 'QA sampling'],
    tone: 'amber',
  },
  {
    title: 'Annotation Workflow Optimisation',
    category: 'Workflow',
    icon: Workflow,
    description:
      'Designed improved annotation workflows that reduced delivery times and improved dataset consistency.',
    tools: ['Labelbox', 'Process documentation', 'Team training'],
    achievement: 'Redesigned batch review process, cutting turnaround time by 30% team-wide.',
    metric: { value: '30%', label: 'faster turnaround' },
    tags: ['Process design', 'Team enablement', 'Throughput'],
    tone: 'truth',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-ink-800/30 border-y border-ink-700">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          tag="class: portfolio"
          confidence={99.0}
          title="Projects, filtered by dataset type"
          subtitle="A sample of annotation and evaluation work across computer vision, language, audio, and process design."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`tag-label px-3 py-1.5 rounded border transition-colors focus-ring ${
                active === c
                  ? 'border-truth text-truth bg-truth-glow'
                  : 'border-ink-600 text-mist-300 hover:border-mist-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => {
              const Icon = p.icon
              const isAmber = p.tone === 'amber'
              return (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-lg border border-ink-600 bg-ink-800/60 backdrop-blur-sm overflow-hidden hover:border-truth/50 transition-colors"
                >
                  <div className="relative h-36 bg-gradient-to-br from-ink-700 to-ink-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 grid-backdrop" />
                    <div
                      className={`absolute inset-4 rounded ${isAmber ? 'bbox bbox-amber' : 'bbox'} flex items-center justify-center`}
                    >
                      <Icon
                        size={30}
                        className={`${isAmber ? 'text-pred' : 'text-truth'} opacity-80 group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <span
                      className={`absolute top-3 right-3 tag-label px-2 py-0.5 rounded-sm bg-ink-900/80 ${
                        isAmber ? 'text-pred' : 'text-truth'
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-base text-mist-100 font-medium leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-mist-300 leading-relaxed">{p.description}</p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className={`font-display text-xl font-medium ${isAmber ? 'text-pred' : 'text-truth'}`}>
                        {p.metric.value}
                      </span>
                      <span className="tag-label text-mist-400">{p.metric.label}</span>
                    </div>

                    <p className="mt-3 text-xs text-mist-400 leading-relaxed">{p.achievement}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="tag-label px-2 py-0.5 rounded border border-ink-600 text-mist-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-ink-600 text-xs text-mist-400">
                      <span className="text-mist-300">Tools:</span> {p.tools.join(', ')}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
