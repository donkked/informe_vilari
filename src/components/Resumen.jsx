import { FileText } from 'lucide-react';

export function Resumen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Título con icono */}
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">
            Resumen Ejecutivo: Hackeo a Riot Games (2023)
          </h1>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 space-y-8">
          
          {/* ¿Qué pasó? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-purple-700">
              ¿Qué pasó?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              En enero de 2023, Riot Games fue víctima de un ciberataque sofisticado. Los atacantes utilizaron tácticas de ingeniería social (presuntamente mediante SMS o correos dirigidos a empleados) para vulnerar las credenciales de acceso y penetrar en el entorno de desarrollo de la compañía. Una vez dentro de la red, los ciberdelincuentes lograron exfiltrar datos altamente confidenciales: el código fuente del videojuego <em>League of Legends</em>, de <em>Teamfight Tactics</em> (TFT) y, lo más crítico, de una plataforma antitrampas legada conocida como "Packman". Los atacantes posteriormente enviaron un correo electrónico a la directiva de Riot Games exigiendo el pago de un rescate de 10 millones de dólares para no hacer públicos los datos, extorsión a la cual la empresa se negó a ceder.
            </p>
          </section>

          {/* ¿Cuándo ocurrió? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-purple-700">
              ¿Cuándo ocurrió?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              El acceso no autorizado a los sistemas se detectó a mediados de <strong>enero de 2023</strong>. La confirmación pública del robo de código fuente y la recepción de la nota de rescate por parte de Riot Games se comunicó el <strong>24 de enero de 2023</strong>.
            </p>
          </section>

          {/* ¿Quiénes participaron? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-purple-700">
              ¿Quiénes participaron?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Víctima:</strong> Riot Games (empresa desarrolladora de videojuegos y organizadora de torneos de eSports).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Atacantes:</strong> Un grupo de ciberdelincuentes no identificados públicamente de manera oficial, aunque diversos analistas de inteligencia de amenazas rastrearon las negociaciones y subastas del código en foros clandestinos (Dark Web).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Usuarios finales:</strong> Millones de jugadores a nivel global cuyos entornos de juego se vieron potencialmente amenazados por la filtración del código antitrampas.</span>
              </li>
            </ul>
          </section>

          {/* Impacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-purple-700">
              Impacto
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El impacto del incidente fue significativo en múltiples niveles:
            </p>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">1.</span>
                <div>
                  <strong>Operativo:</strong> Obligó a Riot Games a detener temporalmente su ciclo de lanzamiento de parches y actualizaciones para varios de sus juegos mientras aseguraban sus sistemas de desarrollo.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">2.</span>
                <div>
                  <strong>Seguridad Competitiva:</strong> La exposición del código fuente de las herramientas antitrampas elevó drásticamente el riesgo de aparición de nuevos <em>cheats</em> (trampas) indetectables, amenazando la integridad competitiva de sus juegos.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-600 font-bold">3.</span>
                <div>
                  <strong>Económico y Reputacional:</strong> Aunque Riot no pagó el rescate, tuvieron que destinar recursos masivos para investigar la brecha con consultores externos, auditar todo el código expuesto para prever vulnerabilidades y reconstruir su infraestructura de seguridad interna. Afortunadamente, no hubo evidencia de que se expusieran datos personales de los jugadores, lo que mitigó el impacto en términos de privacidad.
                </div>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
