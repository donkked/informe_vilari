import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-slate-900 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  )
}
