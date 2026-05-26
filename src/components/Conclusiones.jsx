import { CheckCircle } from 'lucide-react'

export default function Conclusiones() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <CheckCircle className="text-purple-400" size={32} />
        <h1 className="text-3xl font-bold text-white">Conclusiones y Recomendaciones de Seguridad</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-slate-300 mb-8 leading-relaxed text-lg italic border-l-4 border-purple-400 pl-4">
        El ciberataque a Riot Games en 2023 demuestra que, sin importar el tamaño de la empresa o su presupuesto en ciberseguridad, el eslabón más débil siempre será el factor humano.
      </p>

      {/* Sección 1: Conclusiones Clave */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-300 mb-6">Conclusiones Clave del Análisis</h2>

        {/* Conclusión 1 */}
        <div className="bg-purple-900/30 rounded-lg p-5 mb-4 border-l-4 border-purple-400">
          <h3 className="text-lg font-bold text-purple-300 mb-3">1. El factor humano sigue siendo el eslabón más débil</h3>
          <p className="text-slate-300 leading-relaxed">
            A pesar de contar con inversiones millonarias en infraestructura tecnológica y barreras perimetrales, el ataque no se logró vulnerando un firewall, sino a través de ingeniería social dirigida a los empleados. Esto demuestra que la ciberseguridad no es solo un problema de software, sino de capacitación continua. La Ley 21.459 en Chile refuerza esto al penalizar la obtención ilícita de credenciales, dejando claro que el engaño es una táctica delictiva principal.
          </p>
        </div>

        {/* Conclusión 2 */}
        <div className="bg-purple-900/30 rounded-lg p-5 mb-4 border-l-4 border-purple-400">
          <h3 className="text-lg font-bold text-purple-300 mb-3">2. El alto valor de la Propiedad Intelectual en el entorno digital</h3>
          <p className="text-slate-300 leading-relaxed">
            Tradicionalmente, los ciberataques más temidos eran aquellos que robaban datos bancarios o información personal de los usuarios. Este caso demuestra que la exfiltración de propiedad intelectual (como el código fuente de un sistema antitrampas) puede ser igual o más devastadora para el modelo de negocio de una empresa tecnológica, obligando a los marcos normativos a endurecer las penas por espionaje industrial y robo de secretos comerciales (como la DTSA estadounidense).
          </p>
        </div>

        {/* Conclusión 3 */}
        <div className="bg-purple-900/30 rounded-lg p-5 border-l-4 border-purple-400">
          <h3 className="text-lg font-bold text-purple-300 mb-3">3. La importancia de no ceder ante la ciberextorsión</h3>
          <p className="text-slate-300 leading-relaxed">
            La decisión de Riot Games de no pagar el rescate de 10 millones de dólares sienta un precedente vital y ético en la industria. Ceder ante el chantaje no garantiza la recuperación ni la privacidad de los datos, y solo fomenta la proliferación del cibercrimen. El reporte transparente del incidente a las autoridades y a la comunidad de jugadores permitió a la empresa mantener su reputación y enfocar sus recursos legales y técnicos en auditar su red y prevenir futuros ataques, en total alineación con los principios de responsabilidad proactiva.
          </p>
        </div>
      </div>

      {/* Sección 2: Reflexión del Análisis */}
      <div className="bg-indigo-900/30 border-l-4 border-indigo-400 p-6 mb-8 rounded-r">
        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Reflexión Final del Análisis</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          Desde una perspectiva legal e informática, este caso es fascinante porque no se trató de un robo de datos de tarjetas de crédito o de contraseñas de usuarios, sino del robo de <strong>propiedad intelectual crítica</strong>.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Para los títulos competitivos tipo <em>shooter</em> táctico, donde la integridad de cada partida es fundamental, la filtración del código fuente de una plataforma antitrampas (como "Packman" o "Vanguard") representa un riesgo catastrófico. Si los creadores de <em>cheats</em> tienen acceso al código de los desarrolladores, pueden diseñar vulnerabilidades indetectables que arruinan la experiencia de la comunidad y, por ende, el modelo de negocio de la compañía.
        </p>
      </div>

      {/* Sección 3: Recomendaciones de Seguridad */}
      <div>
        <h2 className="text-2xl font-bold text-blue-300 mb-6">Recomendaciones de Seguridad</h2>
        <p className="text-slate-300 mb-6 leading-relaxed">
          Para evitar que un incidente de ingeniería social como este vuelva a ocurrir, o para mitigar su impacto legal bajo normativas como la Ley 19.628 y la Ley 21.459, se recomiendan las siguientes medidas:
        </p>

        <div className="space-y-4">
          {/* Recomendación 1 */}
          <div className="bg-blue-900/30 border-l-4 border-blue-400 p-5 rounded-r">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-300 mb-2">Arquitectura Zero Trust (Cero Confianza)</h3>
                <p className="text-slate-300 leading-relaxed">
                  Ningún usuario, ni siquiera los desarrolladores internos, debe tener acceso implícito a toda la red. Cada solicitud de acceso al repositorio del código fuente debe ser verificada continuamente. Esto elimina la posibilidad de que una sola credencial comprometida abra acceso a todos los sistemas críticos.
                </p>
              </div>
            </div>
          </div>

          {/* Recomendación 2 */}
          <div className="bg-blue-900/30 border-l-4 border-blue-400 p-5 rounded-r">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-300 mb-2">Autenticación Multifactor Basada en Hardware (MFA)</h3>
                <p className="text-slate-300 leading-relaxed">
                  Los ataques basados en SMS o correos engañosos (<em>Phishing</em>) logran evadir el MFA tradicional. Se debe implementar autenticación basada en hardware (como llaves FIDO2/YubiKey) que son inmunes a la ingeniería social remota. Estas llaves no pueden ser comprometidas por correos o mensajes de texto.
                </p>
              </div>
            </div>
          </div>

          {/* Recomendación 3 */}
          <div className="bg-blue-900/30 border-l-4 border-blue-400 p-5 rounded-r">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-300 mb-2">Segmentación Estricta de Entornos</h3>
                <p className="text-slate-300 leading-relaxed">
                  El entorno de desarrollo (donde está el código fuente) debe estar aislado de la red corporativa general. Un empleado que revisa correos no debería estar en la misma subred que el servidor donde se compila el sistema antitrampas. Esto limita el movimiento lateral de los atacantes.
                </p>
              </div>
            </div>
          </div>

          {/* Recomendación 4 */}
          <div className="bg-blue-900/30 border-l-4 border-blue-400 p-5 rounded-r">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-blue-300 mb-2">Capacitación Continua del Equipo Humano</h3>
                <p className="text-slate-300 leading-relaxed">
                  El equipo humano debe estar entrenado para reconocer tácticas de extorsión y <em>spear-phishing</em>, con simulaciones periódicas que mantengan la alerta alta. La inversión en formación es comparable a la inversión en firewalls y es igual de importante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
