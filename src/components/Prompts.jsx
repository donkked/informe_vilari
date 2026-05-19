import { Terminal } from 'lucide-react'

export default function Prompts() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 mb-12">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Terminal className="text-slate-700" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">Anexo: Documentación de Prompts (Uso de IA)</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Para el desarrollo de esta interfaz web y la estructuración del análisis legal del caso Riot Games, se utilizó asistencia de Inteligencia Artificial (IA) generativa, cumpliendo con los lineamientos de transparencia de la evaluación. A continuación, se documentan algunos de los prompts clave utilizados para transformar el contenido Markdown en componentes interactivos de React con Tailwind CSS.
      </p>

      {/* Terminal 1: Generación de Componentes Base */}
      <div className="mb-6">
        <p className="text-green-400 font-mono font-bold mb-2">$ Prompt utilizado: Generación de Componentes Base</p>
        <div className="bg-slate-900 text-slate-300 font-mono rounded-md p-4 mb-6 overflow-x-auto text-sm">
          <p className="whitespace-pre-wrap">
            {'Actúa como un desarrollador experto en React y Tailwind CSS. Crea un componente funcional llamado Resumen para el archivo src/components/Resumen.jsx. Usa JSX y estiliza todo el componente únicamente con clases utilitarias de Tailwind CSS. Importa y utiliza el ícono FileText de la librería lucide-react. El contenido debe estar dentro de un contenedor principal que actúe como una tarjeta con fondo blanco, bordes redondeados y sombra sutil...'}
          </p>
        </div>
      </div>

      {/* Terminal 2: Estructuración de Tablas y Tarjetas */}
      <div>
        <p className="text-green-400 font-mono font-bold mb-2">$ Prompt utilizado: Estructuración de Tablas y Tarjetas</p>
        <div className="bg-slate-900 text-slate-300 font-mono rounded-md p-4 overflow-x-auto text-sm">
          <p className="whitespace-pre-wrap">
            {'Crea un componente funcional llamado Comparacion para el archivo src/components/Comparacion.jsx. Convierte los datos comparativos en una tabla HTML real (<table>). La tabla debe ocupar el 100% del ancho, tener bordes limpios y un texto alineado a la izquierda. El encabezado de la tabla (<thead>) debe tener un fondo gris claro...'}
          </p>
        </div>
      </div>
    </div>
  )
}
