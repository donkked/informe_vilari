import { GitCompare } from 'lucide-react'

export default function Comparacion() {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-8 mb-12">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <GitCompare className="text-indigo-600" size={32} />
        <h1 className="text-3xl font-bold text-gray-800">Comparación de Marcos Regulatorios por Industria</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        El caso de Riot Games (2023) expone las vulnerabilidades en la industria del entretenimiento digital y el desarrollo de software. Para dimensionar el alcance de las normativas de ciberseguridad, a continuación se presenta una tabla comparativa que contrasta el marco regulatorio aplicable a los videojuegos con los estándares de industrias críticas como la financiera y la de salud.
      </p>

      {/* Tabla Comparativa */}
      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-4 border-b border-slate-200 text-left font-bold text-gray-800">Eje de Comparación</th>
              <th className="p-4 border-b border-slate-200 text-left font-bold text-gray-800">Videojuegos y Tecnología</th>
              <th className="p-4 border-b border-slate-200 text-left font-bold text-gray-800">Industria Financiera</th>
              <th className="p-4 border-b border-slate-200 text-left font-bold text-gray-800">Industria Salud</th>
            </tr>
          </thead>
          <tbody>
            {/* Fila 1 */}
            <tr>
              <td className="p-4 border-b border-slate-200 font-semibold text-gray-800">1. Foco Principal de Protección</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Propiedad Intelectual (Código fuente, sistemas antitrampas) y Datos Personales básicos.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Activos financieros, transacciones, datos de tarjetas (PAN) y prevención de fraudes.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Datos médicos sensibles (fichas clínicas, diagnósticos) e infraestructura vital.</td>
            </tr>

            {/* Fila 2 */}
            <tr>
              <td className="p-4 border-b border-slate-200 font-semibold text-gray-800">2. Normativas y Estándares de Referencia</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">GDPR (Europa), CCPA (EE. UU.), Ley 19.628 (Chile), Defend Trade Secrets Act.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">PCI-DSS (Global), SOX, RAN 20-10 de la CMF (Chile), Ley General de Bancos.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">HIPAA (EE. UU.), Ley 20.584 de Derechos y Deberes del Paciente (Chile).</td>
            </tr>

            {/* Fila 3 */}
            <tr>
              <td className="p-4 border-b border-slate-200 font-semibold text-gray-800">3. Obligación de Reporte de Brechas (Tiempos)</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Generalmente regulado por leyes de datos personales (Ej. 72 horas bajo GDPR si afecta a usuarios).</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Altamente estricto e inmediato. En Chile, la CMF exige a los bancos reportar incidentes críticos en un máximo de 30 minutos.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Estricto. Notificación obligatoria a los pacientes y a los reguladores de salud ante pérdida de confidencialidad.</td>
            </tr>

            {/* Fila 4 */}
            <tr>
              <td className="p-4 border-b border-slate-200 font-semibold text-gray-800">4. Criticidad del Impacto ante un Ataque</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Impacto económico y reputacional para la empresa. Afectación a la integridad del servicio y la experiencia de los usuarios finales.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Impacto económico sistémico, multas millonarias, riesgo de pánico financiero y pérdida patrimonial directa de clientes.</td>
              <td className="p-4 border-b border-slate-200 text-gray-700">Riesgo de muerte o daño físico a pacientes si los sistemas críticos o historiales médicos son bloqueados (ej. por Ransomware).</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Análisis Comparativo */}
      <div className="bg-slate-50 border-l-4 border-indigo-500 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Análisis Comparativo</h2>
        <p className="text-gray-700 leading-relaxed">
          A partir de la tabla, se observa que la industria de los videojuegos, si bien maneja un volumen masivo de datos de usuarios, tiene su principal debilidad en la protección de la propiedad intelectual. El robo del código fuente de 'Packman' (el sistema antitrampas de Riot Games) afectó directamente su modelo de negocio. Sin embargo, a diferencia del sector financiero (donde la CMF en Chile obliga a reportar en menos de 30 minutos) o el sector salud (donde un ciberataque puede costar vidas humanas), los marcos regulatorios para las empresas de videojuegos son más flexibles en cuanto a tiempos de respuesta técnicos, centrándose más en la protección de los datos de privacidad (GDPR / Ley 19.628) que en la resiliencia de la infraestructura crítica.
        </p>
      </div>
    </div>
  )
}
