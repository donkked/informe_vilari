import { ChevronDown } from 'lucide-react'

export default function Navigation() {
  const sections = [
    { id: 'resumen', label: 'Resumen', color: 'hover:text-blue-600' },
    { id: 'marco', label: 'Marco Normativo', color: 'hover:text-blue-600' },
    { id: 'delitos', label: 'Delitos', color: 'hover:text-red-600' },
    { id: 'comparacion', label: 'Comparación', color: 'hover:text-indigo-600' },
    { id: 'responsabilidades', label: 'Responsabilidades', color: 'hover:text-emerald-600' },
    { id: 'datos', label: 'Datos', color: 'hover:text-teal-600' },
    { id: 'conclusiones', label: 'Conclusiones', color: 'hover:text-purple-600' },
    { id: 'prompts', label: 'Prompts', color: 'hover:text-slate-600' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          <span className="text-sm font-bold text-slate-700 whitespace-nowrap">Secciones:</span>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 whitespace-nowrap ${section.color}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
