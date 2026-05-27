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
            <span className="font-semibold">Justificación:</span> Principal ley federal estadounidense de ciberseguridad que sanciona el acceso no autorizado a sistemas de computadoras. En el caso Riot Games, se aplicaría directamente por la <span className="italic text-slate-200">"intrusión mediante ingeniería social"</span> mediante la cual los atacantes vulneraron credenciales de empleados y penetraron en los sistemas de desarrollo privados. Esta modalidad de ataque (compromiso de identidades legítimas para infiltración) tipifica específicamente la violación de 18 U.S.C. § 1030(a)(2) y (a)(4), constituyendo fraude electrónico e intentona de obtención de información confidencial.
          </p>
        </div>

        {/* Ley 2 */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-5 hover:bg-slate-700/50 transition-all">
          <h3 className="text-lg font-semibold text-blue-300 mb-2">
            Defend Trade Secrets Act (DTSA) de 2016
          </h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación:</span> Ley federal que protege secretos comerciales contra robo, espionaje y divulgación no autorizada. La exfiltración de códigos fuente (League of Legends, TFT, Packman) constituye robo de propiedad intelectual crítica. La demanda de <span className="italic text-slate-200">"rescate de 10 millones de dólares"</span> agrava la infracción, configurando extorsión económica sobre activos protegibles. El daño es cuantificable: exposición de herramientas antitrampas destruye ventaja competitiva, genera multiplicación de cheats, afecta ingresos de esports y confianza de jugadores. DTSA permite acciones civiles por daño injustificado y lucro cesante.
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
            <span className="font-semibold">Justificación:</span> Ley chilena que implementa Convenio de Budapest. Bajo escenario hipotético de jurisdicción chilena, sería herramienta legal principal. Aplica directamente: (1) Art. 2 tipifica acceso no autorizado a sistemas internos; (2) Art. 8 sanciona abuso de dispositivos/software; (3) Art. 268 sexies penaliza extorsión digital. El robo del <span className="italic text-slate-200">"código fuente de Packman"</span> (plataforma antitrampas) configura sustracción de información confidencial y saber-hacer empresarial. La demanda de rescate agrega elemento de chantaje. Esta ley permite persecución penal de persona natural (criminales) y acción reparatoria de Riot Games.
          </p>
        </div>

        {/* Ley 4 */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-5 hover:bg-slate-700/50 transition-all">
          <h3 className="text-lg font-semibold text-red-300 mb-2">
            Ley N° 19.628 sobre Protección de la Vida Privada
          </h3>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación:</span> Ley chilena que regula recopilación, almacenamiento y tratamiento de datos personales. Es subsidiaria pero relevante: aunque Riot comunicó ausencia de robo de datos de jugadores, el ciberataque generó obligaciones procedimentales inmediatas (Art. 11 bis: responsables de bases de datos deben implementar medidas de seguridad física y técnica). La breaa activa responsabilidad de Riot por: (1) investigación forense exhaustiva de alcance; (2) notificación a autoridades (SBIF si datos financieros); (3) documentación de medidas correctivas. Incumplimiento genera multas y daño moral accionable.
          </p>
        </div>
      </div>
    </div>
  )
}