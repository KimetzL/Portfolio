/**
 * Fuente única de verdad para los datos de todos los proyectos del portfolio.
 * Importar este archivo en page.tsx (lista) y projects/[id]/page.tsx (detalle)
 * para evitar duplicación y garantizar sincronización automática.
 */

// ─── Tipos ────────────────────────────────────────────────────────────────────

export interface ProjectSummary {
  id: number;
  title: string;
  description: string;
  image: string;
  /** Imagen panorámica 16:9 para la vista detallada (opcional, usa `image` si no se define) */
  imageWide?: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  /** Badge de estado o despliegue personalizado (ej: 'En Producción · Intranet CFT') */
  statusBadge?: string;
  /** Indica si el proyecto es institucional/confidencial y no tiene repositorio público */
  isConfidential?: boolean;
  /** Nota explicativa de confidencialidad o uso institucional */
  confidentialNotice?: string;
}

export interface ProjectDetail extends ProjectSummary {
  longDescription: string;
  startDate: string;
  endDate: string;
  client: string;
  category: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  /** Indica si este proyecto tiene sección de renovación/before-after */
  hasRenovation?: boolean;
}

// ─── Datos ────────────────────────────────────────────────────────────────────

export const projectsEs: ProjectDetail[] = [
  {
    id: 1,
    title: "Dashboards interactivos en PowerBI",
    description:
      'Durante mi tiempo en la Diputación Foral de Bizkaia, desarrollé dashboards interactivos utilizando PowerBI gracias a los datos abiertos de Open Data Bizkaia. Estos paneles permitieron visualizar la información de manera más clara e intuitiva para la web "Gardentasuna", facilitando la comprensión de los datos.',
    longDescription: `
      Durante mi experiencia profesional en la Diputación Foral de Bizkaia, tuve la oportunidad de desarrollar dashboards interactivos especializados utilizando Power BI como herramienta principal. Este proyecto aprovechó los datos abiertos proporcionados por Open Data Bizkaia para crear visualizaciones significativas y accesibles.

      Los dashboards desarrollados fueron implementados específicamente para la plataforma web "Gardentasuna", transformando datos complejos en información visual comprensible para diferentes tipos de usuarios. La solución permitió una navegación intuitiva a través de múltiples capas de datos, facilitando la comprensión de tendencias y patrones importantes.

      El proyecto incluyó la limpieza y procesamiento de datos, el diseño de interfaces visuales efectivas, y la implementación de filtros interactivos que permiten a los usuarios personalizar su experiencia de análisis. Los resultados finales mejoraron significativamente la forma en que los ciudadanos y administradores pueden acceder y entender la información pública.
    `,
    image: "/images/Graficas.jpg",
    technologies: ["PowerBI", "Design Systems", "Data Visualization"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    startDate: "Febrero 2025",
    endDate: "Mayo 2025",
    client: "Diputación Foral de Bizkaia",
    category: "Análisis de Datos",
    features: [
      "Dashboards interactivos con múltiples filtros",
      "Visualización de datos abiertos de Bizkaia",
      "Integración con plataforma web Gardentasuna",
      "Diseño centrado en el usuario",
      "Actualización automática de datos",
      "Navegación intuitiva y accesible",
      "Design System unificado para todos los dashboards",
      "Transformación visual antes y después",
    ],
    challenges: [
      "Procesamiento y limpieza de datos abiertos complejos",
      "Diseño de visualizaciones comprensibles para usuarios no técnicos",
      "Integración con sistemas existentes de la administración",
      "Mantenimiento de la privacidad y seguridad de los datos",
      "Estandarización de diseño across múltiples dashboards",
      "Implementación de Design System consistente",
    ],
    outcomes: [
      "Mejora significativa en la accesibilidad de datos públicos",
      "Facilitación del análisis de información para ciudadanos",
      "Herramienta útil para toma de decisiones administrativas",
      "Ejemplo exitoso de uso de datos abiertos",
      "Implementación exitosa de Design System unificado",
      "Mejora del 40% en usabilidad y consistencia visual",
    ],
    hasRenovation: true,
  },
  {
    id: 2,
    title: "Chatbot administrativo",
    description:
      "Desarrollé un chatbot administrativo capaz de analizar las consultas de los usuarios y determinar si se refieren a un ayuntamiento, un departamento o un trámite administrativo. El proyecto está implementado en Python, usando librerías como pandas, faiss, rapidfuzz y transformers, con una interfaz interactiva en Gradio. Incluye un instalador que prepara el entorno y descarga los modelos necesarios para ejecutarlo localmente.",
    longDescription: `
      Este proyecto consiste en el desarrollo de un chatbot administrativo avanzado diseñado para analizar y clasificar automáticamente las consultas de los usuarios en el contexto de la Diputación Foral de Bizkaia. El sistema utiliza procesamiento de lenguaje natural e inteligencia artificial para determinar si las preguntas se refieren a ayuntamientos específicos, departamentos administrativos, o trámites particulares.

      La implementación técnica se basa en Python y combina múltiples librerías especializadas para proporcionar respuestas precisas y contextuales. El chatbot está diseñado para mejorar la eficiencia en la atención ciudadana, ofreciendo respuestas inmediatas y clasificando correctamente las consultas para su derivación adecuada.

      Una de las características más destacadas del proyecto es su capacidad para procesar el lenguaje administrativo específico de la Diputación, proporcionando una herramienta útil tanto para los ciudadanos como para el personal administrativo.
    `,
    image: "/images/Chatbot.jpg",
    technologies: ["Python", "Pandas", "Faiss", "Rapidfuzz", "Transformers", "Gradio"],
    githubUrl: "https://github.com/KimetzL/ChatbotDFB",
    demoUrl: "",
    featured: false,
    startDate: "Mayo 2025",
    endDate: "Junio 2025",
    client: "Diputación Foral de Bizkaia",
    category: "Inteligencia Artificial",
  },
  {
    id: 3,
    title: "Informe de Ciberseguridad: Proyecto Bootcamp",
    description:
      "Como parte del Bootcamp de Ciberseguridad de The Bridge, participé en un proyecto colaborativo de dos semanas para la startup Deiviator. Mi labor incluyó auditorías de seguridad (OSINT, Pentesting y análisis de vulnerabilidades), implementación de un entorno self-hosted con Ubuntu, VPN, Suricata, Firewall UFW y Docker, y automatización de auditorías mediante GitHub Actions integrando Semgrep, ESLint, Gitleaks y SBOMs.",
    longDescription: `
      Como parte del Bootcamp de Ciberseguridad de The Bridge, participé en un proyecto colaborativo de dos semanas para la startup Deiviator. Mi labor incluyó auditorías de seguridad (OSINT, pentesting y análisis de vulnerabilidades), además de la implementación de un entorno self-hosted híbrido que combinaba infraestructura local y nube.

      En la parte on-premise, desplegamos un servidor Linux cifrado con UFW como firewall, VPN para el acceso seguro y múltiples servicios aislados mediante Docker. La parte en la nube estaba conectada a este entorno para permitir, mediante GitHub Actions, la ejecución automática de auditorías sobre los repositorios de las verticales de Full Stack y Data Science.

      El sistema realizaba análisis automatizados de código con herramientas como ESLint (calidad y estilo), Semgrep (seguridad y vulnerabilidades) y Gitleaks (detección de secretos como tokens o API keys). Además, se generaban SBOMs (Software Bill of Materials) para mantener la trazabilidad de dependencias, que eran analizados con Dependency-Track para detectar vulnerabilidades conocidas.

      Todos los resultados se almacenaban en formato JSON, enviados mediante Loki y visualizados en Grafana, dentro de un panel central de seguridad que también integraba métricas de red provenientes de Suricata. Este ecosistema proporcionaba una monitorización continua, trazabilidad completa y una visión global del estado de seguridad de los proyectos.

      📄 Se adjunta un informe en PDF con la documentación técnica completa, configuraciones, resultados y recomendaciones de mitigación desarrolladas durante el proyecto.
    `,
    image: "/images/Ciberseguridad.jpg",
    technologies: ["OSINT", "Pentesting", "Ubuntu", "VPN", "Suricata", "Docker", "GitHub Actions"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    startDate: "Septiembre 2025",
    endDate: "Octubre 2025",
    client: "The Bridge Bootcamp / Deiviator",
    category: "Ciberseguridad",
    features: [
      "Auditorías de seguridad completas",
      "Análisis OSINT para recopilación de inteligencia",
      "Pruebas de pentesting ético",
      "Implementación de entorno seguro self-hosted",
      "Automatización de auditorías con GitHub Actions",
      "Integración de múltiples herramientas de seguridad",
    ],
    challenges: [
      "Coordinación de auditorías en equipo multidisciplinar",
      "Configuración de infraestructura segura en tiempo limitado",
      "Integración de múltiples herramientas de seguridad",
      "Documentación completa de hallazgos y recomendaciones",
    ],
    outcomes: [
      "Identificación exitosa de vulnerabilidades críticas",
      "Implementación de entorno seguro funcional",
      "Automatización efectiva de procesos de auditoría",
      "Experiencia práctica integral en ciberseguridad",
    ],
  },
  {
    id: 4,
    title: "Kimün: Gestión de Vinculación con el Medio e Innovación",
    description:
      "Plataforma integral desarrollada en Laravel y PostgreSQL para la formulación, auditoría, trazabilidad y evaluación de impacto de iniciativas y propuestas de Vinculación con el Medio e Innovación en el CFT San Agustín.",
    longDescription: `
      Kimün es una plataforma institucional desarrollada para el Centro de Formación Técnica San Agustín, orientada a centralizar y dinamizar la gestión de iniciativas y propuestas de Vinculación con el Medio e Innovación.

      Integrada directamente en la intranet institucional del CFT San Agustín para facilitar el acceso unificado y sin fricción de docentes, directivos y personal administrativo, el sistema implementa un ciclo de vida colaborativo completo: los colaboradores formulan propuestas a través de un formulario wizard interactivo estructurado en 6 etapas:

      • Paso 1: Datos Generales
      • Paso 2: Datos Adicionales
      • Paso 3: ODS
      • Paso 4: Participantes, Asistentes y Productos
      • Paso 5: Recursos
      • Paso 6: Evidencias

      Posteriormente, los supervisores y administradores revisan, solicitan ajustes mediante observaciones («Falta información») o aprueban formalmente las propuestas para convertirlas en iniciativas institucionales activas.

      En el apartado técnico, la arquitectura se diseñó bajo altos estándares de rendimiento y ciberseguridad: implementación de un sistema RBAC con caché interna en memoria para optimizar las consultas y reducir drásticamente la carga sobre la base de datos, protección contra Mass Assignment mediante Form Requests tipados, saneamiento de credenciales en logs de auditoría y cabeceras HTTP de seguridad reforzadas (CSP, anti-clickjacking). Además, cuenta con un dashboard analítico con exportación de reportes en Excel/PDF y tours guiados paso a paso mediante Shepherd.js.
    `,
    image: "/images/iniciativas.png",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Docker",
      "JavaScript",
      "RBAC",
      "Data Analytics",
    ],
    githubUrl: "",
    demoUrl: "https://www.youtube.com/watch?v=p0ptiThtMYI",
    featured: true,
    statusBadge: "En Producción · Intranet CFT",
    confidentialNotice: "Desplegado en la intranet privada del CFT San Agustín con usuarios activos y datos institucionales.",
    startDate: "Febrero 2026",
    endDate: "Agosto 2026",
    client: "CFT San Agustín",
    category: "Desarrollo Web & Gestión Institucional",
    features: [
      "Integración directa en la intranet del CFT San Agustín para un acceso ágil y unificado de todo el personal",
      "Ciclo de vida completo: Formulación, revisión con observaciones y aprobación de iniciativas",
      "Wizard interactivo en 6 pasos oficiales (Datos Generales, Datos Adicionales, ODS, Participantes/Productos, Recursos y Evidencias)",
      "Control de acceso basado en roles (RBAC: Admin, Supervisor, Digitador, Colaborador)",
      "Centro de ayuda interactivo con tours guiados paso a paso (Shepherd.js)",
      "Dashboards analíticos de impacto con descarga de gráficas HD y exportación a Excel/PDF",
      "Entorno contenerizado con Docker Compose (PHP 8.3 FPM, Nginx y PostgreSQL 16)",
    ],
    challenges: [
      "Optimización de rendimiento y mitigación de consultas repetitivas a la base de datos mediante almacenamiento en caché en servicios",
      "Modelado de datos complejo con +21 modelos relacionales (geografía chilena, unidades ejecutoras, ODS y evidencias)",
      "Implementación de políticas estrictas de ciberseguridad (SecurityHeaders, logs saneados y validación MIME de archivos)",
      "Diseño de una experiencia de onboarding intuitiva para personal académico y administrativo no técnico",
      "Despliegue e integración segura dentro de la infraestructura y gobierno de datos de la intranet institucional",
    ],
    outcomes: [
      "Centralización del 100% de las iniciativas y propuestas de vinculación del CFT San Agustín",
      "Reducción drástica en los tiempos de revisión y aprobación administrativa",
      "Trazabilidad y auditoría total de cambios con registro de evidencias y exportaciones ejecutivas",
    ],
  },
  {
    id: 5,
    title: "Scraping & Analítica de Ofertas Laborales",
    description:
      "Plataforma automatizada de recolección de datos, enriquecimiento sintáctico mediante NLP/RegEx y deduplicación inteligente de vacantes laborales de la Región del Maule para el CFT San Agustín.",
    longDescription: `
      Este proyecto consiste en el desarrollo de un ecosistema completo de ciencia de datos y minería automatizada orientado al monitoreo del mercado laboral en la Región del Maule, diseñado para la orientación profesional del CFT San Agustín.

      La plataforma ejecuta pipelines de recolección diaria desde 7 fuentes públicas y privadas (APIs REST, motores HTTP y automatización Playwright). Posteriormente, aplica un motor sintáctico basado en Expresiones Regulares (NLP / Feature Extraction) para extraer de forma automática sueldos explícitos, clasificar la modalidad de trabajo (Remoto, Híbrido, Presencial) y categorizar la jornada laboral a partir de texto no estructurado.

      Para garantizar la calidad de los datos, el sistema implementa un algoritmo de deduplicación difusa en memoria capaz de procesar y unificar más de 3.300 vacantes en ~4 segundos, filtrando estrictamente por las 30 comunas de la región y operando bajo un estricto marco de scraping ético y gobernanza transparente.
    `,
    image: "/images/scraping_square.png",
    imageWide: "/images/scraping_wide.png",
    technologies: ["Python", "Data Science", "Web Scraping", "NLP / RegEx", "Data Analytics", "Automation"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
    isConfidential: true,
    confidentialNotice: "Proyecto desarrollado para la institución CFT San Agustín. Repositorio y datos reservados para uso interno.",
    startDate: "Junio 2026",
    endDate: "Agosto 2026",
    client: "CFT San Agustín",
    category: "Data Science & Analytics",
    features: [
      "Pipeline ETL automatizado para 7 portales de empleo (públicos y privados)",
      "Enriquecimiento sintáctico NLP con RegEx (sueldos, modalidades y jornadas)",
      "Algoritmo de deduplicación difusa en memoria (+3.300 ofertas en ~4 segundos)",
      "Filtrado geográfico inteligente para las 30 comunas de la Región del Maule",
      "Scraping ético auditado con User-Agent institucional e inmunidad a fallos",
      "Optimizaciones de rendimiento con algoritmo de parada temprana (Early Stopping)",
    ],
    challenges: [
      "Extracción y estructuración de datos salariales y requisitos en texto plano",
      "Deduplicación cruzada entre portales con variaciones en nombres de empresas",
      "Reducción de tiempos de scraping mediante algoritmos de parada temprana",
    ],
    outcomes: [
      "Base de datos unificada activa de +3.300 vacantes regionales en tiempo real",
      "Pipeline de datos 100% automatizado en producción con trazabilidad completa",
      "Optimización del tiempo de ejecución incremental de 3 horas a solo 2-4 minutos",
    ],
  },
];

export const projectsEn: ProjectDetail[] = [
  {
    id: 1,
    title: "Interactive Power BI Dashboards",
    description:
      'During my time at the Provincial Council of Bizkaia (Diputación Foral de Bizkaia), I developed interactive dashboards using Power BI leveraging Open Data Bizkaia. These panels enabled clearer and more intuitive data display for the "Gardentasuna" transparency portal, improving public accessibility.',
    longDescription: `
      During my professional experience at the Provincial Council of Bizkaia, I had the opportunity to develop specialized interactive dashboards using Power BI as the core analytical platform. This project leveraged open datasets provided by Open Data Bizkaia to produce meaningful, accessible visual analytics.

      The developed dashboards were deployed specifically for the "Gardentasuna" web platform, transforming complex municipal datasets into digestible visual insights for diverse audiences. The architecture provided intuitive multi-layered drill-down navigation, highlighting trends, distributions, and municipal performance metrics.

      Key responsibilities covered end-to-end data cleaning and processing, visual interface and layout design, and the implementation of interactive cross-filters that empower users to customize their exploration. The deliverables significantly enhanced public transparency and data governance.
    `,
    image: "/images/Graficas.jpg",
    technologies: ["PowerBI", "Design Systems", "Data Visualization"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    startDate: "February 2025",
    endDate: "May 2025",
    client: "Diputación Foral de Bizkaia",
    category: "Data Analytics",
    features: [
      "Interactive dashboards with multi-layer filtering",
      "Open Data Bizkaia visualization",
      "Gardentasuna transparency portal integration",
      "User-centered UI/UX design",
      "Automated data refresh pipelines",
      "Intuitive and accessible navigation",
      "Unified Design System across all dashboards",
      "Before & after visual transformation",
    ],
    challenges: [
      "Cleaning and normalizing complex public datasets",
      "Designing accessible graphics for non-technical citizens",
      "Integrating with legacy public administration systems",
      "Maintaining rigorous data privacy and governance",
      "Standardizing visual aesthetics across multiple dashboards",
      "Deploying a cohesive Design System",
    ],
    outcomes: [
      "Substantial improvement in public data accessibility",
      "Streamlined data exploration for citizens and researchers",
      "Empowered decision-making for public administrators",
      "Successful showcase of open data utilization",
      "Successful deployment of a unified Design System",
      "40% improvement in visual consistency and usability metrics",
    ],
    hasRenovation: true,
  },
  {
    id: 2,
    title: "Administrative AI Chatbot",
    description:
      "Developed an administrative chatbot capable of analyzing citizen inquiries to determine whether they target a municipality, a department, or an administrative procedure. Built with Python using pandas, FAISS, RapidFuzz, and Transformers, with a Gradio UI and an automated local setup installer.",
    longDescription: `
      This project involved engineering an advanced administrative chatbot designed to automatically analyze, parse, and categorize citizen queries within the Provincial Council of Bizkaia. The engine leverages natural language processing and artificial intelligence to identify intent, distinguish between specific town halls, departmental divisions, or bureaucratic procedures.

      The technical stack is rooted in Python, coupling vector retrieval with semantic text processing to deliver accurate, contextual guidance. The chatbot streamlines citizen assistance by providing immediate 24/7 answers and routing complex requests to the appropriate civil division.

      A key highlight is its deep comprehension of administrative and regional terminology, proving to be an indispensable asset for both citizens and municipal staff.
    `,
    image: "/images/Chatbot.jpg",
    technologies: ["Python", "Pandas", "Faiss", "Rapidfuzz", "Transformers", "Gradio"],
    githubUrl: "https://github.com/KimetzL/ChatbotDFB",
    demoUrl: "",
    featured: false,
    startDate: "May 2025",
    endDate: "June 2025",
    client: "Diputación Foral de Bizkaia",
    category: "Artificial Intelligence",
    features: [
      "Contextual natural language classification",
      "Ultra-fast FAISS vector similarity search",
      "RapidFuzz fuzzy string matching with typo tolerance",
      "100% local, privacy-compliant offline execution",
      "Interactive Gradio user interface",
      "Automated setup and model downloader scripts",
    ],
    challenges: [
      "Domain adaptation for regional administrative terminology",
      "Fast vector search across bureaucratic catalog procedures",
      "Lightweight model deployment for commodity hardware",
    ],
    outcomes: [
      "Instant query resolution for frequent citizen procedures",
      "High accuracy in department classification and routing",
      "Fully offline operational readiness without cloud API costs",
    ],
  },
  {
    id: 3,
    title: "Cybersecurity & DevSecOps Audit: Bootcamp Project",
    description:
      "As part of The Bridge Cybersecurity Bootcamp, I contributed to a 2-week collaborative engagement for startup Deiviator. Responsibilities included security audits (OSINT, pentesting, vulnerability assessments), a self-hosted Ubuntu environment with VPN, Suricata, UFW, and Docker, and automated CI/CD audits via GitHub Actions (Semgrep, ESLint, Gitleaks, SBOMs).",
    longDescription: `
      As part of The Bridge Cybersecurity Bootcamp, I participated in an intensive two-week collaborative engagement for the startup Deiviator. My role encompassed comprehensive security assessments (OSINT, ethical pentesting, and vulnerability discovery) combined with the implementation of a secure hybrid self-hosted infrastructure.

      On-premise, we deployed an encrypted Linux server hardened with UFW firewall rules, secure VPN tunnels, and isolated microservices via Docker. The cloud pipeline hooked into this environment through GitHub Actions, triggering automated audits against the Full Stack and Data Science repositories.

      The system orchestrated automated static analysis using ESLint (code quality and syntax), Semgrep (AST-based vulnerability scanning), and Gitleaks (secrets, token, and API key detection). Automated Software Bills of Materials (SBOMs) were produced and analyzed via Dependency-Track to flag known CVEs across all third-party dependencies.

      All security telemetry was persisted in JSON format, streamed through Grafana Loki, and visualized in a centralized dashboard alongside network intrusion metrics captured by Suricata. This setup delivered continuous visibility, end-to-end traceability, and actionable threat intelligence.

      📄 A comprehensive PDF technical report containing system architectures, configurations, vulnerability findings, and remediation strategies is attached.
    `,
    image: "/images/Ciberseguridad.jpg",
    technologies: ["OSINT", "Pentesting", "Ubuntu", "VPN", "Suricata", "Docker", "GitHub Actions"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
    startDate: "September 2025",
    endDate: "October 2025",
    client: "The Bridge Bootcamp / Deiviator",
    category: "Cybersecurity",
    features: [
      "Comprehensive end-to-end security audits",
      "OSINT intelligence gathering",
      "Ethical penetration testing",
      "Hardened self-hosted infrastructure deployment",
      "Automated CI/CD security gating via GitHub Actions",
      "Multi-tool security integration (Semgrep, Gitleaks, Suricata)",
    ],
    challenges: [
      "Multidisciplinary team coordination under tight deadlines",
      "Hardening hybrid infrastructure in a constrained timeline",
      "Orchestrating diverse security and telemetry tools",
      "Documenting technical findings and actionable mitigation plans",
    ],
    outcomes: [
      "Identification and remediation of critical security flaws",
      "Operational, resilient self-hosted security environment",
      "Automated prevention of secrets leakage in code repositories",
      "Comprehensive hands-on experience across SecOps and DevSecOps",
    ],
  },
  // Project 4 (Kimün) se mantiene 100% en Español a petición del usuario
  {
    id: 4,
    title: "Kimün: Gestión de Vinculación con el Medio e Innovación",
    description:
      "Plataforma integral desarrollada en Laravel y PostgreSQL para la formulación, auditoría, trazabilidad y evaluación de impacto de iniciativas y propuestas de Vinculación con el Medio e Innovación en el CFT San Agustín.",
    longDescription: `
      Kimün es una plataforma institucional desarrollada para el Centro de Formación Técnica San Agustín, orientada a centralizar y dinamizar la gestión de iniciativas y propuestas de Vinculación con el Medio e Innovación.

      Integrada directamente en la intranet institucional del CFT San Agustín para facilitar el acceso unificado y sin fricción de docentes, directivos y personal administrativo, el sistema implementa un ciclo de vida colaborativo completo: los colaboradores formulan propuestas a través de un formulario wizard interactivo estructurado en 6 etapas:

      • Paso 1: Datos Generales
      • Paso 2: Datos Adicionales
      • Paso 3: ODS
      • Paso 4: Participantes, Asistentes y Productos
      • Paso 5: Recursos
      • Paso 6: Evidencias

      Posteriormente, los supervisores y administradores revisan, solicitan ajustes mediante observaciones («Falta información») o aprueban formalmente las propuestas para convertirlas en iniciativas institucionales activas.

      En el apartado técnico, la arquitectura se diseñó bajo altos estándares de rendimiento y ciberseguridad: implementación de un sistema RBAC con caché interna en memoria para optimizar las consultas y reducir drásticamente la carga sobre la base de datos, protección contra Mass Assignment mediante Form Requests tipados, saneamiento de credenciales en logs de auditoría y cabeceras HTTP de seguridad reforzadas (CSP, anti-clickjacking). Además, cuenta con un dashboard analítico con exportación de reportes en Excel/PDF y tours guiados paso a paso mediante Shepherd.js.
    `,
    image: "/images/iniciativas.png",
    technologies: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Docker",
      "JavaScript",
      "RBAC",
      "Data Analytics",
    ],
    githubUrl: "",
    demoUrl: "https://www.youtube.com/watch?v=p0ptiThtMYI",
    featured: true,
    statusBadge: "En Producción · Intranet CFT",
    confidentialNotice: "Desplegado en la intranet privada del CFT San Agustín con usuarios activos y datos institucionales.",
    startDate: "Febrero 2026",
    endDate: "Agosto 2026",
    client: "CFT San Agustín",
    category: "Desarrollo Web & Gestión Institucional",
    features: [
      "Integración directa en la intranet del CFT San Agustín para un acceso ágil y unificado de todo el personal",
      "Ciclo de vida completo: Formulación, revisión con observaciones y aprobación de iniciativas",
      "Wizard interactivo en 6 pasos oficiales (Datos Generales, Datos Adicionales, ODS, Participantes/Productos, Recursos y Evidencias)",
      "Control de acceso basado en roles (RBAC: Admin, Supervisor, Digitador, Colaborador)",
      "Centro de ayuda interactivo con tours guiados paso a paso (Shepherd.js)",
      "Dashboards analíticos de impacto con descarga de gráficas HD y exportación a Excel/PDF",
      "Entorno contenerizado con Docker Compose (PHP 8.3 FPM, Nginx y PostgreSQL 16)",
    ],
    challenges: [
      "Optimización de rendimiento y mitigación de consultas repetitivas a la base de datos mediante almacenamiento en caché en servicios",
      "Modelado de datos complejo con +21 modelos relacionales (geografía chilena, unidades ejecutoras, ODS y evidencias)",
      "Implementación de políticas estrictas de ciberseguridad (SecurityHeaders, logs saneados y validación MIME de archivos)",
      "Diseño de una experiencia de onboarding intuitiva para personal académico y administrativo no técnico",
      "Despliegue e integración segura dentro de la infraestructura y gobierno de datos de la intranet institucional",
    ],
    outcomes: [
      "Centralización del 100% de las iniciativas y propuestas de vinculación del CFT San Agustín",
      "Reducción drástica en los tiempos de revisión y aprobación administrativa",
      "Trazabilidad y auditoría total de cambios con registro de evidencias y exportaciones ejecutivas",
    ],
  },
  {
    id: 5,
    title: "Job Market Scraping & Analytics Platform",
    description:
      "Automated data harvesting platform with NLP/RegEx syntactic enrichment and intelligent in-memory deduplication of regional job vacancies for CFT San Agustín.",
    longDescription: `
      This project is a comprehensive data science and web mining ecosystem engineered to monitor the labor market in the Maule Region, developed for the vocational guidance division of CFT San Agustín.

      The platform orchestrates daily automated extraction pipelines across 7 public and private job boards (REST APIs, HTTP engines, and headless Playwright automation). An NLP/RegEx syntactic feature extraction engine parses raw job text to extract explicit salaries, classify work arrangements (Remote, Hybrid, On-site), and categorize schedule types.

      To ensure peak data quality, the system incorporates an in-memory fuzzy deduplication algorithm capable of processing and unifying 3,300+ postings in ~4 seconds, rigorously filtering for the 30 municipalities of the Maule Region under a strict ethical scraping policy and transparent governance.
    `,
    image: "/images/scraping_square.png",
    imageWide: "/images/scraping_wide.png",
    technologies: ["Python", "Data Science", "Web Scraping", "NLP / RegEx", "Data Analytics", "Automation"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
    isConfidential: true,
    confidentialNotice: "Project developed for CFT San Agustín. Repository and datasets reserved for internal institutional use.",
    startDate: "June 2026",
    endDate: "August 2026",
    client: "CFT San Agustín",
    category: "Data Science & Analytics",
    features: [
      "Automated ETL pipeline across 7 public and private job portals",
      "Syntactic NLP enrichment via RegEx (salaries, work modes, shifts)",
      "In-memory fuzzy deduplication algorithm (3,300+ postings in ~4 seconds)",
      "Intelligent geographic filtering across the 30 Maule communes",
      "Audited ethical scraping with institutional User-Agent and fault-tolerance",
      "Performance optimizations via heuristic Early Stopping algorithms",
    ],
    challenges: [
      "Extracting unstructured salary and requirement fields from plain text",
      "Cross-portal deduplication with fuzzy matching on employer names",
      "Drastic reduction of scraping runtimes via early stopping heuristics",
    ],
    outcomes: [
      "Unified live repository of 3,300+ regional job opportunities",
      "100% automated production data pipeline with full audit trail",
      "Incremental execution runtime slashed from 3 hours to just 2-4 minutes",
    ],
  },
];

// Compatibilidad hacia atrás
export const projects: ProjectDetail[] = projectsEs;

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Devuelve la lista de proyectos según el idioma seleccionado. */
export function getProjects(locale: "es" | "en" = "es"): ProjectDetail[] {
  return locale === "en" ? projectsEn : projectsEs;
}

/** Devuelve el proyecto por su ID e idioma, o undefined si no existe. */
export function getProjectById(id: number, locale: "es" | "en" = "es"): ProjectDetail | undefined {
  return getProjects(locale).find((p) => p.id === id);
}

/** Devuelve únicamente los proyectos destacados según el idioma. */
export function getFeaturedProjects(locale: "es" | "en" = "es"): ProjectDetail[] {
  return getProjects(locale).filter((p) => p.featured);
}

/** Devuelve únicamente los proyectos no destacados según el idioma. */
export function getOtherProjects(locale: "es" | "en" = "es"): ProjectDetail[] {
  return getProjects(locale).filter((p) => !p.featured);
}
