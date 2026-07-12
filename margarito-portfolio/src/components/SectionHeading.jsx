import { motion } from 'framer-motion'

/**
 * Every section is framed like a detected region on an annotation canvas:
 * a small tagged bounding box (class label + confidence) sits above the
 * heading, echoing the bounding-box/label language used throughout the site.
 */
export default function SectionHeading({ tag, confidence = 99.1, title, subtitle, align = 'left', accent = 'truth' }) {
  const accentClass = accent === 'amber' ? 'text-pred border-pred/40' : 'text-truth border-truth/40'
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 border ${accentClass} rounded px-2.5 py-1 mb-5`}
      >
        <span className={`tag-label ${accent === 'amber' ? 'text-pred' : 'text-truth'}`}>{tag}</span>
        <span className="w-px h-3 bg-current opacity-30" />
        <span className="tag-label opacity-70">{confidence.toFixed(1)}%</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="font-display text-3xl sm:text-4xl font-medium text-mist-100 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-mist-300 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
