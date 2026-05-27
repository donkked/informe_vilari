import { Terminal } from 'lucide-react'

export default function Prompts() {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto p-8 mb-12 shadow-2xl">
      {/* Título Principal */}
      <div className="flex items-center gap-3 mb-6">
        <Terminal className="text-slate-300" size={32} />
        <h1 className="text-3xl font-bold text-white">Documentación de Interacciones con IA</h1>
      </div>

      {/* Introducción */}
      <p className="text-slate-300 mb-8 leading-relaxed">
        Este documento registra todas las interacciones con herramientas de IA generativa utilizadas para estructurar, desarrollar y estilizar los 8 componentes principales de esta aplicación React. La metodología se basó en un enfoque iterativo donde se optimizaba progresivamente la especificidad de los prompts para obtener resultados de calidad académica y técnica listos para integración directa en la interfaz de usuario.
      </p>

      {/* Interacción 1: Resumen y Marco */}
      <div className="bg-blue-900/30 border-l-4 border-blue-400 p-5 mb-6 rounded-r">
        <h2 className="text-xl font-bold text-blue-300 mb-3">Interacción 1: Resumen Ejecutivo y Marco Normativo</h2>
        <div className="text-slate-300 space-y-3">
          <p><span className="font-semibold">Componentes:</span> Resumen.jsx y Marco.jsx</p>
          <p><span className="font-semibold">Prompt:</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-blue-400 text-sm">
            "Eres experto legal en ciberseguridad. Para el hackeo a Riot Games (2023): 1) Redacta resumen ejecutivo con ¿Qué pasó?, ¿Cuándo?, ¿Quiénes?, Impacto. 2) Analiza marco normativo combinando CFAA/DTSA (EE.UU.) con Ley 21.459/19.628 (Chile hipotético)."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Estructura narrativa y referencias legales precisas. ✏️ Se ampliaron secciones y se enumeraron artículos relevantes (Art. 2, Art. 8).</p>
        </div>
      </div>

      {/* Interacción 2: Delitos y Comparación */}
      <div className="bg-green-900/30 border-l-4 border-green-400 p-5 mb-6 rounded-r">
        <h2 className="text-xl font-bold text-green-300 mb-3">Interacción 2: Tipificación de Delitos e Industrias Comparadas</h2>
        <div className="text-slate-300 space-y-3">
          <p><span className="font-semibold">Componentes:</span> Delitos.jsx y Comparacion.jsx</p>
          <p><span className="font-semibold">Prompt 1 - Mapeo de Delitos:</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-green-400 text-sm">
            "Mapea cada acción del ataque (credenciales, intrusión, exfiltración, rescate) con artículos Ley 21.459. Proporciona: nombre delito, artículo, justificación legal (3 líneas), contexto de severidad."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Mapeo preciso (Art. 2 Acceso Ilícito, Art. 8 Abuso dispositivos, Art. 268 sexies Extorsión). ✏️ Reorganización cronológica y causal.</p>
          
          <p className="mt-3"><span className="font-semibold">Prompt 2 - Tabla Comparativa:</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-green-400 text-sm">
            "Tabla comparativa: Videojuegos vs Finanzas vs Salud. Ejes: Foco protección, Normativas (GDPR/CMF/HIPAA), Obligación reporte (tiempos específicos), Criticidad impacto. Datos específicos para Chile."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Diferencias magistrales capturadas (IP vs transacciones vs vidas). Tiempos precisos (72h GDPR, 30min CMF). ✏️ Énfasis en menor regulación videojuegos.</p>
        </div>
      </div>

      {/* Interacción 3: Responsabilidades y Datos */}
      <div className="bg-purple-900/30 border-l-4 border-purple-400 p-5 mb-6 rounded-r">
        <h2 className="text-xl font-bold text-purple-300 mb-3">Interacción 3: Responsabilidades de Actores y Datos Personales</h2>
        <div className="text-slate-300 space-y-3">
          <p><span className="font-semibold">Componentes:</span> Responsabilidades.jsx y Datos.jsx</p>
          <p><span className="font-semibold">Prompt 1 - Responsabilidades Legales:</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-purple-400 text-sm">
            "Análisis bifurcado: Cibercriminales (Penal/Civil/Administrativa) y Riot Games (Administrativa/Civil/Penal). Cada tipo: implicancia legal (4 oraciones máx) + citas artículos específicos."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Análisis dual bien estructurado, conexión Art. 2314 precisa, Ley 20.393 aplicada correctamente. ✏️ Expansión sobre negligencia administrativa (falta MFA, segmentación, capacitación).</p>
          
          <p className="mt-3"><span className="font-semibold">Prompt 2 - Protección de Datos (Ley 19.628):</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-purple-400 text-sm">
            "Analiza Ley 19.628 aplicada a Riot: 1) Obligaciones técnicas (Art. 11, Accountability, Transparencia). 2) Clasificación datos (Personales vs Sensibles). 3) Derechos ARCO (tabla). 4) Reflexión responsabilidad objetiva."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Tabla ARCO clara y didáctica, diferencia datos bien explicada, reflexión perspicaz. ✏️ Agregada subsección sobre presunción negligencia y demandas daño moral.</p>
        </div>
      </div>

      {/* Interacción 4: Conclusiones y Estilos */}
      <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-5 mb-6 rounded-r">
        <h2 className="text-xl font-bold text-yellow-300 mb-3">Interacción 4: Conclusiones y Estilos React</h2>
        <div className="text-slate-300 space-y-3">
          <p><span className="font-semibold">Componentes:</span> Conclusiones.jsx y Prompts.jsx</p>
          <p><span className="font-semibold">Prompt 1 - Conclusiones Integradas:</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-yellow-400 text-sm">
            "Conclusiones: A) 3 conclusiones numericadas (factor humano, valor IP, no ceder extorsión) con título + párrafo + referencia legal. B) Reflexión Packman y riesgos cheats. C) 4 recomendaciones técnicas (Zero Trust, MFA Hardware, Segmentación, Capacitación)."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Conclusiones penetrantes, reflexión técnicamente sólida, recomendaciones ejecutables. ✏️ Ampliación con ejemplos concretos (YubiKey, subnetting, simulaciones spear-phishing).</p>
          
          <p className="mt-3"><span className="font-semibold">Prompt 2 - Documentación Final:</span></p>
          <p className="italic bg-slate-700/40 p-3 rounded border-l-2 border-yellow-400 text-sm">
            "Reflexión Final: Diferencia IA como Chatbot (reactiva, lineal, requiere instrucciones explícitas, sin autonomía) vs Agente (autónoma, segundo plano, acceso diretos archivos, decisiones independientes). Cuál fue usado aquí y por qué."
          </p>
          <p><span className="font-semibold">Resultado:</span> ✅ Diferenciación clara y educativa, ejemplos ilustrativos. ✏️ Ampliadas implicaciones: chatbot requiere supervisión; agente introduce riesgos autonomía.</p>
        </div>
      </div>

      {/* Reflexión Final: Chatbot vs Agente */}
      <div className="bg-indigo-900/30 border-l-4 border-indigo-400 p-6 rounded-r">
        <h2 className="text-xl font-bold text-indigo-300 mb-4">Reflexión Final: Inteligencia Artificial como Chatbot vs Agente</h2>
        
        <div className="space-y-4">
          <div className="bg-slate-700/20 p-4 rounded border-l-2 border-blue-400">
            <h3 className="font-bold text-blue-300 mb-2">🤖 Chatbot (Herramienta Reactiva)</h3>
            <ul className="text-slate-300 text-sm space-y-1 ml-4">
              <li>• Procesa texto de forma <strong>lineal y secuencial</strong> según instrucciones directas explícitas</li>
              <li>• No tiene <strong>autonomía</strong>: cada respuesta depende de un prompt específico</li>
              <li>• Requiere <strong>supervisión y validación humana continua</strong> de cada output</li>
              <li>• No puede acceder de forma independiente a archivos, repositorios o bases de datos</li>
              <li>• Es una <strong>herramienta pasiva</strong>: solo responde cuando se le interroga</li>
            </ul>
          </div>

          <div className="bg-slate-700/20 p-4 rounded border-l-2 border-red-400">
            <h3 className="font-bold text-red-300 mb-2">⚡ Agente (Entidad Autónoma)</h3>
            <ul className="text-slate-300 text-sm space-y-1 ml-4">
              <li>• Ejecuta tareas de forma <strong>independiente y proactiva</strong> en segundo plano</li>
              <li>• Tiene <strong>acceso directo</strong> al sistema de archivos, repositorios, puede leer/escribir código</li>
              <li>• Toma <strong>decisiones autónomas</strong> sobre qué acciones ejecutar basándose en objetivos</li>
              <li>• Puede <strong>iterar y mejorar</strong> sus propias soluciones sin intervención humana</li>
              <li>• Introduce riesgos: cambios no deseados, modificaciones sin validación, autonomía descontrolada</li>
            </ul>
          </div>

          <div className="bg-slate-700/20 p-4 rounded border-l-2 border-green-400">
            <h3 className="font-bold text-green-300 mb-2">✅ Aplicación en este Proyecto</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Este informe fue desarrollado <strong>exclusivamente usando Chatbot</strong>. Cada sección representa un ciclo humano de: (1) Usuario redacta prompt específico con contexto legal/técnico → (2) IA (Chatbot) genera respuesta → (3) Usuario valida, ajusta, integra en React → (4) Usuario supervisa calidad final. Esta modalidad garantiza <strong>trazabilidad académica y responsabilidad humana</strong> en cada decisión. Aunque menos eficiente que un Agente, preserva la <strong>autonomía intelectual del investigador</strong> y cumple lineamientos éticos académicos.
            </p>
            <p className="text-slate-300 text-sm mt-2 italic">
              Con Chatbot, la respuesta es clara: <strong>la IA fue una herramienta, el estudiante fue el autor</strong>.
            </p>
          </div>
        </div>

        <div className="mt-4 p-4 bg-yellow-900/40 border border-yellow-600/50 rounded">
          <p className="font-semibold text-yellow-200 mb-2">📋 Conclusión Metodológica:</p>
          <p className="text-slate-300 text-sm leading-relaxed">
            El uso estratégico de IA generativa como Chatbot fue invaluable para agilizar investigación legal y estructuración técnica. Su valor máximo se obtiene combinándolo con criterio humano, especificidad en prompts e integración reflexiva. El resultado final es una <strong>síntesis humano-máquina documentada</strong>, donde la IA amplificó capacidades del investigador sin reemplazar su juicio crítico.
          </p>
        </div>
      </div>
    </div>
  )
}
