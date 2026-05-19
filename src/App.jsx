import { Shield } from 'lucide-react'
import { Resumen } from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white py-10 px-6 shadow">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Evaluación 2 - Unidad 2
            </h1>
            <p className="text-slate-300 mt-1">
              T13034 - Fundamentos de Seguridad de la Información
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        {/* Aquí es donde se muestra tu nuevo componente */}
        <Resumen />
        <Marco />
        <Delitos />
        <Comparacion />
        <Responsabilidades />
        <Datos />
      </main>

      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Estudiante: Ariel Villarroel </span>
          <span>Docente: Rubén Schnettler L. - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App