import { CheckCircle } from 'lucide-react'

export default function Conclusiones() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 mb-12">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-purple-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">Conclusiones del Análisis</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        El hackeo a Riot Games en 2023 deja lecciones fundamentales sobre el panorama actual de la ciberseguridad corporativa y la aplicación de los marcos legales vigentes. A partir del análisis realizado, se extraen las siguientes conclusiones clave:
      </p>

      {/* Conclusión 1 */}
      <div className="bg-purple-50 rounded-lg p-5 mb-4">
        <h2 className="text-lg font-bold text-purple-900 mb-3">El factor humano sigue siendo el eslabón más débil</h2>
        <p className="text-gray-700 leading-relaxed">
          A pesar de contar con inversiones millonarias en infraestructura tecnológica y barreras perimetrales, el ataque no se logró vulnerando un firewall, sino a través de ingeniería social dirigida a los empleados. Esto demuestra que la ciberseguridad no es solo un problema de software, sino de capacitación continua. La Ley 21.459 en Chile refuerza esto al penalizar la obtención ilícita de credenciales, dejando claro que el engaño es una táctica delictiva principal.
        </p>
      </div>

      {/* Conclusión 2 */}
      <div className="bg-purple-50 rounded-lg p-5 mb-4">
        <h2 className="text-lg font-bold text-purple-900 mb-3">El alto valor de la Propiedad Intelectual en el entorno digital</h2>
        <p className="text-gray-700 leading-relaxed">
          Tradicionalmente, los ciberataques más temidos eran aquellos que robaban datos bancarios o información personal de los usuarios. Este caso demuestra que la exfiltración de propiedad intelectual (como el código fuente de un sistema antitrampas) puede ser igual o más devastadora para el modelo de negocio de una empresa tecnológica, obligando a los marcos normativos a endurecer las penas por espionaje industrial y robo de secretos comerciales (como la DTSA estadounidense).
        </p>
      </div>

      {/* Conclusión 3 */}
      <div className="bg-purple-50 rounded-lg p-5">
        <h2 className="text-lg font-bold text-purple-900 mb-3">La importancia de no ceder ante la ciberextorsión</h2>
        <p className="text-gray-700 leading-relaxed">
          La decisión de Riot Games de no pagar el rescate de 10 millones de dólares sienta un precedente vital y ético en la industria. Ceder ante el chantaje no garantiza la recuperación ni la privacidad de los datos, y solo fomenta la proliferación del cibercrimen. El reporte transparente del incidente a las autoridades y a la comunidad de jugadores permitió a la empresa mantener su reputación y enfocar sus recursos legales y técnicos en auditar su red y prevenir futuros ataques, en total alineación con los principios de responsabilidad proactiva.
        </p>
      </div>
    </div>
  )
}
