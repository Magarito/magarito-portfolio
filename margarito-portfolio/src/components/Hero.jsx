import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MousePointer2, Square, Spline, Crosshair, Mic } from 'lucide-react'

const ROLES = ['Computer Vision', 'Natural Language Processing', 'Audio Annotation', 'AI Evaluation', 'Dataset QA']

function TypingRole() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[index]
    const speed = deleting ? 35 : 55
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1100)
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % ROLES.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, index])

  return (
    <span className="font-mono text-truth">
      {display}
      <span className="inline-block w-[2px] h-[0.9em] bg-truth ml-0.5 translate-y-[1px] animate-blink" />
    </span>
  )
}

const BOXES = [
  { top: '14%', left: '8%', w: '30%', h: '26%', label: 'class: subject', conf: 98.7, tone: 'truth' },
  { top: '52%', left: '46%', w: '26%', h: '32%', label: 'class: object_a', conf: 94.2, tone: 'amber' },
  { top: '20%', left: '62%', w: '22%', h: '20%', label: 'class: object_b', conf: 91.5, tone: 'truth' },
]

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-truth-glow blur-[120px] opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bbox inline-block px-3 py-1.5 mb-7"
          >
            <span className="tag-label text-truth">human_in_the_loop · verified</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-medium text-mist-100 tracking-tight"
          >
            AI Annotation Specialist &amp;<br className="hidden sm:block" /> AI Evaluation Contributor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-mist-300 leading-relaxed max-w-xl"
          >
            Supporting the development of machine learning systems through high-quality annotation,
            dataset validation, and AI workflow optimisation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-5 h-6 font-mono text-sm text-mist-300"
          >
            <span className="opacity-60">current_focus:</span> <TypingRole />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-truth text-ink-950 font-medium text-sm px-5 py-3 hover:bg-truth-dim transition-colors focus-ring"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-mist-500/40 text-mist-100 font-medium text-sm px-5 py-3 hover:border-truth hover:text-truth transition-colors focus-ring"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist-300"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={15} className="text-truth" />
              margaritotrujillo67@gmail.com
            </span>
            <span className="inline-flex items-center gap-2 font-mono">+1 619 212 1929</span>
          </motion.div>
        </div>

        {/* Signature visual: a mock annotation canvas, framed like the tool
            Margarito works in every day — the hero's thesis rendered literally. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-xl border border-ink-600 bg-ink-800/70 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-600 bg-ink-800/90">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-mist-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-mist-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-mist-500/60" />
              </div>
              <span className="tag-label text-mist-400">annotation_canvas.session</span>
              <div className="flex items-center gap-2.5 text-mist-400">
                <MousePointer2 size={13} />
                <Square size={13} />
                <Spline size={13} />
                <Crosshair size={13} />
                <Mic size={13} />
              </div>
            </div>

            <div className="relative aspect-[4/3] bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
              <div className="absolute inset-0 opacity-[0.15] grid-backdrop" />
              {BOXES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                  className={`absolute bbox ${b.tone === 'amber' ? 'bbox-amber' : ''}`}
                  style={{ top: b.top, left: b.left, width: b.w, height: b.h }}
                >
                  <span
                    className={`absolute -top-6 left-0 tag-label px-1.5 py-0.5 rounded-sm bg-ink-900/90 border ${
                      b.tone === 'amber' ? 'border-pred/50 text-pred' : 'border-truth/50 text-truth'
                    }`}
                  >
                    {b.label} · {b.conf}%
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="px-4 py-3 border-t border-ink-600 flex items-center justify-between">
              <span className="tag-label text-mist-400">3 regions labeled</span>
              <span className="tag-label text-truth">reviewed &amp; approved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
