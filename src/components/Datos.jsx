import { Database } from 'lucide-react'

export default function Datos() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Database className="text-teal-400" size={32} />
        <h1 className="text-3xl font-bold text-white">Tratamiento y Protección de Datos Personales</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-slate-300 mb-8 leading-relaxed">
        Aunque el objetivo principal del hackeo a Riot Games en 2023 fue la sustracción de propiedad intelectual (código fuente y sistemas antitrampas), cualquier intrusión en los servidores de una empresa global activa inmediatamente las alarmas de las normativas de privacidad, como el GDPR en Europa o la Ley N° 19.628 sobre Protección de la Vida Privada en Chile. A continuación, se detalla cómo operan las obligaciones de la empresa frente a los datos de sus usuarios tras la brecha.
      </p>

      {/* Sección 1: Obligaciones Técnicas */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-300 mb-4">Obligaciones Técnicas de Seguridad</h2>
        
        {/* Principio 1: Deber de Seguridad */}
        <div className="border-l-4 border-teal-500 bg-slate-700/30 p-4 mb-4">
          <h3 className="text-lg font-bold text-teal-300 mb-3">Deber de Seguridad (Artículo 11, Ley 19.628)</h3>
          <p className="text-slate-300 leading-relaxed">
            <span className="font-semibold text-slate-100">Implicancia:</span> <span className="text-slate-300">La ley chilena exige que el responsable del registro de datos cuide de ellos con la debida diligencia. Al sufrir la vulneración de sus credenciales de empleado mediante ingeniería social, Riot Games debió someterse a una revisión estricta para determinar si las barreras técnicas implementadas eran suficientes o si hubo negligencia en el resguardo de la red.</span>
          </p>
        </div>

        {/* Principio 2: Responsabilidad Proactiva */}
        <div className="border-l-4 border-teal-500 bg-slate-700/30 p-4 mb-4">
          <h3 className="text-lg font-bold text-teal-300 mb-3">Principio de Responsabilidad Proactiva (Accountability)</h3>
          <p className="text-slate-300 leading-relaxed">
            <span className="font-semibold">Implicancia:</span> Las normativas modernas exigen que la empresa no solo reaccione, sino que demuestre que está investigando el alcance total del ataque. Riot Games tuvo que destinar recursos masivos de forma inmediata para auditar todo el código expuesto y asegurar de manera forense que las bases de datos con información personal, financiera o de comportamiento de sus millones de jugadores no fueron comprometidas.
          </p>
        </div>

        {/* Principio 3: Transparencia y Notificación */}
        <div className="border-l-4 border-teal-500 bg-slate-700/30 p-4">
          <h3 className="text-lg font-bold text-teal-300 mb-3">Obligación de Transparencia y Notificación</h3>
          <p className="text-slate-300 leading-relaxed">
            <span className="font-semibold">Implicancia:</span> Ante una brecha de seguridad, el ocultamiento es un agravante legal. Riot Games actuó conforme a las buenas prácticas al comunicar públicamente el 24 de enero de 2023 que habían sido vulnerados. Afortunadamente, pudieron mitigar el pánico al confirmar en ese mismo comunicado que, tras su investigación inicial, no existía evidencia de que se hubieran exfiltrado datos personales de los jugadores, evitando así multas asociadas a la pérdida de confidencialidad.
          </p>
        </div>
      </div>

      {/* Sección 2: Clasificación de Información */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-300 mb-4">Clasificación de la Información en Riot Games</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          Para efectos legales, la información recolectada por la plataforma se clasifica de la siguiente manera:
        </p>

        <div className="space-y-4">
          {/* Datos Personales */}
          <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 rounded">
            <h3 className="font-bold text-blue-300 mb-2">Datos Personales (Art. 2 letra f)</h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                <span className="font-semibold">Identificadores:</span> Riot ID, correo electrónico, dirección IP de conexión.
              </li>
              <li>
                <span className="font-semibold">Uso legal:</span> Estos datos permiten la ejecución del servicio de juego y la comunicación con el usuario. Su filtración representaría una vulneración a la privacidad básica.
              </li>
            </ul>
          </div>

          {/* Datos Sensibles */}
          <div className="bg-red-900/30 border-l-4 border-red-400 p-4 rounded">
            <h3 className="font-bold text-red-300 mb-2">Datos Sensibles (Art. 2 letra g)</h3>
            <ul className="text-slate-300 space-y-2">
              <li>
                <span className="font-semibold">Contenidos:</span> Información extraída de registros de chat que revelen opiniones políticas, creencias religiosas o hábitos de vida.
              </li>
              <li>
                <span className="font-semibold">Protección reforzada:</span> La ley prohíbe el tratamiento de estos datos a menos que exista una autorización legal o el consentimiento expreso del titular.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sección 3: Derechos ARCO */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-teal-300 mb-4">Aplicación de Derechos ARCO (Ley 19.628)</h2>
        <p className="text-slate-300 mb-4 leading-relaxed">
          En caso de que un jugador chileno sospeche que su información fue comprometida en el hackeo de 2023, puede ejercer los siguientes derechos ante la empresa:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-900/40">
                <th className="p-3 border border-teal-600/50 text-left font-bold text-teal-300">Derecho</th>
                <th className="p-3 border border-teal-600/50 text-left font-bold text-teal-300">Acción del Usuario</th>
                <th className="p-3 border border-teal-600/50 text-left font-bold text-teal-300">Aplicación en Riot Games</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-700/20">
                <td className="p-3 border border-slate-600/30 font-semibold text-slate-300">Acceso</td>
                <td className="p-3 border border-slate-600/30 text-slate-300 italic">"Derecho a exigir información sobre los datos" (Art. 12, Ley 19.628)</td>
                <td className="p-3 border border-slate-600/30 text-slate-300">Verificar si los atacantes tuvieron acceso a su historial de compras o correos.</td>
              </tr>
              <tr className="hover:bg-slate-700/20">
                <td className="p-3 border border-slate-600/30 font-semibold text-slate-300">Rectificación</td>
                <td className="p-3 border border-slate-600/30 text-slate-300 italic">"Modificar datos erróneos, inexactos, equívocos o incompletos" (Art. 12, Ley 19.628)</td>
                <td className="p-3 border border-slate-600/30 text-slate-300">Actualizar credenciales o correos tras la recuperación de la cuenta.</td>
              </tr>
              <tr className="hover:bg-slate-700/20">
                <td className="p-3 border border-slate-600/30 font-semibold text-slate-300">Cancelación</td>
                <td className="p-3 border border-slate-600/30 text-slate-300 italic">"Eliminar datos caducos o sin fundamento legal" (Art. 12, Ley 19.628)</td>
                <td className="p-3 border border-slate-600/30 text-slate-300">Exigir el borrado definitivo de los datos si el usuario ya no confía en la seguridad de la plataforma.</td>
              </tr>
              <tr className="hover:bg-slate-700/20">
                <td className="p-3 border border-slate-600/30 font-semibold text-slate-300">Oposición</td>
                <td className="p-3 border border-slate-600/30 text-slate-300 italic">"Oponerse a la utilización de datos con fines de publicidad" (Art. 12, Ley 19.628)</td>
                <td className="p-3 border border-slate-600/30 text-slate-300">Solicitar que sus datos de comportamiento no sean usados para telemetría o marketing tras el incidente.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Sección 4: Reflexión Final */}
      <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-6 rounded">
        <h2 className="text-xl font-bold text-yellow-300 mb-4">Reflexión sobre la Responsabilidad del Custodio</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Riot Games, como responsable de la base de datos, tiene el deber de "cuidado y diligencia" conforme al Artículo 11 de la Ley 19.628. La ocurrencia de un hackeo por ingeniería social sugiere que las medidas de seguridad técnicas no fueron suficientes para garantizar la integridad de los datos.
        </p>
        <p className="text-slate-300 leading-relaxed">
          En Chile, esta negligencia en la custodia facultaría a los usuarios a denunciar ante los juzgados civiles correspondientes para exigir el <strong>cese del tratamiento</strong> o <strong>indemnizaciones por daño moral</strong>. La responsabilidad de la empresa como custodio es objetiva, no subjetiva: el solo hecho de que hubo intrusión genera la presunción de falta de medidas suficientes de seguridad.
        </p>
      </div>
    </div>
  )
}
