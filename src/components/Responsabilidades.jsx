import { Users } from 'lucide-react'

export default function Responsabilidades() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Users className="text-emerald-400" size={32} />
        <h1 className="text-3xl font-bold text-white">Responsabilidades Legales de los Actores</h1>
      </div>

      {/* Párrafo Introductorio */}
      <p className="text-slate-300 mb-8 leading-relaxed">
        En el marco del ciberataque sufrido por Riot Games en enero de 2023, se identifican dos actores principales con roles diametralmente opuestos. A continuación, se analiza la responsabilidad penal, civil y administrativa de cada uno, aplicando los preceptos de la legislación chilena como marco de referencia hipotético.
      </p>

      {/* Bloque 1: Los Cibercriminales */}
      <div className="mb-8">
        <div className="bg-red-600/40 text-white p-3 rounded-t-md">
          <h2 className="text-2xl font-bold">Los Cibercriminales (Atacantes)</h2>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 p-5 rounded-b-md mb-6">
          <p className="text-slate-300 mb-5 leading-relaxed">
            Estos sujetos, aún no identificados públicamente, son los autores materiales del ciberataque, la exfiltración de datos y el intento de extorsión.
          </p>

          {/* Responsabilidad Penal */}
          <div className="mb-5">
            <p className="text-slate-300 mb-2">
              <span className="font-bold">Responsabilidad Penal:</span> Es directa y principal. Como autores de la vulneración tecnológica, enfrentan penas de presidio por el delito de Acceso Ilícito agravado (Artículo 2 de la Ley N° 21.459). Adicionalmente, al haber exigido un rescate de 10 millones de dólares, enfrentan cargos por el delito de Extorsión cibernética, regulado y sancionado por el Artículo 268 sexies del Código Penal chileno.
            </p>
          </div>

          {/* Responsabilidad Civil */}
          <div className="mb-5">
            <p className="text-slate-300 mb-2">
              <span className="font-bold">Responsabilidad Civil:</span> Tienen responsabilidad civil extracontractual. Conforme al Artículo 2314 del Código Civil chileno ("El que ha cometido un delito o cuasidelito que ha inferido daño a otro, es obligado a la indemnización"), los atacantes están obligados a reparar el daño económico causado a Riot Games, incluyendo el costo de la respuesta a incidentes, la auditoría del código y el lucro cesante por la paralización de las actualizaciones.
            </p>
          </div>

          {/* Responsabilidad Administrativa */}
          <div>
            <p className="text-slate-300">
              <span className="font-bold">Responsabilidad Administrativa:</span> No aplica en este contexto. Las sanciones administrativas recaen sobre entidades reguladas (empresas o instituciones) y no sobre criminales comunes operando en la clandestinidad.
            </p>
          </div>
        </div>
      </div>

      {/* Bloque 2: Riot Games */}
      <div className="mb-8">
        <div className="bg-emerald-600/40 text-white p-3 rounded-t-md">
          <h2 className="text-2xl font-bold">Riot Games (La Empresa)</h2>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 p-5 rounded-b-md mb-6">
          <p className="text-slate-300 mb-5 leading-relaxed">
            Riot Games figura como la víctima principal del ataque. Sin embargo, en el ámbito de la ciberseguridad, las empresas víctimas también tienen deberes legales ineludibles respecto a la custodia de la infraestructura y los datos que manejan.
          </p>

          {/* Responsabilidad Administrativa */}
          <div className="mb-5">
            <p className="text-slate-300 mb-2">
              <span className="font-bold">Responsabilidad Administrativa:</span> Es el ámbito de mayor riesgo legal para la empresa. Bajo la Ley N° 19.628 sobre Protección de la Vida Privada (y sus contrapartes internacionales como el GDPR europeo), Riot Games tiene el deber estricto de resguardar la seguridad de la red. Si una investigación determina que el ataque por ingeniería social tuvo éxito debido a una negligencia grave en sus protocolos de ciberseguridad corporativa (por ejemplo, falta de autenticación multifactor, falta de segmentación de redes o capacitación insuficiente en seguridad), la empresa se expone a severas multas por parte de las agencias reguladoras de protección de datos.
            </p>
          </div>

          {/* Responsabilidad Civil */}
          <div className="mb-5">
            <p className="text-slate-300 mb-2">
              <span className="font-bold">Responsabilidad Civil:</span> Responsabilidad frente a terceros. Si bien Riot Games indicó que no hubo filtración de datos de jugadores, si el robo del código fuente de "Packman" (el sistema antitrampas) derivara posteriormente en un daño verificable para los usuarios (por ejemplo, malware inyectado en sus computadoras personales), la empresa podría enfrentar demandas colectivas de indemnización de perjuicios bajo la Ley N° 19.496 sobre Protección de los Derechos de los Consumidores.
            </p>
          </div>

          {/* Responsabilidad Penal */}
          <div>
            <p className="text-slate-300">
              <span className="font-bold">Responsabilidad Penal:</span> Como entidad corporativa, Riot Games es víctima y no tiene responsabilidad penal directa por el ataque. No obstante, conforme a la Ley N° 20.393 (Responsabilidad Penal de las Personas Jurídicas), la empresa tiene la obligación de contar con modelos de prevención. Su deber primordial ante un incidente de esta naturaleza es no encubrir el ataque y colaborar activamente con la justicia entregando los antecedentes y registros (logs) de la intrusión.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
