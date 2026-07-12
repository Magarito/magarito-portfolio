import { Scan } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-ink-700">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded border border-truth/40 text-truth">
            <Scan size={12} />
          </span>
          <span className="tag-label text-mist-400">© {new Date().getFullYear()} Margarito Trujillo</span>
        </div>
        <p className="tag-label text-mist-400 text-center">
          Built for AI Evaluation, Annotation &amp; Machine Learning Support
        </p>
      </div>
    </footer>
  )
}
