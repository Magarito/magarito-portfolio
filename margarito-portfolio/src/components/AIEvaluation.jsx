import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const CRITERIA = [
  { label: 'Instruction-following evaluation', score: 'PASS', pct: 97 },
  { label: 'Dataset consistency review', score: 'PASS', pct: 98 },
  { label: 'AI response quality analysis', score: 'PASS', pct: 95 },
  { label: 'Annotation accuracy validation', score: 'PASS', pct: 99 },
  { label: 'Human-in-the-loop review systems', score: 'PASS', pct: 96 },
  { label: 'Ethical AI compliance', score: 'PASS', pct: 100 },
]

export default function AIEvaluation() {
  return (
    <section id="evaluation" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            tag="class: evaluation"
            confidence={99.6}
            title="AI Evaluation & Quality Assurance"
            subtitle="Beyond labeling, Margarito reviews model behaviour itself — checking whether outputs follow instructions, hold up under scrutiny, and meet the standard required before a dataset or response is signed off."
          />

          <div className="mt-8 space-y-4 text-mist-300 text-sm leading-relaxed">
            <p>
              Evaluation work centers on structured, repeatable review: comparing model outputs against
              task instructions, flagging inconsistencies across annotated datasets, and scoring response
              quality against defined rubrics rather than intuition alone.
            </p>
            <p>
              This is paired with human-in-the-loop review systems that route uncertain or low-confidence
              cases back through additional checks, and an ongoing commitment to ethical AI compliance —
              ensuring data handling and evaluation practices meet privacy and fairness standards throughout.
            </p>
          </div>
        </div>

        {/* Signature visual: an evaluation console readout, echoing the
            bounding-box canvas from the hero but applied to model behaviour
            rather than image regions. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl border border-ink-600 bg-ink-800/70 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-truth/10 to-transparent animate-scanline" />
          </div>

          <div className="relative flex items-center justify-between px-5 py-3 border-b border-ink-600">
            <span className="tag-label text-mist-400">eval_run.log</span>
            <span className="tag-label text-truth">6 / 6 checks passed</span>
          </div>

          <div className="relative divide-y divide-ink-600">
            {CRITERIA.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-between px-5 py-3.5"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-truth flex-shrink-0" />
                  <span className="text-sm text-mist-200">{c.label}</span>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-16 h-1.5 rounded-full bg-ink-600 overflow-hidden hidden sm:block">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.08 + 0.2 }}
                      className="h-full bg-truth"
                    />
                  </div>
                  <span className="tag-label text-truth w-9 text-right">{c.pct}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
