import { Database } from 'lucide-react'

export default function Datos() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 mb-12">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Database className="text-teal-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">Tratamiento y Protección de Datos Personales</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Aunque el objetivo principal del hackeo a Riot Games en 2023 fue la sustracción de propiedad intelectual (código fuente y sistemas antitrampas), cualquier intrusión en los servidores de una empresa global activa inmediatamente las alarmas de las normativas de privacidad, como el GDPR en Europa o la Ley N° 19.628 sobre Protección de la Vida Privada en Chile. A continuación, se detalla cómo operan las obligaciones de la empresa frente a los datos de sus usuarios tras la brecha.
      </p>

      {/* Principio 1: Deber de Seguridad */}
      <div className="border-l-4 border-teal-500 bg-slate-50 p-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Deber de Seguridad (Artículo 11, Ley 19.628)</h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Implicancia:</span> La ley chilena exige que el responsable del registro de datos cuide de ellos con la debida diligencia. Al sufrir la vulneración de sus credenciales de empleado mediante ingeniería social, Riot Games debió someterse a una revisión estricta para determinar si las barreras técnicas implementadas eran suficientes o si hubo negligencia en el resguardo de la red.
        </p>
      </div>

      {/* Principio 2: Responsabilidad Proactiva */}
      <div className="border-l-4 border-teal-500 bg-slate-50 p-4 mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Principio de Responsabilidad Proactiva (Accountability)</h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Implicancia:</span> Las normativas modernas exigen que la empresa no solo reaccione, sino que demuestre que está investigando el alcance total del ataque. Riot Games tuvo que destinar recursos masivos de forma inmediata para auditar todo el código expuesto y asegurar de manera forense que las bases de datos con información personal, financiera o de comportamiento de sus millones de jugadores no fueron comprometidas.
        </p>
      </div>

      {/* Principio 3: Transparencia y Notificación */}
      <div className="border-l-4 border-teal-500 bg-slate-50 p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Obligación de Transparencia y Notificación</h2>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Implicancia:</span> Ante una brecha de seguridad, el ocultamiento es un agravante legal. Riot Games actuó conforme a las buenas prácticas al comunicar públicamente el 24 de enero de 2023 que habían sido vulnerados. Afortunadamente, pudieron mitigar el pánico al confirmar en ese mismo comunicado que, tras su investigación inicial, no existía evidencia de que se hubieran exfiltrado datos personales de los jugadores, evitando así multas asociadas a la pérdida de confidencialidad.
        </p>
      </div>
    </div>
  )
}
