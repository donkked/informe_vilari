import { Scale } from 'lucide-react'

export default function Marco() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Scale className="text-blue-400" size={32} />
        <h1 className="text-3xl font-bold text-white">Marco Normativo Aplicable: Caso Riot Games (2023)</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-slate-300 mb-8 leading-relaxed">
        Dado que Riot Games es una empresa multinacional con sede en Estados Unidos y operaciones globales, el análisis legal requiere un enfoque mixto. Se aplican normativas estadounidenses por la jurisdicción del ataque, junto con la legislación chilena en un ejercicio de aplicación local.
      </p>

      {/* Sección 1: Normativa Internacional */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-300 border-l-4 border-blue-500 pl-4 mb-6">
          Normativa Internacional (Estados Unidos)
        </h2>

        {/* Ley 1 */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-5 mb-4 hover:bg-slate-700/50 transition-all">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">
            Computer Fraud and Abuse Act (CFAA) - 18 U.S.C. § 1030
          </h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación:</span> Es la principal ley federal de ciberseguridad en EE. UU., tipificando como delito el acceso no autorizado a sistemas informáticos. En este caso, los cibercriminales vulneraron esta norma al utilizar ingeniería social para conseguir credenciales de empleados y penetrar en los servidores de desarrollo privados de Riot Games de forma ilícita.
          </p>
        </div>

        {/* Ley 2 */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-5 hover:bg-slate-700/50 transition-all">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">
            Defend Trade Secrets Act (DTSA) de 2016
          </h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación:</span> Esta ley federal estadounidense protege los secretos comerciales frente a su robo y espionaje. La exfiltración del código fuente de League of Legends y de la plataforma antitrampas "Packman" constituye la sustracción de propiedad intelectual crítica. La exposición de este código es gravísima, ya que compromete la integridad de entornos competitivos exigentes, donde mantener el servidor libre de trampas es el núcleo del negocio.
          </p>
        </div>
      </div>

      {/* Sección 2: Normativa Nacional */}
      <div>
        <h2 className="text-2xl font-bold text-red-300 border-l-4 border-red-500 pl-4 mb-6">
          Normativa Nacional (Escenario Hipotético en Chile)
        </h2>

        {/* Ley 3 */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-5 mb-4 hover:bg-slate-700/50 transition-all">
          <h3 className="text-lg font-semibold text-red-300 mb-2">
            Ley N° 21.459 sobre Delitos Informáticos
          </h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación:</span> Esta norma, que adecúa a Chile al Convenio de Budapest, sería la herramienta legal principal si el ataque hubiera ocurrido bajo jurisdicción chilena. Aplicaría directamente para sancionar el acceso ilícito a los sistemas internos de la compañía y penalizaría la extorsión cibernética, dado que los atacantes exigieron un pago de 10 millones de dólares.
          </p>
        </div>

        {/* Ley 4 */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-5 hover:bg-slate-700/50 transition-all">
          <h3 className="text-lg font-semibold text-red-300 mb-2">
            Ley N° 19.628 sobre Protección de la Vida Privada
          </h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación:</span> Regula el tratamiento y resguardo de datos personales. Si bien Riot Games comunicó rápidamente que no había evidencia de robo de datos de los jugadores, la empresa estuvo obligada bajo este tipo de marcos a desplegar una investigación forense exhaustiva para descartar la filtración de información personal o sensible de sus millones de usuarios.
          </p>
        </div>
      </div>
    </div>
  )
}