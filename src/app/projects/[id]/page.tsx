"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Calendar,
  User,
  Code,
  Database,
  Shield,
  Globe,
  Server,
  Brain,
  Lock,
  Terminal,
  Zap,
  CheckCircle2,
  Filter,
  Search,
  RefreshCw,
  Copy,
  Check
} from "lucide-react";

const projectData = {
  1: {
    title: "Dashboards interactivos en PowerBI",
    description: "Durante mi tiempo en la Diputación Foral de Bizkaia, desarrollé dashboards interactivos utilizando PowerBI gracias a los datos abiertos de Open Data Bizkaia. Estos paneles permitieron visualizar la información de manera más clara e intuitiva para la web \"Gardentasuna\", facilitando la comprensión de los datos.",
    longDescription: `
      Durante mi experiencia profesional en la Diputación Foral de Bizkaia, tuve la oportunidad de desarrollar dashboards interactivos especializados utilizando Power BI como herramienta principal. Este proyecto aprovechó los datos abiertos proporcionados por Open Data Bizkaia para crear visualizaciones significativas y accesibles.

      Los dashboards desarrollados fueron implementados específicamente para la plataforma web \"Gardentasuna\", transformando datos complejos en información visual comprensible para diferentes tipos de usuarios. La solución permitió una navegación intuitiva a través de múltiples capas de datos, facilitando la comprensión de tendencias y patrones importantes.

      El proyecto incluyó la limpieza y procesamiento de datos, el diseño de interfaces visuales efectivas, y la implementación de filtros interactivos que permiten a los usuarios personalizar su experiencia de análisis. Los resultados finales mejoraron significativamente la forma en que los ciudadanos y administradores pueden acceder y entender la información pública.
    `,
    image: "/images/Graficas.jpg",
    technologies: ["PowerBI", "Design Systems", "Data Visualization"],
    githubUrl: "",
    demoUrl: "",
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
      "Transformación visual antes y después"
    ],
    challenges: [
      "Procesamiento y limpieza de datos abiertos complejos",
      "Diseño de visualizaciones comprensibles para usuarios no técnicos",
      "Integración con sistemas existentes de la administración",
      "Mantenimiento de la privacidad y seguridad de los datos",
      "Estandarización de diseño across múltiples dashboards",
      "Implementación de Design System consistente"
    ],
    outcomes: [
      "Mejora significativa en la accesibilidad de datos públicos",
      "Facilitación del análisis de información para ciudadanos",
      "Herramienta útil para toma de decisiones administrativas",
      "Ejemplo exitoso de uso de datos abiertos",
      "Implementación exitosa de Design System unificado",
      "Mejora del 40% en usabilidad y consistencia visual"
    ],
    hasRenovation: true
  },
  2: {
    title: "Chatbot administrativo",
    description: "Desarrollé un chatbot administrativo para la Diputación Foral de Bizkaia capaz de analizar las consultas de los usuarios y determinar si se refieren a un ayuntamiento, un departamento o un trámite administrativo. El proyecto utiliza procesamiento de lenguaje natural e incluye una interfaz interactiva para facilitar la comunicación ciudadana.",
    longDescription: `
      Este proyecto consiste en el desarrollo de un chatbot administrativo avanzado diseñado para analizar y clasificar automáticamente las consultas de los usuarios en el contexto de la Diputación Foral de Bizkaia. El sistema utiliza procesamiento de lenguaje natural e inteligencia artificial para determinar si las preguntas se refieren a ayuntamientos específicos, departamentos administrativos, o trámites particulares.

      La implementación técnica se basa en Python y combina múltiples librerías especializadas para proporcionar respuestas precisas y contextuales. El chatbot está diseñado para mejorar la eficiencia en la atención ciudadana, ofreciendo respuestas inmediatas y clasificando correctamente las consultas para su derivación adecuada.

      Una de las características más destacadas del proyecto es su capacidad para procesar el lenguaje administrativo específico de la Diputación, proporcionando una herramienta útil tanto para los ciudadanos como para el personal administrativo.
    `,
    image: "/images/Chatbot.jpg",
    technologies: ["Python", "NLP", "Gradio", "Transformers", "Pandas"],
    githubUrl: "https://github.com/KimetzL/ChatbotDFB",
    demoUrl: "",
    startDate: "Mayo 2025",
    endDate: "Junio 2025",
    client: "Diputación Foral de Bizkaia",
    category: "Inteligencia Artificial"
  },
  3: {
    title: "Informe de Ciberseguridad: Proyecto Bootcamp",
    description: "Como parte del Bootcamp de Ciberseguridad de The Bridge, participé en un proyecto colaborativo de dos semanas para la startup Deiviator. Mi labor incluyó auditorías de seguridad (OSINT, pentesting y análisis de vulnerabilidades), además de la implementación de un entorno self-hosted híbrido que combinaba infraestructura local y nube.",
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
      "Integración de múltiples herramientas de seguridad"
    ],
    challenges: [
      "Coordinación de auditorías en equipo multidisciplinar",
      "Configuración de infraestructura segura en tiempo limitado",
      "Integración de múltiples herramientas de seguridad",
      "Documentación completa de hallazgos y recomendaciones"
    ],
    outcomes: [
      "Identificación exitosa de vulnerabilidades críticas",
      "Implementación de entorno seguro funcional",
      "Automatización efectiva de procesos de auditoría",
      "Experiencia práctica integral en ciberseguridad"
    ]
  },
  4: {
    title: "Sistema de gestión de Iniciativas",
    description: "Plataforma centralizada para la gestión, procesamiento y seguimiento en tiempo real de iniciativas y trámites administrativos. Optimiza los flujos de trabajo internos, facilita la toma de decisiones basada en datos y mejora la trazabilidad de solicitudes.",
    longDescription: `
      Este proyecto consiste en una solución integral para el procesamiento, control y análisis de iniciativas administrativas y solicitudes ciudadanas.

      Desarrollada con un enfoque moderno centrado en datos, la plataforma permite catalogar cada iniciativa, realizar seguimiento de su estado en tiempo real, asignar responsables y generar métricas clave sobre el tiempo de respuesta y la eficiencia de los flujos de trabajo.

      Integrando bases de datos optimizadas y APIs de comunicación, el sistema simplifica la gestión diaria, reduciendo la carga operativa y mejorando la transparencia operativa.
    `,
    image: "/images/iniciativas.png",
    technologies: ["Python", "SQL", "Data Analytics", "API Rest"],
    githubUrl: "",
    demoUrl: "",
    startDate: "Junio 2025",
    endDate: "Julio 2025",
    client: "Proyecto de Gestión IT",
    category: "Gestión de Sistemas & Datos",
    features: [
      "Plataforma centralizada de registro de iniciativas",
      "Panel de seguimiento de estados en tiempo real",
      "Métricas de rendimiento e indicadores de eficiencia",
      "Arquitectura de datos estructurada y escalable",
      "Exportación de informes y análisis para toma de decisiones"
    ],
    challenges: [
      "Estructuración de datos heterogéneos de solicitudes",
      "Diseño de flujos de trabajo intuitivos para los administradores",
      "Garantía de rendimiento y actualización inmediata en el panel"
    ],
    outcomes: [
      "Centralización efectiva de la información de iniciativas",
      "Reducción en tiempos de consulta y trazabilidad de solicitudes",
      "Visibilidad global del estado del sistema"
    ]
  },
  5: {
    title: "Scraping & Analítica de Ofertas Laborales",
    description: "Plataforma automatizada de recolección de datos, enriquecimiento sintáctico mediante NLP/RegEx y deduplicación inteligente de vacantes laborales de la Región del Maule para el CFT San Agustín.",
    longDescription: `
      Este proyecto consiste en el desarrollo de un ecosistema completo de ciencia de datos y minería automatizada orientado al monitoreo del mercado laboral en la Región del Maule, diseñado para la orientación profesional del CFT San Agustín.

      La plataforma ejecuta pipelines de recolección diaria desde 7 fuentes públicas y privadas (APIs REST, motores HTTP y automatización Playwright). Posteriormente, aplica un motor sintáctico basado en Expresiones Regulares (NLP / Feature Extraction) para extraer de forma automática sueldos explícitos, clasificar la modalidad de trabajo (Remoto, Híbrido, Presencial) y categorizar la jornada laboral a partir de texto no estructurado.

      Para garantizar la calidad de los datos, el sistema implementa un algoritmo de deduplicación difusa en memoria capaz de procesar y unificar más de 3.300 vacantes en ~4 segundos, filtrando estrictamente por las 30 comunas de la región y operando bajo un estricto marco de scraping ético y gobernanza transparente.
    `,
    image: "/images/scraping.png",
    technologies: ["Python", "Data Science", "Web Scraping", "NLP / RegEx", "Data Analytics", "Automation"],
    githubUrl: "",
    demoUrl: "",
    startDate: "Julio 2025",
    endDate: "Presente",
    client: "CFT San Agustín / Data Science Pipeline",
    category: "Data Science & Analytics",
    features: [
      "Pipeline ETL automatizado para 7 portales de empleo (públicos y privados)",
      "Enriquecimiento sintáctico NLP con RegEx (sueldos, modalidades y jornadas)",
      "Algoritmo de deduplicación difusa en memoria (+3.300 ofertas en ~4 segundos)",
      "Filtrado geográfico inteligente para las 30 comunas de la Región del Maule",
      "Scraping ético auditado con User-Agent institucional e inmunidad a fallos O(1)",
      "Optimizaciones de rendimiento con algoritmo de parada temprana (Early Stopping)"
    ],
    challenges: [
      "Extracción y estructuración de datos salariales y requisitos en texto plano",
      "Deduplicación cruzada entre portales con variaciones en nombres de empresas",
      "Reducción de tiempos de scraping mediante algoritmos de parada temprana"
    ],
    outcomes: [
      "Base de datos unificada activa de +3.300 vacantes regionales en tiempo real",
      "Pipeline de datos 100% automatizado en producción con trazabilidad completa",
      "Optimización del tiempo de ejecución incremental de 3 horas a solo 2-4 minutos"
    ]
  }
};

const getIcon = (tech: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Python: <Code className="w-4 h-4" />,
    React: <Globe className="w-4 h-4" />,
    PowerBI: <Database className="w-4 h-4" />,
    TensorFlow: <Brain className="w-4 h-4" />,
    Metasploit: <Shield className="w-4 h-4" />,
    Burp: <Lock className="w-4 h-4" />,
    Docker: <Server className="w-4 h-4" />,
    Linux: <Terminal className="w-4 h-4" />,
    PHP: <Code className="w-4 h-4" />,
    Nodejs: <Server className="w-4 h-4" />,
    Wireshark: <Lock className="w-4 h-4" />,
    Pandas: <Database className="w-4 h-4" />,
    Faiss: <Brain className="w-4 h-4" />,
    Rapidfuzz: <Code className="w-4 h-4" />,
    Transformers: <Brain className="w-4 h-4" />,
    Gradio: <Globe className="w-4 h-4" />,
    OSINT: <Shield className="w-4 h-4" />,
    Pentesting: <Lock className="w-4 h-4" />,
    Ubuntu: <Terminal className="w-4 h-4" />,
    VPN: <Shield className="w-4 h-4" />,
    Suricata: <Shield className="w-4 h-4" />,
    "GitHub Actions": <Github className="w-4 h-4" />,
  };
  return iconMap[tech] || <Code className="w-4 h-4" />;
};

function JobEngineShowcaseSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeCodeTab, setActiveCodeTab] = useState("early-stop");
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [portalFilter, setPortalFilter] = useState("all");
  const [comunaFilter, setComunaFilter] = useState("all");
  const [modalidadFilter, setModalidadFilter] = useState("all");

  const sampleOffers = [
    { id: "EP-98231", titulo: "Analista Programador / Desarrollador Backend", portal: "Empleos Públicos", empresa: "Hospital Regional de Talca", comuna: "Talca", modalidad: "Presencial", jornada: "Jornada Completa", sueldo: "$1.450.000 Líquido", fecha: "2026-07-27" },
    { id: "BNE-44120", titulo: "Ingeniero Agroindustrial / Jefe de Planta", portal: "BNE", empresa: "Agroindustrial El Aconcagua S.A.", comuna: "Curicó", modalidad: "Presencial", jornada: "Jornada Completa", sueldo: "$1.800.000", fecha: "2026-07-26" },
    { id: "GOB-1092", titulo: "Fullstack Developer Python & React", portal: "Get on Board", empresa: "TechTalent Chile", comuna: "Remoto", modalidad: "Remoto", jornada: "Jornada Completa", sueldo: "$2.200.000 - $2.600.000", fecha: "2026-07-28" },
    { id: "LAB-77612", titulo: "Enfermero/a Clínico Turno 4T", portal: "Laborum", empresa: "Clínica San Francisco", comuna: "Linares", modalidad: "Presencial", jornada: "Por Turnos", sueldo: "$1.100.000", fecha: "2026-07-25" },
    { id: "TRAB-5531", titulo: "Contador Auditor Senior", portal: "Trabajando.cl", empresa: "Agrícola Maule Sur Ltda.", comuna: "San Javier", modalidad: "Híbrido", jornada: "Jornada Completa", sueldo: "$1.300.000", fecha: "2026-07-26" },
    { id: "CT-88912", titulo: "Técnico Mecánico de Mantenimiento", portal: "ChileTrabajos", empresa: "CMPC Celulosa", comuna: "Constitución", modalidad: "Presencial", jornada: "Jornada Completa", sueldo: "$850.000 Líquido", fecha: "2026-07-27" },
    { id: "TEE-3011", titulo: "Administrativo de Finanzas y Presupuesto", portal: "Trabaja en el Estado", empresa: "Servicio de Salud Maule", comuna: "Talca", modalidad: "Presencial", jornada: "Jornada Completa", sueldo: "$950.000", fecha: "2026-07-24" },
    { id: "BNE-88219", titulo: "Prevencionista de Riesgos (Sernageomin B)", portal: "BNE", empresa: "Constructora del Centro", comuna: "Cauquenes", modalidad: "Presencial", jornada: "Jornada Completa", sueldo: "$1.250.000", fecha: "2026-07-27" },
  ];

  const filteredOffers = sampleOffers.filter((o) => {
    const matchesSearch = !searchQuery || 
      o.titulo.toLowerCase().includes(searchQuery.toLowerCase()) || 
      o.empresa.toLowerCase().includes(searchQuery.toLowerCase()) || 
      o.comuna.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPortal = portalFilter === "all" || o.portal === portalFilter;
    const matchesComuna = comunaFilter === "all" || o.comuna === comunaFilter;
    const matchesModalidad = modalidadFilter === "all" || o.modalidad === modalidadFilter;
    return matchesSearch && matchesPortal && matchesComuna && matchesModalidad;
  });

  const pipelineSteps: { [key: number]: { title: string; desc: string; highlights: string[] } } = {
    1: {
      title: "01. Extracción Multi-Fuente (APIs, HTTP & Playwright)",
      desc: "Arquitectura desacoplada que utiliza la técnica óptima según la fuente: REST APIs para BNE y Get on Board, HTTP/lxml de alto rendimiento para Empleos Públicos y ChileTrabajos, y automatización con Playwright para portales con renderizado JS (Trabajando, Laborum).",
      highlights: [
        "User-Agent transparente institucional: IES-CareerBot/1.0",
        "Delays aleatorios éticos de 1s a 10s entre peticiones",
        "Caché local HTTP (cache_http.py) con TTL configurable (4h / 24h)"
      ]
    },
    2: {
      title: "02. Persistencia Incremental Append O(1) & Parada Temprana",
      desc: "Cada oferta extraída se serializa e inserta de forma inmediata al final del CSV individual en disco (mode='a'). Además, si el 100% de las ofertas de una página completa ya existen en la base de datos local, la paginación se aborta inmediatamente.",
      highlights: [
        "Cero pérdida de datos ante interrupciones de red o suspensión del SO",
        "Tiempo de escritura constante O(1) sin reescritura de archivos",
        "Reducción del tiempo incremental de 3 horas a solo 2-4 minutos"
      ]
    },
    3: {
      title: "03. Transformación & Motor RegEx NLP (extractor_helpers.py)",
      desc: "Librería centralizada de expresiones regulares que procesa títulos y descripciones no estructurados para extraer sueldos explícitos, clasificar la modalidad de trabajo (Remoto, Híbrido, Presencial) y filtrar estrictamente por las 30 comunas de la Región del Maule.",
      highlights: [
        "Conversión sintáctica automatizada ($1.2M -> $1.200.000)",
        "Soporte para terminología laboral en inglés (WFH, Remote)",
        "Filtro geográfico estricto para las 30 comunas del Maule"
      ]
    },
    4: {
      title: "04. Deduplicación Difusa & Salida Consolidada (clean_existing_csvs.py)",
      desc: "Proceso que consolida todos los CSVs individuales, normaliza los nombres de empresas (removiendo stop-words y sufijos legales como Ltda/S.A.), agrupa por la tupla (título, empresa, comuna) y conserva la versión del portal de mayor prioridad.",
      highlights: [
        "Procesamiento y deduplicación de +3.300 ofertas en ~4 segundos en memoria",
        "Generación de reportes de auditoría de duplicados y excluidos",
        "Consolidación en ofertas_unificadas.csv con esquema canónico de 17 columnas"
      ]
    }
  };

  const codeSnippets: { [key: string]: string } = {
    "early-stop": `# Módulo: Early Stopping en Scrapers Paginados\n# Ubicación: empleos/portales/bne/bne.py\n\ndef extraer_ofertas_bne(limite_paginas=50):\n    for pagina in range(1, limite_paginas + 1):\n        ofertas_pagina = api_client.obtener_lista(pagina=pagina)\n        nuevas_en_pagina = 0\n        \n        for oferta in ofertas_pagina:\n            if not existe_en_csv_local(oferta["codigo"]):\n                guardar_incremental_append(oferta)\n                nuevas_en_pagina += 1\n        \n        # Si el 100% de ofertas ya existen, aborta paginación\n        if nuevas_en_pagina == 0:\n            logger.info(f"Parada Temprana activada en página {pagina}: 0 ofertas nuevas.")\n            break`,
    "append-mode": `# Módulo: Escritura Incremental Directa O(1)\n# Ubicación: empleos/config.py\n\ndef registrar_oferta_incremental(filepath, oferta_dict, fieldnames):\n    """\n    Escribe inmediatamente la oferta al final del archivo CSV sin reescribirlo.\n    Garantiza tiempo O(1) e inmunidad a fallos de red o suspensión.\n    """\n    file_exists = os.path.isfile(filepath)\n    with open(filepath, mode="a", encoding="utf-8", newline="") as f:\n        writer = csv.DictWriter(f, fieldnames=fieldnames)\n        if not file_exists:\n            writer.writeheader()\n        writer.writerow(oferta_dict)`,
    "dedup-hash": `# Módulo: Deduplicación Algorítmica Difusa\n# Ubicación: empleos/clean_existing_csvs.py\n\ndef deduplicar_ofertas(lista_ofertas):\n    vistas = {}\n    duplicados_eliminados = []\n    \n    for oferta in lista_ofertas:\n        # Generar clave canónica limpia\n        titulo_norm = re.sub(r'\\b(de|en|con|para|ltda|s\\.a)\\b', '', oferta['titulo'].lower())\n        empresa_norm = re.sub(r'\\b(chile|ltda|s\\.a|spa)\\b', '', oferta['empresa'].lower())\n        hash_key = f"{titulo_norm.strip()[:20]}|{empresa_norm.strip()[:15]}|{oferta['comuna'].lower()}"\n        \n        if hash_key in vistas:\n            # Conservar versión del portal con mayor prioridad en PRIORITY_ORDER\n            existente = vistas[hash_key]\n            if PRIORITY_ORDER.index(oferta['portal']) < PRIORITY_ORDER.index(existente['portal']):\n                vistas[hash_key] = oferta\n                duplicados_eliminados.append(existente)\n            else:\n                duplicados_eliminados.append(oferta)\n        else:\n            vistas[hash_key] = oferta\n            \n    return list(vistas.values()), duplicados_eliminados`,
    "regex-enrich": `# Módulo: Motor Sintáctico RegEx (Sueldos y Modalidades)\n# Ubicación: empleos/extractor_helpers.py\n\ndef extraer_sueldo(titulo, descripcion):\n    texto = f"{titulo} {descripcion}".lower()\n    \n    patron_rango = r'\\$\\s*(\\d{1,3}(?:\\.\\d{3})*)\\s*a\\s*\\$\\s*(\\d{1,3}(?:\\.\\d{3})*)'\n    patron_monto = r'\\$\\s*(\\d{1,3}(?:\\.\\d{3})*|\\d+)\\s*(?:mil|k)?'\n    \n    match_rango = re.search(patron_rango, texto)\n    if match_rango:\n        return f"\${match_rango.group(1)} - \${match_rango.group(2)}"\n        \n    match_monto = re.search(patron_monto, texto)\n    if match_monto:\n        val = match_monto.group(1).replace('.', '')\n        if int(val) > 200000:\n            return f"\${int(val):,}".replace(',', '.')\n            \n    return "A convenir"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 mt-12">
      {/* KPI Stat Cards Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Métricas e Indicadores de Rendimiento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">+3.300</div>
                <div className="text-xs text-muted-foreground font-medium">Vacantes Consolidadas</div>
                <div className="text-[11px] text-muted-foreground/70">Dataset activo Maule</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">7 Fuentes</div>
                <div className="text-xs text-muted-foreground font-medium">Portales Integrados</div>
                <div className="text-[11px] text-muted-foreground/70">APIs + HTTP + Playwright</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-500">~4 seg</div>
                <div className="text-xs text-muted-foreground font-medium">Deduplicación Difusa</div>
                <div className="text-[11px] text-muted-foreground/70">Procesamiento en memoria</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-500">100%</div>
                <div className="text-xs text-muted-foreground font-medium">Scraping Ético Auditado</div>
                <div className="text-[11px] text-muted-foreground/70">User-Agent & Robots.txt</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive ETL Pipeline Stepper */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Canalización ETL Interactiva</h2>
        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30 border-b pb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((stepNum) => (
                <Button
                  key={stepNum}
                  variant={activeStep === stepNum ? "default" : "outline"}
                  onClick={() => setActiveStep(stepNum)}
                  className="flex flex-col items-start h-auto py-3 px-4 text-left justify-start"
                >
                  <span className="text-xs opacity-70 font-mono">Paso 0{stepNum}</span>
                  <span className="text-xs font-bold truncate">
                    {stepNum === 1 && "1. Extracción"}
                    {stepNum === 2 && "2. Append & Stop"}
                    {stepNum === 3 && "3. NLP RegEx"}
                    {stepNum === 4 && "4. Deduplicación"}
                  </span>
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-3 text-primary font-semibold text-lg">
              <Zap className="w-5 h-5" />
              {pipelineSteps[activeStep].title}
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {pipelineSteps[activeStep].desc}
            </p>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Puntos clave:</span>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {pipelineSteps[activeStep].highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs bg-muted/50 p-2.5 rounded-lg border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Live Dataset Explorer */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Explorador del Dataset Unificado</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Simulador interactivo del dataset consolidado (`ofertas_unificadas.csv`) para la Región del Maule.
            </p>
          </div>
          <Badge variant="outline" className="w-fit">
            Mostrando {filteredOffers.length} de {sampleOffers.length} ofertas representativas
          </Badge>
        </div>

        {/* Filters Box */}
        <Card className="mb-6">
          <CardContent className="p-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por cargo, empresa o comuna (ej: Programador, Hospital, Talca)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1">Portal</label>
                <select
                  value={portalFilter}
                  onChange={(e) => setPortalFilter(e.target.value)}
                  className="w-full bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">Todos los portales</option>
                  <option value="BNE">BNE (API)</option>
                  <option value="Empleos Públicos">Empleos Públicos</option>
                  <option value="Trabajando.cl">Trabajando.cl</option>
                  <option value="Laborum">Laborum.cl</option>
                  <option value="ChileTrabajos">ChileTrabajos</option>
                  <option value="Get on Board">Get on Board</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1">Comuna</label>
                <select
                  value={comunaFilter}
                  onChange={(e) => setComunaFilter(e.target.value)}
                  className="w-full bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">Todas las comunas</option>
                  <option value="Talca">Talca</option>
                  <option value="Curicó">Curicó</option>
                  <option value="Linares">Linares</option>
                  <option value="Constitución">Constitución</option>
                  <option value="Remoto">Remoto</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1">Modalidad</label>
                <select
                  value={modalidadFilter}
                  onChange={(e) => setModalidadFilter(e.target.value)}
                  className="w-full bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">Todas las modalidades</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Remoto">Remoto</option>
                  <option value="Híbrido">Híbrido</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOffers.length === 0 ? (
            <div className="col-span-2 text-center py-12 text-muted-foreground border rounded-lg bg-card">
              No se encontraron vacantes con los filtros seleccionados.
            </div>
          ) : (
            filteredOffers.map((offer) => (
              <Card key={offer.id} className="hover:border-primary/40 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-bold line-clamp-1">{offer.titulo}</CardTitle>
                    <Badge variant="secondary" className="text-[10px] shrink-0">{offer.portal}</Badge>
                  </div>
                  <CardDescription className="text-xs font-semibold text-purple-400">
                    🏢 {offer.empresa}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-[11px] bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                      💰 {offer.sueldo}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] bg-blue-500/10 text-blue-400 border-blue-500/30">
                      📍 {offer.comuna}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] bg-purple-500/10 text-purple-400 border-purple-500/30">
                      💻 {offer.modalidad}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Code Snippets Viewer Component */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Código Clave en Python</h2>
          <Button size="sm" variant="outline" onClick={handleCopyCode} className="gap-2">
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copiado!" : "Copiar Código"}
          </Button>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30 border-b pb-3">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "early-stop", label: "Early Stopping" },
                { id: "append-mode", label: "Append O(1)" },
                { id: "dedup-hash", label: "Deduplicación Difusa" },
                { id: "regex-enrich", label: "RegEx NLP Sueldos" },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  size="sm"
                  variant={activeCodeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveCodeTab(tab.id)}
                  className="text-xs"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-4 bg-slate-950 font-mono text-xs text-slate-100 overflow-x-auto">
            <pre><code>{codeSnippets[activeCodeTab]}</code></pre>
          </CardContent>
        </Card>
      </div>

      {/* Ethics & Governance Sources Matrix */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Matriz de Scraping Ético y Fuentes</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              Estado y Cumplimiento Normativo de Portales
            </CardTitle>
            <CardDescription>
              User-Agent Transparente: <code>IES-CareerBot/1.0; (+http://www.cftsanagustin.cl)</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/50 text-muted-foreground border-b">
                <tr>
                  <th className="p-3">Portal</th>
                  <th className="p-3">Técnica Motor</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Criterio Ético / Gobernanza</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-bold">BNE</td>
                  <td className="p-3">API REST</td>
                  <td className="p-3"><Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-0">Activo</Badge></td>
                  <td className="p-3 text-muted-foreground">API pública oficial autorizada</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Empleos Públicos</td>
                  <td className="p-3">HTTP / lxml</td>
                  <td className="p-3"><Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-0">Activo</Badge></td>
                  <td className="p-3 text-muted-foreground">Portal gubernamental público estatal</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Trabajando.cl</td>
                  <td className="p-3">Playwright</td>
                  <td className="p-3"><Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-0">Activo</Badge></td>
                  <td className="p-3 text-muted-foreground">Renderizado headless respetando robots.txt</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Laborum.cl</td>
                  <td className="p-3">Playwright</td>
                  <td className="p-3"><Badge className="bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-0">Activo</Badge></td>
                  <td className="p-3 text-muted-foreground">Navegación responsable con delays éticos 5-10s</td>
                </tr>
                <tr className="bg-rose-500/5">
                  <td className="p-3 font-bold opacity-60">Computrabajo</td>
                  <td className="p-3 opacity-60">—</td>
                  <td className="p-3"><Badge variant="destructive">Excluido</Badge></td>
                  <td className="p-3 text-rose-300">AWS WAF bloquea User-Agent; violaría transparencia suplantar navegador.</td>
                </tr>
                <tr className="bg-rose-500/5">
                  <td className="p-3 font-bold opacity-60">Indeed</td>
                  <td className="p-3 opacity-60">—</td>
                  <td className="p-3"><Badge variant="destructive">Excluido</Badge></td>
                  <td className="p-3 text-rose-300">Cloudflare exige bypasses no autorizados. Exclusión voluntaria.</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  const project = projectData[projectId as keyof typeof projectData];

  // Función para manejar la vista previa del PDF de Ciberseguridad
  const handlePreviewCybersecurityPDF = () => {
    const pdfUrl = "/documents/Informe Ciberseguridad DeiviGo.pdf";
    window.open(pdfUrl, '_blank');
  };

  // Función para manejar la descarga del PDF de Ciberseguridad
  const handleDownloadCybersecurityPDF = () => {
    const pdfUrl = "/documents/Informe Ciberseguridad DeiviGo.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Informe Ciberseguridad DeiviGo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Función para manejar la vista previa del PDF del Renove
  const handlePreviewRenovePDF = () => {
    const pdfUrl = "/documents/Renove PowerBI.pdf";
    window.open(pdfUrl, '_blank');
  };

  // Función para manejar la descarga del PDF del Renove
  const handleDownloadRenovePDF = () => {
    const pdfUrl = "/documents/Renove PowerBI.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Renove PowerBI.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Proyecto No Encontrado</h1>
          <Button onClick={() => router.push('/')}>Volver al Inicio</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Project Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                      {getIcon(tech)}
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{project.category}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex gap-2">
                  {project.demoUrl && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo en Vivo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-12"
          >
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Descripción General</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-invert max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interactive Showcase Section - Only for Project 5 */}
            {projectId === "5" && (
              <JobEngineShowcaseSection />
            )}

            {/* Interactive Dashboards Section - Only for Project 1 */}
            {projectId === "1" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Dashboards Interactivos</h2>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                  {/* Dashboard 1: Comunicaciones, Consultas, Quejas y Sugerencias */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-lg">Comunicaciones, Consultas, Quejas y Sugerencias</CardTitle>
                      <CardDescription>
                        Sistema de seguimiento de comunicaciones ciudadanas y gestión de solicitudes
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <iframe 
                          title="Comunicaciones, Consultas, Quejas y Sugerencias"
                          width="100%" 
                          height="100%" 
                          src="https://app.powerbi.com/view?r=eyJrIjoiNGIwNWM4MjEtMjJmZi00ZDJlLTg2N2EtNjQzMjhhYmIwNmZiIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=cb1fe6884b4f452a84ac"
                          frameBorder="0" 
                          allowFullScreen={true}
                          className="w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Dashboard 2: Estadísticas del portal de transparencia */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-lg">Estadísticas del portal de transparencia</CardTitle>
                      <CardDescription>
                        Análisis de tráfico y métricas de rendimiento del sitio web
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <iframe 
                          title="Estadisticas WEB"
                          width="100%" 
                          height="100%" 
                          src="https://app.powerbi.com/view?r=eyJrIjoiODlkYzBhZjctMjZjOC00ZGI0LTkzYTQtZTRhZmM4NjU2YzRkIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=cb1fe6884b4f452a84ac"
                          frameBorder="0" 
                          allowFullScreen={true}
                          className="w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Dashboard 3: Mapa de Oficinas */}
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="text-lg">Mapa de Oficinas</CardTitle>
                      <CardDescription>
                        Visualización geográfica de las oficinas y puntos de atención ciudadana
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <iframe 
                          title="Mapa oficinas"
                          width="100%" 
                          height="100%" 
                          src="https://app.powerbi.com/view?r=eyJrIjoiNzA5MTZkYjgtY2JhYS00MWQ4LWFiMTctNGFmMGNmMDMxNWRiIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=5c18373603eff3c5e8c7"
                          frameBorder="0" 
                          allowFullScreen={true}
                          className="w-full h-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Video Demo Section - Only for Project 2 */}
            {projectId === "2" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Demostración del Chatbot</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Explora las capacidades del chatbot administrativo desarrollado para la Diputación Foral de Bizkaia.
                      </p>
                      
                      {/* YouTube Video Player */}
                      <div className="relative w-full overflow-hidden rounded-lg shadow-xl bg-black">
                        <div className="relative" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/v2g-4adlr4k?si=opA0p6OGpMATycP5"
                            title="Demostración del Chatbot Administrativo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                      </div>
                      
                      {/* Key Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-100 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Interacción Natural</h4>
                            <p className="text-sm text-gray-600">Conversación fluida e intuitiva con los usuarios</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-green-100 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Respuestas Precisas</h4>
                            <p className="text-sm text-gray-600">Información municipal y departamental actualizada</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-100 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Configuración Flexible</h4>
                            <p className="text-sm text-gray-600">Adaptable a diferentes consultas y formatos</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-orange-100 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">Rápido y Eficiente</h4>
                            <p className="text-sm text-gray-600">Respuestas inmediatas 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* PowerBI Renovation Section - Only for Project 1 */}
            {projectId === "1" && project.hasRenovation && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Renove PowerBI - Design System Implementation</h2>
                
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Como parte de la evolución de este proyecto, he implementado un completo "Design System" para unificar la apariencia y funcionalidad 
                      de todos los dashboards PowerBI. Esta renovación ha permitido estandarizar colores, tipografías, componentes visuales y patrones de interacción, 
                      creando una experiencia coherente y profesional en todos los informes.
                    </p>
                  </CardContent>
                </Card>
                
                {/* GIFs Grid */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: "Presupuestos", description: "Presupuestos de la Diputación Foral de Bizkaia separados en Ingresos y Gastos", fileName: "Presupuestos" },
                      { name: "Distribución de la Plantilla", description: "Distribución de la plantilla por departamentos y género", fileName: "Distribucion" },
                      { name: "Temas", description: "Análisis de temas sobre los que se consulta en OpenData Bizkaia", fileName: "Temas" },
                      { name: "Visitas y Descargas", description: "Visitas y descargas en OpenData Bizkaia", fileName: "Visitas" },
                      { name: "Solicitudes", description: "Número de solicitudes recibidas", fileName: "Solicitudes" },
                      { name: "Puestos de trabajo", description: "Puestos de trabajo de la Diputación Foral de Bizkaia", fileName: "Puestos" }
                    ].map((gif, index) => (
                      <motion.div
                        key={gif.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="aspect-video bg-muted relative">
                            <img 
                              src={`/images/${gif.fileName}.gif`}
                              alt={`${gif.name} - Transformación PowerBI`}
                              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `
                                  <div class="flex flex-col items-center justify-center h-full text-muted-foreground p-4">
                                    <div class="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-3">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                      </svg>
                                    </div>
                                    <span class="text-sm font-medium">${gif.fileName}.gif</span>
                                    <span class="text-xs text-muted-foreground/70 mt-1">Sube el GIF para visualizar</span>
                                  </div>
                                `;
                              }}
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="text-xs">
                                Antes/Después
                              </Badge>
                            </div>
                          </div>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">{gif.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {gif.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Complete Renovation Report */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Informe Completo del Renove
                    </CardTitle>
                    <CardDescription>
                      Documentación técnica completa del proceso de implementación del Design System
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed">
                        Este informe detalla el proceso completo de renovación de los dashboards PowerBI a través de la implementación de un Design System unificado para la Diputación Foral de Bizkaia. 
                        Incluye un Antes y un Después para ver como han cambiado las visualizaciones y como tienen todos una estructura homogénea.
                      </p>
                    </div>
                    
                    {/* PDF Preview Section */}
                    <div className="relative bg-muted/50 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Renove PowerBI</h3>
                        <p className="text-muted-foreground max-w-md">
                          Documentación completa del Design System implementation
                        </p>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="outline" onClick={handlePreviewRenovePDF}>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            Vista Previa
                          </Button>
                          <Button size="sm" onClick={handleDownloadRenovePDF}>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Descargar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* PDF Report Section - Only for Project 3 */}
            {projectId === "3" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Informe Técnico Completo</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Explora el informe técnico completo con toda la documentación, configuraciones, resultados y recomendaciones desarrolladas durante el proyecto.
                      </p>
                      
                      {/* PDF Carousel Simulation */}
                      <div className="relative bg-muted/50 rounded-lg p-8 min-h-[600px] flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold">Informe de Ciberseguridad</h3>
                          <p className="text-muted-foreground max-w-md">
                            Documentación técnica completa del proyecto bootcamp para Deiviator
                          </p>
                          <div className="flex gap-2 justify-center">
                            <Button size="sm" variant="outline" onClick={handlePreviewCybersecurityPDF}>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Vista Previa
                            </Button>
                            <Button size="sm" onClick={handleDownloadCybersecurityPDF}>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Descargar PDF
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Page indicators */}
                      <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((page) => (
                          <div
                            key={page}
                            className={`w-2 h-2 rounded-full ${
                              page === 1 ? 'bg-primary' : 'bg-muted-foreground/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Kimetz Loroño. Desarrollado con Next.js, TypeScript y Tailwind CSS.
          </p>
          <Button onClick={() => router.push('/')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Portfolio
          </Button>
        </div>
      </footer>
    </div>
  );
}