# Bitácora de Uso de Inteligencia Artificial

[cite_start]De acuerdo con los lineamientos de la evaluación, a continuación se documenta el uso de herramientas de Inteligencia Artificial empleadas como apoyo en la investigación y estructuración de este informe.

* **Herramienta utilizada:** Gemini (Modelo de lenguaje).
* **Modalidad:** Chatbot externo en navegador.

## Interacción 1: Estructuración del Marco Normativo y Delitos
* **Secciones:** Marco Normativo (`02_marco.md`) y Delitos (`03_delitos.md`).
* **Prompt utilizado:** *"Haz el papel de un experto legal en ciberseguridad. Para el caso del hackeo a Riot Games en 2023, redacta el marco normativo combinando leyes de Estados Unidos (donde opera la empresa) con el escenario hipotético de que el ataque hubiera ocurrido en Chile. Luego, mapea las acciones de los atacantes usando los artículos específicos de la Ley N° 21.459 chilena."*
* **Qué se aceptó y qué se corrigió:** Se aceptó la excelente estructuración que la IA hizo para conectar la intrusión con el **Artículo 2 (Acceso Ilícito)** y el **Artículo 8 (Abuso de dispositivos)** de la Ley 21.459 chilena. Se corrigió y ajustó el formato de salida para que se adaptara a la sintaxis Markdown requerida para los componentes de React, eliminando introducciones genéricas del chatbot.

## Interacción 2: Tabla Comparativa por Industria
* **Sección:** Comparación (`04_comparacion.md`).
* **Prompt utilizado:** *"Crea una tabla comparativa en formato Markdown que contraste los marcos regulatorios de ciberseguridad. Compara la industria de los Videojuegos (basado en Riot Games), el sector Bancario y el sector de la Salud. Utiliza 4 ejes: Foco de protección, normas de referencia, obligación de reporte y criticidad del impacto."*
* **Qué se aceptó y qué se corrigió:** Se aceptó completamente el contenido tabular generado, ya que logró abstraer las diferencias entre la laxitud relativa del sector de videojuegos frente a la extrema rigurosidad del sector bancario chileno (CMF) en cuanto a tiempos de reporte.

## Reflexión Final sobre el uso de la IA
El uso de Gemini fue fundamental para agilizar la redacción y estructuración técnica del análisis. Sin embargo, quedó en evidencia que la IA es una herramienta de apoyo y no un reemplazo del criterio técnico. [cite_start]La calidad de la información obtenida dependió completamente de la especificidad del prompt; pedir "hazme un análisis de leyes" entregaba respuestas inútiles, mientras que exigir "mapea la exfiltración de código fuente con el inciso tercero del Art. 2 de la Ley 21.459" generó un contenido preciso y listo para ser integrado en la interfaz de React[cite: 440, 441, 442].