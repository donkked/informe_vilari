# Conclusiones y Recomendaciones de Seguridad

El ciberataque a Riot Games en 2023 demuestra que, sin importar el tamaño de la empresa o su presupuesto en ciberseguridad, el eslabón más débil siempre será el factor humano. 

## Reflexión Final del Análisis
Desde una perspectiva legal e informática, este caso es fascinante porque no se trató de un robo de datos de tarjetas de crédito o de contraseñas de usuarios, sino del robo de **propiedad intelectual crítica**. Para los títulos competitivos tipo *shooter* táctico, donde la integridad de cada partida es fundamental, la filtración del código fuente de una plataforma antitrampas (como "Packman" o "Vanguard") representa un riesgo catastrófico. Si los creadores de *cheats* tienen acceso al código de los desarrolladores, pueden diseñar vulnerabilidades indetectables que arruinan la experiencia de la comunidad y, por ende, el modelo de negocio de la compañía.

## Recomendaciones de Seguridad
Para evitar que un incidente de ingeniería social como este vuelva a ocurrir, o para mitigar su impacto legal bajo normativas como la Ley 19.628 y la Ley 21.459, se recomiendan las siguientes medidas:

1. **Arquitectura Zero Trust (Cero Confianza):** Ningún usuario, ni siquiera los desarrolladores internos, debe tener acceso implícito a toda la red. Cada solicitud de acceso al repositorio del código fuente debe ser verificada continuamente.
2. **Refuerzo de la Autenticación Multifactor (MFA):** Los ataques basados en SMS o correos engañosos (Phishing) logran evadir el MFA tradicional. Se debe implementar autenticación basada en hardware (como llaves FIDO2/YubiKey) que son inmunes a la ingeniería social remota.
3. **Segmentación Estricta de Entornos:** El entorno de desarrollo (donde está el código fuente) debe estar aislado de la red corporativa general. Un empleado que revisa correos no debería estar en la misma subred que el servidor donde se compila el sistema antitrampas.
4. **Capacitación Continua:** El equipo humano debe estar entrenado para reconocer tácticas de extorsión y *spear-phishing*, con simulaciones periódicas que mantengan la alerta alta.