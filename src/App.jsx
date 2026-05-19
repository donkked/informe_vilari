import { Shield, FileText, Scale, AlertTriangle, GitCompare, Users, Database, CheckCircle, Terminal } from 'lucide-react'
import { useState } from 'react'
import { Resumen } from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [activeTab, setActiveTab] = useState('resumen')

  const tabs = [
    { id: 'resumen', label: 'Resumen', icon: FileText, color: 'text-blue-600', bgColor: 'hover:bg-blue-50', component: Resumen },
    { id: 'marco', label: 'Marco', icon: Scale, color: 'text-blue-600', bgColor: 'hover:bg-blue-50', component: Marco },
    { id: 'delitos', label: 'Delitos', icon: AlertTriangle, color: 'text-red-600', bgColor: 'hover:bg-red-50', component: Delitos },
    { id: 'comparacion', label: 'Comparación', icon: GitCompare, color: 'text-indigo-600', bgColor: 'hover:bg-indigo-50', component: Comparacion },
    { id: 'responsabilidades', label: 'Responsabilidades', icon: Users, color: 'text-emerald-600', bgColor: 'hover:bg-emerald-50', component: Responsabilidades },
    { id: 'datos', label: 'Datos', icon: Database, color: 'text-teal-600', bgColor: 'hover:bg-teal-50', component: Datos },
    { id: 'conclusiones', label: 'Conclusiones', icon: CheckCircle, color: 'text-purple-600', bgColor: 'hover:bg-purple-50', component: Conclusiones },
    { id: 'prompts', label: 'Prompts', icon: Terminal, color: 'text-slate-600', bgColor: 'hover:bg-slate-100', component: Prompts },
  ]

  const activeTabData = tabs.find(tab => tab.id === activeTab)
  const ActiveComponent = activeTabData?.component
  const ActiveIcon = activeTabData?.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      <header className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-8 px-6 shadow-2xl border-b-2 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg">
              <Shield size={40} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Análisis Legal: Ciberataque Riot Games
                </h1>
                <span className="text-xs font-mono bg-blue-600 px-3 py-1 rounded-full">2023</span>
              </div>
              <p className="text-slate-300 text-lg mb-3">Estudio de Responsabilidades Legales y Marco Normativo</p>
              <div className="flex gap-4 text-sm">
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Derecho Cibernético
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Legislación Internacional
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Normativa Chilena
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white/10 backdrop-blur-md border-b border-slate-700 shadow-lg sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 overflow-x-auto">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 font-medium text-sm transition-all duration-300 whitespace-nowrap flex items-center gap-2 rounded-t-lg ${
                    activeTab === tab.id
                      ? `${tab.color} bg-white/10 border-b-2 border-current shadow-lg`
                      : `text-slate-300 border-transparent hover:text-white hover:bg-white/5`
                  }`}
                >
                  <TabIcon size={18} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        <div className="animate-fadeIn">
          {ActiveComponent && (
            <div>
              <ActiveComponent />
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-400 text-sm py-8 px-6 border-t-2 border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8 mb-6">
            <div>
              <p className="text-slate-300 font-semibold mb-2">Institución</p>
              <p className="text-slate-500">INACAP Valparaíso</p>
              <p className="text-slate-500">Asignatura: Seguridad de la Información</p>
            </div>
            <div>
              <p className="text-slate-300 font-semibold mb-2">Caso de Estudio</p>
              <p className="text-slate-500">Hackeo a Riot Games - Enero 2023</p>
              <p className="text-slate-500">Análisis Jurídico y Técnico</p>
            </div>
            <div className="text-right">
              <p className="text-slate-300 font-semibold mb-2">Autor</p>
              <p className="text-slate-500">Ariel Villarroel</p>
              <p className="text-slate-500">Docente: Rubén Schnettler L.</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 flex justify-between items-center">
            <p className="text-slate-600">© 2026 - Evaluación Académica | Uso de IA documentado</p>
            <p className="text-slate-600">Análisis Legal de Seguridad Cibernética</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

export default App