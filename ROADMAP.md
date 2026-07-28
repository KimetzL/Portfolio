# 🗺️ Roadmap de Evolución Profesional — Portfolio Kimetz Loroño

Este documento detalla la hoja de ruta estratégica para transformar tu portfolio personal en una **herramienta de conversión de talento de alto rendimiento**, diseñada específicamente para captar la atención de reclutadores técnicos, Engineering Managers y Data Science Leads.

---

## 🎯 1. Imprescindibles para Reclutadores (Fase Inmediata)

Los reclutadores dedican un promedio de **6 a 10 segundos** antes de decidir si profundizar en un perfil. Estos elementos eliminan cualquier fricción de contratación:

### 📄 A. Botón de Descarga Directa de CV (PDF)
* **Objetivo**: Facilitar la descarga inmediata de tu currículum adaptado en formato PDF de 1 o 2 páginas para guardar en sistemas ATS (Applicant Tracking Systems).
* **Ubicación estratégica**: 
  - Botón primario *"Descargar CV"* en la barra de navegación superior.
  - Botón secundario en la sección *Hero* al lado de *"Contactar"*.
* **Extra recomendado**: Una vista previa rápida en un modal (Pop-up) antes de la descarga para que no tengan que abrir el PDF en otra pestaña.

### 🖼️ B. Tarjeta Open Graph personalizada para Redes (`og-image.jpg`)
* **Objetivo**: Garantizar que al compartir `https://kimetz-portfolio.vercel.app` en LinkedIn, WhatsApp, X o Slack, aparezca una vista previa visual de alta resolución (`1200x630` px).
* **Diseño recomendado**:
  - Título principal: **Kimetz Loroño — Portfolio**
  - Subtítulo: **Data Scientist | Data Analyst | IT & Systems**
  - Muestra visual en miniatura de tus 3 proyectos estrella (Scraping, Chatbot, PowerBI) y logos de tus tecnologías clave (Python, PowerBI, Docker, SQL).

### 💬 C. Sección de Recomendaciones / Referencias
* **Objetivo**: Aportar prueba social (*Social Proof*) que confirme tu capacidad técnica y de trabajo en equipo.
* **Contenido**: 2 o 3 citas cortas de tutores, supervisores o compañeros de proyectos de:
  - **Diputación Foral de Bizkaia** (sobre tu trabajo en PowerBI/Gardentasuna y Chatbot).
  - **CFT San Agustín** (sobre la plataforma de Scraping & ETL).
  - **The Bridge Bootcamp** (sobre las auditorías de Ciberseguridad).

---

## 💡 2. Propuesta de Valor Diferenciadora (Destacar sobre otros candidatos)

Para roles de **Data Science, Data Analytics e IA**, el factor diferenciador es demostrar **cómo piensas y resuelves problemas complejos de datos**:

### ✍️ A. Casos de Estudio / Artículos Técnicos (MDX)
En lugar de mostrar solo el resultado final, añadir artículos técnicos breves de 3 minutos de lectura explicando la ingeniería interna:

1. **Caso 1 (Data Science & Web Scraping)**:
   > *"Deduplicación Difusa en Memoria: Cómo procesar +3.300 vacantes laborales en ~4 segundos con Python y Parada Temprana"*.
2. **Caso 2 (Inteligencia Artificial & NLP)**:
   > *"Chatbot Municipal con FAISS y Transformers: Clasificación automática de consultas para la Diputación de Bizkaia"*.
3. **Caso 3 (Ciberseguridad & DevOps)**:
   > *"Auditorías Automatizadas con GitHub Actions: Integración de Semgrep, Gitleaks y SBOMs en pipelines CI/CD"*.

### 🧪 B. Demostradores Interactivos en Vivo (Playgrounds)
* **Objetivo**: Que los evaluadores técnicos puedan probar tu código directamente desde la web sin instalar nada.
* **Ejemplos**:
  - **Tester del Extractor RegEx/NLP**: Un cuadro de texto interactivo en el Proyecto 5 donde el usuario escribe una oferta ficticia (ej. *"Buscamos desarrollador $1.500.000 líquido en Talca"*) y el componente muestra en tiempo real el JSON extraído (sueldo, comuna, modalidad).

### 🌐 C. Conmutador Bilingüe (Español / Inglés - i18n)
* **Objetivo**: Abrir las puertas a vacantes en multinacionales y puestos de trabajo remoto internacional (EE.UU., Europa).
* **Implementación**: Conmutador `ES | EN` en la barra de navegación utilizando una estructura de datos traducida.

---

## 🔮 3. Ideas Innovadoras & Futuras (Siguiente Nivel)

### 🤖 A. Asistente Virtual Integrado ("Kimetz-Bot")
* **Concepto**: Un pequeño widget de chat flotante en la esquina inferior derecha de la pantalla.
* **Funcionalidad**: Entrenado/alimentado con tu experiencia, estudios y proyectos. Permite a los reclutadores hacer preguntas en lenguaje natural:
  - *"¿Kimetz tiene experiencia con Docker y servidores Linux?"*
  - *"¿Qué herramientas de visualización de datos domina?"*
  - *"¿En qué proyectos utilizó Python y pandas?"*

### 🖨️ B. Modo "Impresión / Hoja de Vida" (Clean Print View)
* **Concepto**: Un botón *"Modo CV en Pantalla"* que oculta animaciones, navegación y elementos interactivos para mostrar una versión ejecutiva minimalista de 1 página perfecta para imprimir o guardar en PDF directo desde el navegador (`Ctrl + P`).

### 🐙 C. Widget de Métricas de GitHub en Tiempo Real
* **Concepto**: Integración con la API pública de GitHub para mostrar:
  - Total de contribuciones en el último año.
  - Lenguajes de programación más utilizados en repositorios públicos.
  - Estado del último commit realizado.

---

## 📊 Matriz de Priorización Sugerida

| Tarea | Impacto Reclutadores | Dificultad | Tiempo Estimado |
|---|---|---|---|
| 📄 Botón de Descarga CV PDF | 🔥 Alto | 🟢 Fácil | 15 mins |
| 🖼️ Imagen Open Graph (Social Sharing) | 🔥 Alto | 🟢 Fácil | 20 mins |
| ✍️ Casos de Estudio (Artículos MDX) | 💡 Diferenciador | 🟡 Media | 1 hora / art. |
| 🧪 Tester RegEx / Playground | 💡 Diferenciador | 🟡 Media | 45 mins |
| 🤖 Asistente Virtual Kimetz-Bot | 🚀 Innovador | 🔴 Alta | 2 horas |
| 🌐 Soporte Bilingüe (ES / EN) | 🚀 Innovador | 🟡 Media | 1.5 horas |
