import { Terminal } from 'lucide-react'

export default function Prompts() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Terminal className="text-slate-300" size={32} />
        <h1 className="text-3xl font-bold text-white">Anexo: Documentación de Prompts (Uso de IA)</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-slate-300 mb-8 leading-relaxed">
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
      <div className="mb-6">
        <p className="text-green-400 font-mono font-bold mb-2">$ Prompt utilizado: Estructuración de Tablas y Tarjetas</p>
        <div className="bg-slate-900 text-slate-300 font-mono rounded-md p-4 mb-6 overflow-x-auto text-sm">
          <p className="whitespace-pre-wrap">
            {'Crea un componente funcional llamado Comparacion para el archivo src/components/Comparacion.jsx. Convierte los datos comparativos en una tabla HTML real (<table>). La tabla debe ocupar el 100% del ancho, tener bordes limpios y un texto alineado a la izquierda. El encabezado de la tabla (<thead>) debe tener un fondo gris claro...'}
          </p>
        </div>
      </div>

      {/* Sección: Interacción 1 - Marco Normativo */}
      <div className="bg-blue-900/30 border-l-4 border-blue-400 p-5 mb-6 rounded-r">
        <h2 className="text-xl font-bold text-blue-300 mb-3">Interacción 1: Estructuración del Marco Normativo y Delitos</h2>
        <div className="text-slate-300 space-y-3">
          <p>
            <span className="font-semibold">Secciones generadas:</span> Marco Normativo y Delitos
          </p>
          <p>
            <span className="font-semibold">Prompt utilizado:</span>
          </p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-blue-400">
            "Haz el papel de un experto legal en ciberseguridad. Para el caso del hackeo a Riot Games en 2023, redacta el marco normativo combinando leyes de Estados Unidos (donde opera la empresa) con el escenario hipotético de que el ataque hubiera ocurrido en Chile. Luego, mapea las acciones de los atacantes usando los artículos específicos de la Ley N° 21.459 chilena."
          </p>
          <p>
            <span className="font-semibold">Resultado:</span> Se aceptó la excelente estructuración que la IA hizo para conectar la intrusión con el <strong>Artículo 2 (Acceso Ilícito)</strong> y el <strong>Artículo 8 (Abuso de dispositivos)</strong> de la Ley 21.459 chilena. Se corrigió y ajustó el formato de salida para adaptarse a la sintaxis JSX requerida, eliminando introducciones genéricas del chatbot.
          </p>
        </div>
      </div>

      {/* Sección: Interacción 2 - Tabla Comparativa */}
      <div className="bg-green-900/30 border-l-4 border-green-400 p-5 mb-6 rounded-r">
        <h2 className="text-xl font-bold text-green-300 mb-3">Interacción 2: Tabla Comparativa por Industria</h2>
        <div className="text-slate-300 space-y-3">
          <p>
            <span className="font-semibold">Sección generada:</span> Comparación de Marcos Regulatorios
          </p>
          <p>
            <span className="font-semibold">Prompt utilizado:</span>
          </p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-green-400">
            "Crea una tabla comparativa en formato Markdown que contraste los marcos regulatorios de ciberseguridad. Compara la industria de los Videojuegos (basado en Riot Games), el sector Bancario y el sector de la Salud. Utiliza 4 ejes: Foco de protección, normas de referencia, obligación de reporte y criticidad del impacto."
          </p>
          <p>
            <span className="font-semibold">Resultado:</span> Se aceptó completamente el contenido tabular generado, ya que logró abstraer las diferencias entre la laxitud relativa del sector de videojuegos frente a la extrema rigurosidad del sector bancario chileno (CMF) en cuanto a tiempos de reporte.
          </p>
        </div>
      </div>

      {/* Sección: Reflexión Final */}
      <div className="bg-purple-900/30 border-l-4 border-purple-400 p-5 rounded-r">
        <h2 className="text-xl font-bold text-purple-300 mb-3">Reflexión Final sobre el Uso de la IA</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          El uso de Gemini como herramienta de apoyo fue fundamental para agilizar la redacción y estructuración técnica del análisis legal. Sin embargo, quedó en evidencia que la IA es una herramienta de apoyo y <strong>no un reemplazo del criterio técnico</strong> humano.
        </p>
        <p className="text-slate-300 leading-relaxed">
          La calidad de la información obtenida dependió completamente de la <strong>especificidad del prompt</strong>. Pedir instrucciones genéricas como "hazme un análisis de leyes" entregaba respuestas inútiles, mientras que exigir especificaciones precisas como "mapea la exfiltración de código fuente con el inciso tercero del Art. 2 de la Ley 21.459" generó contenido preciso y listo para ser integrado en la interfaz de React.
        </p>
        <div className="mt-4 p-4 bg-yellow-900/40 border border-yellow-600/50 rounded text-sm text-yellow-200">
          <p className="font-semibold mb-2">📋 Lección clave:</p>
          <p>El éxito en la utilización de IA generativa radica en la capacidad de formular preguntas específicas, fundamentadas en conocimiento previo del dominio, permitiendo al modelo generar respuestas de calidad académica y técnica.</p>
        </div>
      </div>
    </div>
  )
}
