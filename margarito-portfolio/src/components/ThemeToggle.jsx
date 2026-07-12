import { useEffect, useState } from 'react'
import { Moon, SunMedium } from 'lucide-react'

/**
 * The site is designed dark-first (as requested). This toggle switches
 * between the standard dark palette and a higher-contrast "review mode"
 * dark theme — useful when presenting annotated work under bright light —
 * rather than a full light theme, to preserve the intended aesthetic.
 */
export default function ThemeToggle() {
  const [reviewMode, setReviewMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('review-mode', reviewMode)
  }, [reviewMode])

  return (
    <button
      onClick={() => setReviewMode((v) => !v)}
      aria-label="Toggle contrast mode"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-11 h-11 rounded-full border border-ink-600 bg-ink-800/90 backdrop-blur-sm text-mist-200 hover:border-truth hover:text-truth transition-colors focus-ring shadow-lg shadow-black/30"
    >
      {reviewMode ? <SunMedium size={17} /> : <Moon size={17} />}
    </button>
  )
}
