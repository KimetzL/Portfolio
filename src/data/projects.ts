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

export const projects: ProjectDetail[] = [
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
    title: "Sistema de gestión de Iniciativas",
    description:
      "Plataforma centralizada para la gestión, procesamiento y seguimiento en tiempo real de iniciativas y trámites administrativos. Optimiza los flujos de trabajo internos, facilita la toma de decisiones basada en datos y mejora la trazabilidad de solicitudes.",
    longDescription: `
      Este proyecto consiste en una solución integral para el procesamiento, control y análisis de iniciativas administrativas y solicitudes ciudadanas.

      Desarrollada con un enfoque moderno centrado en datos, la plataforma permite catalogar cada iniciativa, realizar seguimiento de su estado en tiempo real, asignar responsables y generar métricas clave sobre el tiempo de respuesta y la eficiencia de los flujos de trabajo.

      Integrando bases de datos optimizadas y APIs de comunicación, el sistema simplifica la gestión diaria, reduciendo la carga operativa y mejorando la transparencia operativa.
    `,
    image: "/images/iniciativas.png",
    technologies: ["Python", "SQL", "Data Analytics", "API Rest"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
    startDate: "Junio 2025",
    endDate: "Julio 2025",
    client: "Proyecto de Gestión IT",
    category: "Gestión de Sistemas & Datos",
    features: [
      "Plataforma centralizada de registro de iniciativas",
      "Panel de seguimiento de estados en tiempo real",
      "Métricas de rendimiento e indicadores de eficiencia",
      "Arquitectura de datos estructurada y escalable",
      "Exportación de informes y análisis para toma de decisiones",
    ],
    challenges: [
      "Estructuración de datos heterogéneos de solicitudes",
      "Diseño de flujos de trabajo intuitivos para los administradores",
      "Garantía de rendimiento y actualización inmediata en el panel",
    ],
    outcomes: [
      "Centralización efectiva de la información de iniciativas",
      "Reducción en tiempos de consulta y trazabilidad de solicitudes",
      "Visibilidad global del estado del sistema",
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
    // Imagen cuadrada para tarjeta en la página principal
    image: "/images/scraping_square.png",
    // Imagen panorámica 16:9 para el banner de la vista detallada
    imageWide: "/images/scraping_wide.png",
    technologies: ["Python", "Data Science", "Web Scraping", "NLP / RegEx", "Data Analytics", "Automation"],
    githubUrl: "",
    demoUrl: "",
    featured: true,
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

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Devuelve el proyecto por su ID, o undefined si no existe. */
export function getProjectById(id: number): ProjectDetail | undefined {
  return projects.find((p) => p.id === id);
}

/** Devuelve únicamente los proyectos destacados (featured: true). */
export function getFeaturedProjects(): ProjectDetail[] {
  return projects.filter((p) => p.featured);
}

/** Devuelve únicamente los proyectos no destacados (featured: false). */
export function getOtherProjects(): ProjectDetail[] {
  return projects.filter((p) => !p.featured);
}
