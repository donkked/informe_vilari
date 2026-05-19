import { AlertTriangle } from 'lucide-react'

export default function Delitos() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="text-red-400" size={32} />
        <h1 className="text-3xl font-bold text-white">Tipificación de Delitos Informáticos (Ley 21.459)</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-slate-300 mb-8 leading-relaxed">
        Para este análisis, se aplica de forma hipotética la jurisdicción chilena al caso del hackeo a Riot Games (2023), utilizando la Ley N° 21.459 que establece normas sobre delitos informáticos. A continuación, se mapean las acciones específicas de los atacantes con la tipificación legal correspondiente.
      </p>

      {/* Acción 1 */}
      <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 mb-6 hover:bg-slate-700/50 transition-all">
        <div className="mb-4">
          <p className="text-white mb-2">
            <span className="font-bold">Acción:</span> Obtención y uso de credenciales de empleados
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Descripción del hecho:</span> Los atacantes utilizaron técnicas de ingeniería social (ataques dirigidos vía SMS o correo) para engañar a los empleados de Riot Games y obtener sus nombres de usuario y contraseñas.
          </p>
        </div>
        <div className="border-t border-slate-600/50 pt-4">
          <p className="text-white mb-2">
            <span className="font-bold">Delito Tipificado:</span> <span className="text-orange-600 font-semibold">Abuso de los dispositivos (Artículo 8)</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación legal:</span> El Artículo 8 de la Ley 21.459 sanciona a quien 'obtenga, proporcione, ofrezca, distribuya o facilite de cualquier modo' contraseñas, códigos de acceso o datos informáticos similares con la intención de que sean utilizados para cometer alguno de los delitos de esta ley.
          </p>
        </div>
      </div>

      {/* Acción 2 */}
      <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 mb-6 hover:bg-slate-700/50 transition-all">
        <div className="mb-4">
          <p className="text-white mb-2">
            <span className="font-bold">Acción:</span> Intrusión en los servidores de desarrollo
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Descripción del hecho:</span> Utilizando las credenciales comprometidas, los cibercriminales penetraron el perímetro de seguridad de Riot Games y navegaron por su red de desarrollo interna de manera no autorizada.
          </p>
        </div>
        <div className="border-t border-slate-600/50 pt-4">
          <p className="text-white mb-2">
            <span className="font-bold">Delito Tipificado:</span> <span className="text-orange-600 font-semibold">Acceso ilícito (Artículo 2)</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación legal:</span> El Artículo 2 castiga al que 'sin autorización o excediendo la que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático'. Los atacantes claramente superaron las barreras al usar credenciales que no les pertenecían legítimamente.
          </p>
        </div>
      </div>

      {/* Acción 3 */}
      <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 mb-6 hover:bg-slate-700/50 transition-all">
        <div className="mb-4">
          <p className="text-white mb-2">
            <span className="font-bold">Acción:</span> Exfiltración del código fuente (LoL, TFT y Packman)
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Descripción del hecho:</span> Una vez dentro del sistema, los atacantes localizaron, copiaron y extrajeron fuera de la red de Riot Games el código fuente de los videojuegos y de la plataforma antitrampas.
          </p>
        </div>
        <div className="border-t border-slate-600/50 pt-4">
          <p className="text-white mb-2">
            <span className="font-bold">Delito Tipificado:</span> <span className="text-orange-600 font-semibold">Acceso ilícito con agravante de apoderamiento de información (Artículo 2, inciso tercero)</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación legal:</span> En la legislación chilena, el mero 'robo' de datos digitales se castiga a través de la figura del acceso ilícito agravado. El Artículo 2 indica que la pena se agrava si el acceso se realiza 'con el ánimo de apoderarse, usar o conocer la información contenida en el sistema informático'.
          </p>
        </div>
      </div>

      {/* Acción 4 */}
      <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all">
        <div className="mb-4">
          <p className="text-white mb-2">
            <span className="font-bold">Acción:</span> Exigencia de un rescate millonario (Ciberextorsión)
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Descripción del hecho:</span> Los atacantes enviaron un correo electrónico exigiendo a la empresa el pago de 10 millones de dólares, amenazando con hacer público el código fuente si no se cumplía su demanda.
          </p>
        </div>
        <div className="border-t border-slate-600/50 pt-4">
          <p className="text-white mb-2">
            <span className="font-bold">Delito Tipificado:</span> <span className="text-orange-600 font-semibold">Extorsión (Artículo 268 sexies del Código Penal)</span>
          </p>
          <p className="text-slate-400 leading-relaxed">
            <span className="font-semibold">Justificación legal:</span> Aunque la Ley 21.459 es la principal norma de delitos informáticos, la extorsión como tal se tipifica a través del Código Penal chileno. Las modificaciones recientes al sistema penal permiten que la ciberextorsión se persiga castigando el constreñimiento ilegítimo que busca un provecho económico.
          </p>
        </div>
      </div>
    </div>
  )
}
