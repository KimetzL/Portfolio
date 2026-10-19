"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import { 
  ArrowLeft, 
  ArrowRight,
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
  Search,
  Layers,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Download
} from "lucide-react";
import { getProjectById, getProjects } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";
import { KimunDashboardShowcase } from "@/components/kimun-dashboard-showcase";
import { useLanguage } from "@/context/language-context";



const getIcon = (tech: string) => {
  const iconMap: Record<string, React.ReactNode> = {
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
  const { locale } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [portalFilter, setPortalFilter] = useState("all");
  const [comunaFilter, setComunaFilter] = useState("all");
  const [modalidadFilter, setModalidadFilter] = useState("all");

  const sampleOffersEs = [
    { id: "EP-98231", titulo: "Analista Programador / Desarrollador Backend", portal: "Empleos Públicos", empresa: "Hospital Regional de Talca", comuna: "Talca", comunaKey: "talca", modalidad: "Presencial", modalidadKey: "presencial", jornada: "Jornada Completa", sueldo: "$1.450.000 Líquido", fecha: "2026-07-27" },
    { id: "BNE-44120", titulo: "Ingeniero Agroindustrial / Jefe de Planta", portal: "BNE", empresa: "Agroindustrial El Aconcagua S.A.", comuna: "Curicó", comunaKey: "curico", modalidad: "Presencial", modalidadKey: "presencial", jornada: "Jornada Completa", sueldo: "$1.800.000", fecha: "2026-07-26" },
    { id: "GOB-1092", titulo: "Fullstack Developer Python & React", portal: "Get on Board", empresa: "TechTalent Chile", comuna: "Remoto", comunaKey: "remoto", modalidad: "Remoto", modalidadKey: "remoto", jornada: "Jornada Completa", sueldo: "$2.200.000 - $2.600.000", fecha: "2026-07-28" },
    { id: "LAB-77612", titulo: "Enfermero/a Clínico Turno 4T", portal: "Laborum", empresa: "Clínica San Francisco", comuna: "Linares", comunaKey: "linares", modalidad: "Presencial", modalidadKey: "presencial", jornada: "Por Turnos", sueldo: "$1.100.000", fecha: "2026-07-25" },
    { id: "TRAB-5531", titulo: "Contador Auditor Senior", portal: "Trabajando.cl", empresa: "Agrícola Maule Sur Ltda.", comuna: "San Javier", comunaKey: "sanjavier", modalidad: "Híbrido", modalidadKey: "hibrido", jornada: "Jornada Completa", sueldo: "$1.300.000", fecha: "2026-07-26" },
    { id: "CT-88912", titulo: "Técnico Mecánico de Mantenimiento", portal: "ChileTrabajos", empresa: "CMPC Celulosa", comuna: "Constitución", comunaKey: "constitucion", modalidad: "Presencial", modalidadKey: "presencial", jornada: "Jornada Completa", sueldo: "$850.000 Líquido", fecha: "2026-07-27" },
    { id: "TEE-3011", titulo: "Administrativo de Finanzas y Presupuesto", portal: "Trabaja en el Estado", empresa: "Servicio de Salud Maule", comuna: "Talca", comunaKey: "talca", modalidad: "Presencial", modalidadKey: "presencial", jornada: "Jornada Completa", sueldo: "$950.000", fecha: "2026-07-24" },
    { id: "BNE-88219", titulo: "Prevencionista de Riesgos (Sernageomin B)", portal: "BNE", empresa: "Constructora del Centro", comuna: "Cauquenes", comunaKey: "cauquenes", modalidad: "Presencial", modalidadKey: "presencial", jornada: "Jornada Completa", sueldo: "$1.250.000", fecha: "2026-07-27" },
  ];

  const sampleOffersEn = [
    { id: "EP-98231", titulo: "Analyst Programmer / Backend Developer", portal: "Empleos Públicos", empresa: "Hospital Regional de Talca", comuna: "Talca", comunaKey: "talca", modalidad: "On-site", modalidadKey: "presencial", jornada: "Full-Time", sueldo: "$1,450,000 Net CLP", fecha: "2026-07-27" },
    { id: "BNE-44120", titulo: "Agro-industrial Engineer / Plant Manager", portal: "BNE", empresa: "Agroindustrial El Aconcagua S.A.", comuna: "Curicó", comunaKey: "curico", modalidad: "On-site", modalidadKey: "presencial", jornada: "Full-Time", sueldo: "$1,800,000 CLP", fecha: "2026-07-26" },
    { id: "GOB-1092", titulo: "Fullstack Developer Python & React", portal: "Get on Board", empresa: "TechTalent Chile", comuna: "Remote", comunaKey: "remoto", modalidad: "Remote", modalidadKey: "remoto", jornada: "Full-Time", sueldo: "$2,200,000 - $2,600,000 CLP", fecha: "2026-07-28" },
    { id: "LAB-77612", titulo: "Clinical Nurse (Rotational 4T Shift)", portal: "Laborum", empresa: "Clínica San Francisco", comuna: "Linares", comunaKey: "linares", modalidad: "On-site", modalidadKey: "presencial", jornada: "Shift-Based", sueldo: "$1,100,000 CLP", fecha: "2026-07-25" },
    { id: "TRAB-5531", titulo: "Senior Auditor Accountant", portal: "Trabajando.cl", empresa: "Agrícola Maule Sur Ltda.", comuna: "San Javier", comunaKey: "sanjavier", modalidad: "Hybrid", modalidadKey: "hibrido", jornada: "Full-Time", sueldo: "$1,300,000 CLP", fecha: "2026-07-26" },
    { id: "CT-88912", titulo: "Maintenance Mechanical Technician", portal: "ChileTrabajos", empresa: "CMPC Celulosa", comuna: "Constitución", comunaKey: "constitucion", modalidad: "On-site", modalidadKey: "presencial", jornada: "Full-Time", sueldo: "$850,000 Net CLP", fecha: "2026-07-27" },
    { id: "TEE-3011", titulo: "Finance & Budget Administrative Officer", portal: "Trabaja en el Estado", empresa: "Servicio de Salud Maule", comuna: "Talca", comunaKey: "talca", modalidad: "On-site", modalidadKey: "presencial", jornada: "Full-Time", sueldo: "$950,000 CLP", fecha: "2026-07-24" },
    { id: "BNE-88219", titulo: "Occupational Safety Specialist (Sernageomin B)", portal: "BNE", empresa: "Constructora del Centro", comuna: "Cauquenes", comunaKey: "cauquenes", modalidad: "On-site", modalidadKey: "presencial", jornada: "Full-Time", sueldo: "$1,250,000 CLP", fecha: "2026-07-27" },
  ];

  const sampleOffers = locale === "en" ? sampleOffersEn : sampleOffersEs;

  const filteredOffers = sampleOffers.filter((o) => {
    const matchesSearch = !searchQuery || 
      o.titulo.toLowerCase().includes(searchQuery.toLowerCase()) || 
      o.empresa.toLowerCase().includes(searchQuery.toLowerCase()) || 
      o.comuna.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.portal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPortal = portalFilter === "all" || o.portal === portalFilter;
    const matchesComuna = comunaFilter === "all" || o.comunaKey === comunaFilter || o.comuna === comunaFilter;
    const matchesModalidad = modalidadFilter === "all" || o.modalidadKey === modalidadFilter || o.modalidad === modalidadFilter;
    return matchesSearch && matchesPortal && matchesComuna && matchesModalidad;
  });

  const pipelineStepsEs: { [key: number]: { title: string; desc: string; highlights: string[] } } = {
    1: {
      title: "01. Extracción Multi-Fuente (APIs, HTTP & Playwright)",
      desc: "Arquitectura desacoplada que utiliza la técnica óptima según la fuente: REST APIs para BNE y Get on Board, HTTP/lxml de alto rendimiento para Empleos Públicos y ChileTrabajos, y automatización con Playwright para portales con renderizado JS (Trabajando, Laborum).",
      highlights: [
        "User-Agent transparente institucional: IES-CareerBot/1.0",
        "Delays aleatorios éticos de 1s a 3s entre peticiones",
        "Caché local HTTP (cache_http.py) con TTL configurable (4h / 24h)"
      ]
    },
    2: {
      title: "02. Persistencia Incremental & Parada Temprana",
      desc: "Cada oferta extraída se serializa e inserta de forma inmediata al final del CSV individual en disco (mode='a'). Además, si el 100% de las ofertas de una página completa ya existen en la base de datos local, la paginación se aborta inmediatamente.",
      highlights: [
        "Cero pérdida de datos ante interrupciones de red o suspensión del SO",
        "Tiempo de escritura constante sin reescritura de archivos",
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
      desc: "Proceso que consolida todos los CSVs individuales, normaliza los nombres de empresas (removiendo sufijos legales como Ltda/S.A.), agrupa por la tupla (título, empresa, comuna) y conserva la versión del portal de mayor prioridad.",
      highlights: [
        "Procesamiento y deduplicación de +3.300 ofertas en ~4 segundos en memoria",
        "Generación de reportes de auditoría de duplicados y excluidos",
        "Consolidación en ofertas_unificadas.csv con esquema canónico de 17 columnas"
      ]
    }
  };

  const pipelineStepsEn: { [key: number]: { title: string; desc: string; highlights: string[] } } = {
    1: {
      title: "01. Multi-Source Extraction (APIs, HTTP & Playwright)",
      desc: "Decoupled architecture using optimal extraction methods per source: REST APIs for BNE and Get on Board, high-performance HTTP/lxml for Empleos Públicos and ChileTrabajos, and Playwright automation for JS-rendered portals (Trabajando, Laborum).",
      highlights: [
        "Transparent institutional User-Agent: IES-CareerBot/1.0",
        "Ethical random jitter delays (1s to 3s) between requests",
        "Local HTTP caching layer (cache_http.py) with configurable TTL (4h / 24h)"
      ]
    },
    2: {
      title: "02. Incremental Persistence & Early Stopping",
      desc: "Each extracted offer is immediately serialized and appended to individual CSV files on disk (mode='a'). Furthermore, when 100% of the listings on a scraped page already exist in local storage, pagination is terminated early.",
      highlights: [
        "Zero data loss during network hiccups or system suspension",
        "Constant-time disk writes avoiding file rewriting overhead",
        "Incremental scrape runtime slashed from 3 hours to 2-4 minutes"
      ]
    },
    3: {
      title: "03. Transformation & NLP RegEx Engine (extractor_helpers.py)",
      desc: "Centralized regular expression engine parsing unstructured job titles and descriptions to extract explicit salary values, classify workplace modalities (Remote, Hybrid, On-site), and filter strictly across the 30 Maule communes.",
      highlights: [
        "Automated syntactic salary conversion ($1.2M -> $1,200,000 CLP)",
        "Bilingual workplace terminology recognition (WFH, Remote, Presencial)",
        "Strict geographic whitelist for all 30 Maule communes"
      ]
    },
    4: {
      title: "04. In-Memory Fuzzy Deduplication & Unified Output (clean_existing_csvs.py)",
      desc: "Post-processing pipeline that consolidates individual CSVs, normalizes corporate names (stripping legal suffixes like Ltd./S.A.), clusters on (title, company, commune), and retains the highest-priority source record.",
      highlights: [
        "In-memory processing and deduplication of 3,300+ listings in ~4s",
        "Automated generation of audit logs for duplicates and exclusions",
        "Consolidated into ofertas_unificadas.csv with a 17-column canonical schema"
      ]
    }
  };

  const pipelineSteps = locale === "en" ? pipelineStepsEn : pipelineStepsEs;

  const portalMatrixEs = [
    // 7 Portales Activos
    { name: "BNE", motor: "API REST", status: "active", note: "API pública oficial autorizada" },
    { name: "Empleos Públicos", motor: "HTTP / lxml", status: "active", note: "Portal gubernamental público estatal" },
    { name: "Trabaja en el Estado", motor: "ElasticSearch POST", status: "active", note: "Endpoint público optimizado sin renderizado JS" },
    { name: "Trabajando.cl", motor: "Playwright", status: "active", note: "Renderizado headless respetando robots.txt" },
    { name: "Laborum.cl", motor: "Playwright", status: "active", note: "Navegación responsable con delays éticos de 1s a 3s" },
    { name: "ChileTrabajos", motor: "HTTP / BS4", status: "active", note: "Parsing de metadatos JSON-LD estructurados" },
    { name: "Get on Board", motor: "REST API v0", status: "active", note: "Consumo de API REST pública oficial" },
    // 3 Portales Deshabilitados (Redundancia)
    { name: "Buscojobs", motor: "—", status: "disabled", note: "Metabuscador deshabilitado por generar duplicados de portales cubiertos." },
    { name: "Jooble", motor: "—", status: "disabled", note: "Metabuscador deshabilitado que agrega vacantes de terceros ya existentes." },
    { name: "Opcionempleo", motor: "—", status: "disabled", note: "API Careerjet deshabilitada por redundancia en resultados." },
    // 2 Portales Excluidos (Restricción Técnica / Ética)
    { name: "Computrabajo", motor: "—", status: "excluded", note: "AWS WAF bloquea User-Agent institucional; violaría transparencia suplantar navegador (Reglas 2 y 6)." },
    { name: "Indeed", motor: "—", status: "excluded", note: "Cloudflare + Captchas exigen bypasses no permitidos (Regla 6). Exclusión voluntaria." }
  ];

  const portalMatrixEn = [
    // 7 Active Portals
    { name: "BNE", motor: "REST API", status: "active", note: "Authorized official public REST API" },
    { name: "Empleos Públicos", motor: "HTTP / lxml", status: "active", note: "Official state public employment portal" },
    { name: "Trabaja en el Estado", motor: "ElasticSearch POST", status: "active", note: "Optimized public POST endpoint without JS rendering overhead" },
    { name: "Trabajando.cl", motor: "Playwright", status: "active", note: "Headless browser automation strictly complying with robots.txt" },
    { name: "Laborum.cl", motor: "Playwright", status: "active", note: "Responsible scraping with ethical delays between 1s and 3s" },
    { name: "ChileTrabajos", motor: "HTTP / BS4", status: "active", note: "Structured JSON-LD metadata parsing via HTTP" },
    { name: "Get on Board", motor: "REST API v0", status: "active", note: "Official public REST API consumption" },
    // 3 Disabled Portals (Redundancy)
    { name: "Buscojobs", motor: "—", status: "disabled", note: "Meta-search engine disabled to eliminate duplicate postings from covered sources." },
    { name: "Jooble", motor: "—", status: "disabled", note: "Disabled aggregator that scrapes third-party listings already captured." },
    { name: "Opcionempleo", motor: "—", status: "disabled", note: "Careerjet API disabled due to duplicated job results." },
    // 2 Excluded Portals (Technical / Ethical Constraint)
    { name: "Computrabajo", motor: "—", status: "excluded", note: "AWS WAF blocks institutional User-Agent; spoofing browser fingerprint would violate transparency principles (Rules 2 & 6)." },
    { name: "Indeed", motor: "—", status: "excluded", note: "Cloudflare + Captchas require unauthorized bypasses (Rule 6). Voluntary exclusion." }
  ];

  const portalMatrix = locale === "en" ? portalMatrixEn : portalMatrixEs;

  return (
    <div className="space-y-12 mt-12">
      {/* KPI Stat Cards Grid (Compact Layout) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Performance Metrics & Key Indicators" : "Métricas e Indicadores de Rendimiento"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">+3.300</div>
                <div className="text-xs text-muted-foreground font-medium">{locale === "en" ? "Consolidated Postings" : "Vacantes Consolidadas"}</div>
                <div className="text-[10px] text-muted-foreground/70">{locale === "en" ? "Active Maule dataset" : "Dataset activo Maule"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-500 whitespace-nowrap">{locale === "en" ? "7 Sources" : "7 Fuentes"}</div>
                <div className="text-xs text-muted-foreground font-medium">{locale === "en" ? "Integrated Portals" : "Portales Integrados"}</div>
                <div className="text-[10px] text-muted-foreground/70">APIs + HTTP + Playwright</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-purple-500 whitespace-nowrap">{locale === "en" ? "~4 sec" : "~4 seg"}</div>
                <div className="text-xs text-muted-foreground font-medium">{locale === "en" ? "Fuzzy Deduplication" : "Deduplicación Difusa"}</div>
                <div className="text-[10px] text-muted-foreground/70">{locale === "en" ? "In-memory processing" : "Procesamiento en memoria"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-500 whitespace-nowrap">100%</div>
                <div className="text-xs text-muted-foreground font-medium">{locale === "en" ? "Audited Ethical Scraping" : "Scraping Ético Auditado"}</div>
                <div className="text-[10px] text-muted-foreground/70">User-Agent & Robots.txt</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive ETL Pipeline Stepper */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Interactive ETL Pipeline" : "Canalización ETL Interactiva"}</h2>
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
                  <span className="text-xs opacity-70 font-mono">{locale === "en" ? `Step 0${stepNum}` : `Paso 0${stepNum}`}</span>
                  <span className="text-xs font-bold truncate">
                    {stepNum === 1 && (locale === "en" ? "1. Extraction" : "1. Extracción")}
                    {stepNum === 2 && "2. Append & Stop"}
                    {stepNum === 3 && "3. NLP RegEx"}
                    {stepNum === 4 && (locale === "en" ? "4. Deduplication" : "4. Deduplicación")}
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
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{locale === "en" ? "Key points:" : "Puntos clave:"}</span>
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
            <h2 className="text-3xl font-bold">{locale === "en" ? "Unified Dataset Explorer" : "Explorador del Dataset Unificado"}</h2>
            <p className="text-muted-foreground text-sm mt-1">
              {locale === "en"
                ? "Interactive simulation of the consolidated dataset (ofertas_unificadas.csv) for the Maule Region."
                : "Simulador interactivo del dataset consolidado (`ofertas_unificadas.csv`) para la Región del Maule."}
            </p>
          </div>
          <Badge variant="outline" className="w-fit">
            {locale === "en"
              ? `Showing ${filteredOffers.length} of ${sampleOffers.length} representative job postings`
              : `Mostrando ${filteredOffers.length} de ${sampleOffers.length} ofertas representativas`}
          </Badge>
        </div>

        {/* Filters Box */}
        <Card className="mb-6">
          <CardContent className="p-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
              <input
                type="text"
                placeholder={
                  locale === "en"
                    ? "Search by job title, company or commune (e.g., Developer, Hospital, Talca)..."
                    : "Buscar por cargo, empresa o comuna (ej: Programador, Hospital, Talca)..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1">
                  {locale === "en" ? "Portal" : "Portal"}
                </label>
                <select
                  value={portalFilter}
                  onChange={(e) => setPortalFilter(e.target.value)}
                  className="w-full bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">{locale === "en" ? "All portals" : "Todos los portales"}</option>
                  <option value="BNE">BNE (API)</option>
                  <option value="Empleos Públicos">{locale === "en" ? "Public Employment (Empleos Públicos)" : "Empleos Públicos"}</option>
                  <option value="Trabajando.cl">Trabajando.cl</option>
                  <option value="Laborum">Laborum.cl</option>
                  <option value="ChileTrabajos">ChileTrabajos</option>
                  <option value="Get on Board">Get on Board</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1">
                  {locale === "en" ? "Commune / Location" : "Comuna"}
                </label>
                <select
                  value={comunaFilter}
                  onChange={(e) => setComunaFilter(e.target.value)}
                  className="w-full bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">{locale === "en" ? "All communes" : "Todas las comunas"}</option>
                  <option value="talca">Talca</option>
                  <option value="curico">Curicó</option>
                  <option value="linares">Linares</option>
                  <option value="constitucion">Constitución</option>
                  <option value="sanjavier">San Javier</option>
                  <option value="cauquenes">Cauquenes</option>
                  <option value="remoto">{locale === "en" ? "Remote" : "Remoto"}</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1">
                  {locale === "en" ? "Workplace Modality" : "Modalidad"}
                </label>
                <select
                  value={modalidadFilter}
                  onChange={(e) => setModalidadFilter(e.target.value)}
                  className="w-full bg-background border rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="all">{locale === "en" ? "All modalities" : "Todas las modalidades"}</option>
                  <option value="presencial">{locale === "en" ? "On-site" : "Presencial"}</option>
                  <option value="remoto">{locale === "en" ? "Remote" : "Remoto"}</option>
                  <option value="hibrido">{locale === "en" ? "Hybrid" : "Híbrido"}</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOffers.length === 0 ? (
            <div className="col-span-2 text-center py-12 text-muted-foreground border rounded-lg bg-card">
              {locale === "en"
                ? "No job postings found matching the selected filters."
                : "No se encontraron vacantes con los filtros seleccionados."}
            </div>
          ) : (
            filteredOffers.map((offer) => (
              <Card key={offer.id} className="hover:border-primary/40 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-bold line-clamp-1">{offer.titulo}</CardTitle>
                    <Badge variant="secondary" className="text-[10px] shrink-0">{offer.portal}</Badge>
                  </div>
                  <CardDescription className="text-xs font-semibold text-purple-700 dark:text-purple-400">
                    🏢 {offer.empresa}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline" className="text-[11px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30">
                      💰 {offer.sueldo}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30">
                      📍 {offer.comuna}
                    </Badge>
                    <Badge variant="outline" className="text-[11px] bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30">
                      💻 {offer.modalidad}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Ethics & Governance Sources Matrix (All 12 Portals) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">
          {locale === "en" ? "Ethical Scraping & Sources Matrix (12 Portals)" : "Matriz de Scraping Ético y Fuentes (12 Portales)"}
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              {locale === "en" ? "Sources Status & Regulatory Compliance" : "Estado y Cumplimiento Normativo de Fuentes"}
            </CardTitle>
            <CardDescription>
              {locale === "en" ? "Mandatory Transparent User-Agent:" : "User-Agent Transparente Obligatorio:"} <code>IES-CareerBot/1.0; (+http://www.cftsanagustin.cl)</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/50 text-muted-foreground border-b">
                <tr>
                  <th className="p-3">{locale === "en" ? "Portal" : "Portal"}</th>
                  <th className="p-3">{locale === "en" ? "Technical Engine" : "Motor Técnico"}</th>
                  <th className="p-3">{locale === "en" ? "Status" : "Estado"}</th>
                  <th className="p-3">{locale === "en" ? "Ethical Criterion / Data Governance" : "Criterio Ético / Gobernanza de Datos"}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {portalMatrix.map((item) => (
                  <tr 
                    key={item.name} 
                    className={
                      item.status === "excluded" 
                        ? "bg-rose-500/10 dark:bg-rose-500/5" 
                        : item.status === "disabled" 
                        ? "bg-amber-500/10 dark:bg-amber-500/5" 
                        : ""
                    }
                  >
                    <td className={`p-3 font-bold ${item.status !== "active" ? "opacity-80" : ""}`}>{item.name}</td>
                    <td className={`p-3 ${item.status !== "active" ? "opacity-80" : ""}`}>{item.motor}</td>
                    <td className="p-3">
                      {item.status === "active" && (
                        <Badge className="bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/30 border-0 font-semibold">
                          {locale === "en" ? "Active" : "Activo"}
                        </Badge>
                      )}
                      {item.status === "excluded" && (
                        <Badge className="bg-rose-600 text-white dark:bg-rose-900/80 dark:text-rose-200 border-0 font-semibold">
                          {locale === "en" ? "Excluded" : "Excluido"}
                        </Badge>
                      )}
                      {item.status === "disabled" && (
                        <Badge variant="outline" className="bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-500/50 dark:border-amber-500/30 font-semibold">
                          {locale === "en" ? "Disabled" : "Deshabilitado"}
                        </Badge>
                      )}
                    </td>
                    <td className={`p-3 ${
                      item.status === "excluded" 
                        ? "text-rose-800 dark:text-rose-300 font-medium" 
                        : item.status === "disabled" 
                        ? "text-amber-900 dark:text-amber-200/90 font-medium" 
                        : "text-muted-foreground"
                    }`}>
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ChatbotShowcaseSection() {
  const { locale } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  const pipelineStepsEs: { [key: number]: { title: string; desc: string; highlights: string[] } } = {
    1: {
      title: "01. Búsqueda Difusa & Normalización (RapidFuzz & Pandas)",
      desc: "Limpieza del texto introducido por el ciudadano, filtrado de caracteres especiales y aplicación de algoritmos de coincidencia sintáctica difusa (fuzzy matching) para tolerar erratas o variaciones en nombres de ayuntamientos y trámites.",
      highlights: [
        "Tolerancia a erratas tipográficas ciudadanas",
        "Normalización sintáctica inmediata en DataFrames",
        "Filtrado previo a la búsqueda semántica"
      ]
    },
    2: {
      title: "02. Indexación & Recuperación Vectorial (FAISS)",
      desc: "Conversión de consultas a embeddings vectoriales y búsqueda por distancia en el índice FAISS en memoria, recuperando instantáneamente los trámites y departamentos administrativamente más afines.",
      highlights: [
        "Búsqueda vectorial en milisegundos en memoria",
        "Indexación de trámites y departamentos de Bizkaia",
        "Recuperación k-NN de alta precisión semántica"
      ]
    },
    3: {
      title: "03. Clasificación Contextual (Transformers & Intent Detection)",
      desc: "Modelo de lenguaje enfocado en comprender la intención del usuario y clasificar automáticamente si la pregunta se refiere a un ayuntamiento específico, un departamento o un trámite administrativo.",
      highlights: [
        "Desambiguación inteligente del contexto administrativo",
        "Clasificación jerárquica: Ayuntamiento vs Dpto vs Trámite",
        "Estructuración de intents con contexto enriquecido"
      ]
    },
    4: {
      title: "04. Despliegue Local & Interfaz Gráfica (Gradio & Python)",
      desc: "Interfaz conversacional interactiva desarrollada en Gradio. El proyecto incluye un script instalador autónomo que prepara el entorno virtual Python y descarga los modelos para ejecutarse 100% offline.",
      highlights: [
        "Interfaz web interactiva conversacional en Gradio",
        "Script de instalación automatizado para ejecución local",
        "Privacidad total de datos sin dependencia de la nube"
      ]
    }
  };

  const pipelineStepsEn: { [key: number]: { title: string; desc: string; highlights: string[] } } = {
    1: {
      title: "01. Fuzzy Matching & Normalization (RapidFuzz & Pandas)",
      desc: "Citizen query text normalization, special character stripping, and fuzzy syntactic matching to handle typos, slang, and naming variations across municipalities and procedures.",
      highlights: [
        "Typo and spelling error tolerance for citizen queries",
        "Instant vector-ready DataFrame string preprocessing",
        "Pre-filtering stage prior to dense semantic vector search"
      ]
    },
    2: {
      title: "02. Vector Indexing & Semantic Retrieval (FAISS)",
      desc: "Converts queries into dense vector embeddings and performs L2/cosine distance lookups against an in-memory FAISS index, instantly retrieving top-k related municipal departments and procedures.",
      highlights: [
        "Sub-millisecond in-memory vector similarity searches",
        "Indexed municipal catalog of Bizkaia procedures and services",
        "High-precision semantic k-NN candidate retrieval"
      ]
    },
    3: {
      title: "03. Contextual Intent Classification (Transformers)",
      desc: "Specialized language model pipeline assessing user intent to accurately classify whether the inquiry targets a town hall, administrative division, or civic procedure.",
      highlights: [
        "Intelligent administrative context disambiguation",
        "Hierarchical classification: Municipality vs Department vs Procedure",
        "Enriched query context payload generation"
      ]
    },
    4: {
      title: "04. Local Deployment & Web UI (Gradio & Python)",
      desc: "Interactive conversational interface built with Gradio. Includes a self-contained installation script that automates virtual environment setup and model pre-loading for 100% offline execution.",
      highlights: [
        "Gradio conversational web application",
        "One-click automated setup script for local execution",
        "Absolute data privacy with zero cloud dependencies"
      ]
    }
  };

  const pipelineSteps = locale === "en" ? pipelineStepsEn : pipelineStepsEs;

  return (
    <div className="space-y-12 mb-12">
      {/* Metric Stat Cards Grid (A) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Project Metrics & Indicators" : "Métricas e Indicadores del Proyecto"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="Motor NLP - Clasificación Contextual con Transformers">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-primary leading-tight truncate">{locale === "en" ? "NLP Engine" : "Motor NLP"}</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Contextual Classification" : "Clasificación Contextual"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Transformers & Intent Detection</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="Búsqueda FAISS - Búsqueda Vectorial Ultra-Rápida">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-blue-500 leading-tight truncate">{locale === "en" ? "FAISS Search" : "Búsqueda FAISS"}</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Vector Indexing" : "Indexación Vectorial"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Embeddings for Services & Dpts" : "Embeddings de Trámites & Dptos"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                <Search className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="RapidFuzz - Coincidencia Difusa y Tolerancia a Erratas">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-purple-500 leading-tight truncate">RapidFuzz</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Fuzzy Matching" : "Coincidencia Difusa"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Citizen Typo Tolerance" : "Tolerancia a Erratas Ciudadanas"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="100% Local - Ejecución Offline con Gradio e Instalador Python">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-emerald-500 leading-tight truncate">100% Local</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Offline Execution" : "Ejecución Offline"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Gradio UI & Python Setup" : "Interfaz Gradio & Python Setup"}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive AI Pipeline Stepper (C) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Artificial Intelligence Pipeline" : "Canalización de Inteligencia Artificial"}</h2>
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
                  <span className="text-xs opacity-70 font-mono">{locale === "en" ? `Step 0${stepNum}` : `Paso 0${stepNum}`}</span>
                  <span className="text-xs font-bold truncate">
                    {stepNum === 1 && (locale === "en" ? "1. Fuzzy Logic" : "1. Lógica Difusa")}
                    {stepNum === 2 && (locale === "en" ? "2. Vector FAISS" : "2. FAISS Vectorial")}
                    {stepNum === 3 && "3. Transformers"}
                    {stepNum === 4 && "4. Gradio & Local"}
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
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{locale === "en" ? "Key points:" : "Puntos clave:"}</span>
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
    </div>
  );
}

function PowerBIDashboardsSection() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState(1);

  const dashboards = [
    {
      id: 1,
      title: locale === "en" ? "Communications, Inquiries, Complaints and Suggestions" : "Comunicaciones, Consultas, Quejas y Sugerencias",
      description: locale === "en" ? "Citizen communications tracking system and inquiry management" : "Sistema de seguimiento de comunicaciones ciudadanas y gestión de solicitudes",
      src: "https://app.powerbi.com/view?r=eyJrIjoiNGIwNWM4MjEtMjJmZi00ZDJlLTg2N2EtNjQzMjhhYmIwNmZiIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=cb1fe6884b4f452a84ac"
    },
    {
      id: 2,
      title: locale === "en" ? "Transparency Portal Statistics" : "Estadísticas del portal de transparencia",
      description: locale === "en" ? "Traffic analytics and web performance metrics for the Gardentasuna portal" : "Análisis de tráfico y métricas de rendimiento del sitio web Gardentasuna",
      src: "https://app.powerbi.com/view?r=eyJrIjoiODlkYzBhZjctMjZjOC00ZGI0LTkzYTQtZTRhZmM4NjU2YzRkIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=cb1fe6884b4f452a84ac"
    },
    {
      id: 3,
      title: locale === "en" ? "Citizen Service Centers & Offices Map" : "Mapa de Oficinas y Atención Ciudadana",
      description: locale === "en" ? "Interactive geographical visualization of citizen assistance offices and points of contact" : "Visualización geográfica interactiva de las oficinas y puntos de atención",
      src: "https://app.powerbi.com/view?r=eyJrIjoiNzA5MTZkYjgtY2JhYS00MWQ4LWFiMTctNGFmMGNmMDMxNWRiIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=5c18373603eff3c5e8c7"
    }
  ];

  const currentDashboard = dashboards.find((d) => d.id === activeTab) || dashboards[0];

  return (
    <div className="space-y-12">
      {/* Metric Stat Cards Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Project Metrics & Indicators" : "Métricas e Indicadores del Proyecto"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="min-w-0" title="3 Dashboards Interactivos en Vivo (Comunicaciones, Web y Mapa)">
                <div className="text-base sm:text-lg xl:text-xl font-bold text-primary leading-tight whitespace-nowrap">3 Dashboards</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Interactive Live" : "Interactivos en Vivo"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Communications, Web & Map" : "Comunicaciones, Web y Mapa"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0" title="+15 Informes Renovados (Estandarización Gardentasuna)">
                <div className="text-base sm:text-lg xl:text-xl font-bold text-blue-500 leading-tight whitespace-nowrap">{locale === "en" ? "+15 Reports" : "+15 Informes"}</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Redesigned Dashboards" : "Diseño Renovado"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Gardentasuna Standardization" : "Estandarización Gardentasuna"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="min-w-0" title="100% Datos Abiertos DFB (Open Data Bizkaia)">
                <div className="text-base sm:text-lg xl:text-xl font-bold text-purple-500 leading-tight whitespace-nowrap">100%</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Bizkaia Open Data" : "Datos Abiertos DFB"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Open Data Bizkaia</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="min-w-0" title="Design System - Usabilidad Unificada (Coherencia visual y navegación limpia)">
                <div className="text-base sm:text-lg xl:text-xl font-bold text-emerald-500 leading-tight whitespace-nowrap">Design System</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Unified Usability" : "Usabilidad Unificada"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Visual consistency & UX" : "Coherencia visual & UX"}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Live Selector Tabs */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold">{locale === "en" ? "Interactive Live Dashboards" : "Dashboards Interactivos en Vivo"}</h2>
            <p className="text-muted-foreground text-sm mt-1">
              {locale === "en" ? "Select one of the embedded dynamic panels to explore the data in real time." : "Selecciona uno de los paneles dinámicos embebidos para explorar los datos en tiempo real."}
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(currentDashboard.src, '_blank')}
            className="w-fit shrink-0"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {locale === "en" ? "Open in Power BI" : "Abrir en Power BI"}
          </Button>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30 border-b pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {dashboards.map((dash) => (
                <Button
                  key={dash.id}
                  variant={activeTab === dash.id ? "default" : "outline"}
                  onClick={() => setActiveTab(dash.id)}
                  className="flex flex-col items-start h-auto py-3 px-4 text-left justify-start"
                >
                  <span className="text-[10px] opacity-75 uppercase font-mono tracking-wider">Dashboard 0{dash.id}</span>
                  <span className="text-xs font-bold truncate w-full">
                    {dash.id === 1 && (locale === "en" ? "Communications & Complaints" : "Comunicaciones & Quejas")}
                    {dash.id === 2 && (locale === "en" ? "Web Statistics" : "Estadísticas Web")}
                    {dash.id === 3 && (locale === "en" ? "Offices Map" : "Mapa de Oficinas")}
                  </span>
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 border-b bg-muted/10">
              <h3 className="font-bold text-base">{currentDashboard.title}</h3>
              <p className="text-xs text-muted-foreground">{currentDashboard.description}</p>
            </div>
            <div className="aspect-video bg-muted flex items-center justify-center relative">
              <iframe 
                key={currentDashboard.id}
                title={currentDashboard.title}
                width="100%" 
                height="100%" 
                src={currentDashboard.src}
                frameBorder="0" 
                allowFullScreen={true}
                className="w-full h-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KimunShowcaseSection() {
  const { locale } = useLanguage();
  const [activeWizardStep, setActiveWizardStep] = useState(1);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const zoomScrollRef = useRef<HTMLDivElement>(null);

  const wizardSteps: {
    [key: number]: {
      title: string;
      subtitle: string;
      desc: string;
      image: string;
      highlights: string[];
      details: string[];
    };
  } = {
    1: {
      title: locale === "en" ? "Step 1: General Information" : "Paso 1: Datos Generales",
      subtitle: locale === "en" ? "Initiative identification and institutional setup" : "Identificación y configuración básica de la propuesta",
      desc: locale === "en"
        ? "Official project title registration, Lead Directorate (Community Engagement - VcM or Innovation), Delivery Mode (In-Person, Online or Hybrid), participating campuses, Mechanism, and Primary Executing Unit."
        : "Registro del nombre oficial del proyecto, selección de Dirección Responsable (Vinculación con el Medio o Innovación), Modalidad de ejecución (Presencial, Online o Mixta), Sedes involucradas, Mecanismo y Unidad Ejecutora titular.",
      image: "/images/kimun/Pasos/Kimun 1.jpeg",
      highlights: locale === "en"
        ? [
            "Lead Directorate: VcM or Innovation",
            "Delivery Mode: In-Person, Online, or Hybrid",
            "Campus assignment, mechanisms & executing unit"
          ]
        : [
            "Dirección Responsable: VcM o Innovación",
            "Modalidad: Presencial, Online o Mixta",
            "Asignación de Sedes, Mecanismos y Unidad Ejecutora"
          ],
      details: locale === "en"
        ? [
            "Required field control with client & server-side validation",
            "Automatic creator attribution and formulation cycle tracking",
            "Clear institutional framework & strategic line definition"
          ]
        : [
            "Control de campos obligatorios con validación en cliente y servidor",
            "Asignación automática del usuario creador y ciclo de formulación",
            "Definición clara del marco institucional y líneas estratégicas"
          ]
    },
    2: {
      title: locale === "en" ? "Step 2: Additional Data & Cascade" : "Paso 2: Datos Adicionales",
      subtitle: locale === "en" ? "Thematic contribution and territorial breakdown" : "Contribución temática y localización territorial oficial",
      desc: locale === "en"
        ? "Institutional Program selection, Action Areas, Strategic Lines, Internal vs External impact categorization, and territorial hierarchy across Chile's official administrative cascade (Region, Province, Commune)."
        : "Selección del Programa institucional, Ámbitos de Acción, Líneas de Acción, categorización de Impacto Interno vs. Impacto Externo, y desglose de ubicación geográfica en cascada oficial de Chile (Región, Provincia y Comuna).",
      image: "/images/kimun/Pasos/Kimun 2.jpeg",
      highlights: locale === "en"
        ? [
            "Chile's official territorial cascade (Region, Province, Commune)",
            "Dual impact assessment: Internal (academic) & External (social)",
            "Institutional alignment with strategic programs and focus areas"
          ]
        : [
            "Cascada geográfica oficial de Chile (Región, Provincia y Comuna)",
            "Doble evaluación: Impacto Interno (académico) e Impacto Externo (social)",
            "Alineación con Programas y Ámbitos de Acción institucionales"
          ],
      details: locale === "en"
        ? [
            "Dynamic commune loading via AJAX / REST endpoints",
            "Quantifiable impact on students and regional communities",
            "Geographic standardization for territorial auditing"
          ]
        : [
            "Carga dinámica de comunas mediante endpoints AJAX",
            "Desglose de impacto medible en estudiantes y comunidad regional",
            "Normalización geográfica para reportes territoriales"
          ]
    },
    3: {
      title: locale === "en" ? "Step 3: SDGs (UN 2030 Agenda)" : "Paso 3: ODS (Agenda 2030 ONU)",
      subtitle: locale === "en" ? "Direct alignment with Sustainable Development Goals" : "Vinculación directa con Objetivos de Desarrollo Sostenible",
      desc: locale === "en"
        ? "Interactive matrix featuring the 17 United Nations Sustainable Development Goals (SDGs). Selecting each goal reveals a panel to assign specific quantitative targets and indicators."
        : "Matriz interactiva con los 17 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas. Al seleccionar cada objetivo, se despliega un panel para marcar metas e indicadores cuantitativos específicos.",
      image: "/images/kimun/Pasos/Kimun 3.jpeg",
      highlights: locale === "en"
        ? [
            "Interactive 17 Sustainable Development Goals matrix",
            "Goal-specific indicator & quantitative target selection",
            "Institutional contribution metrics toward Agenda 2030"
          ]
        : [
            "Matriz interactiva de los 17 Objetivos de Desarrollo Sostenible",
            "Selección de metas e indicadores específicos por objetivo",
            "Cuantificación del aporte institucional a la Agenda 2030"
          ],
      details: locale === "en"
        ? [
            "Many-to-Many relations persisted in PostgreSQL pivot tables",
            "Aggregated impact metrics for institutional accountability",
            "Audit filters categorized by global sustainability goals"
          ]
        : [
            "Relaciones M2M persistidas en tablas pivot de PostgreSQL",
            "Métricas de contribución global para memorias institucionales",
            "Filtros de auditoría basados en objetivos globales"
          ]
    },
    4: {
      title: locale === "en" ? "Step 4: Participants & Deliverables" : "Paso 4: Participantes, Asistentes y Productos",
      subtitle: locale === "en" ? "Quantifying human capital, stakeholders and deliverables" : "Cuantificación del ecosistema humano y entregables",
      desc: locale === "en"
        ? "Tracking and accounting for internal participants (CFT students, faculty, executives), external community and enterprise partners, estimated attendee volume, and tangible project deliverables."
        : "Registro y conteo de participantes internos (estudiantes de carreras del CFT, directivos, docentes), socios comunitarios o empresariales externos, estimación de asistentes y definición de productos o entregables tangibles.",
      image: "/images/kimun/Pasos/Kimun 4.jpeg",
      highlights: locale === "en"
        ? [
            "CFT San Agustín students, faculty and academic staff",
            "Community partners, local enterprises and beneficiaries",
            "Catalog and definition of tangible expected deliverables"
          ]
        : [
            "Estudiantes, docentes y directivos del CFT San Agustín",
            "Socios comunitarios, empresas y beneficiarios externos",
            "Definición y catálogo de productos tangibles esperados"
          ],
      details: locale === "en"
        ? [
            "Faculty hour tracking and workload dedication logs",
            "Nominal and aggregate beneficiary record keeping",
            "Curricular alignment with academic degrees and modules"
          ]
        : [
            "Seguimiento de horas y dedicación del personal",
            "Registro nominal y agregado de beneficiarios",
            "Vinculación curricular con carreras y módulos formativos"
          ]
    },
    5: {
      title: locale === "en" ? "Step 5: Resources & Budget" : "Paso 5: Recursos y Presupuesto",
      subtitle: locale === "en" ? "Economic planning and funding source breakdown" : "Planificación económica y fuentes de financiamiento",
      desc: locale === "en"
        ? "Granular financial breakdown of direct estimated costs, internal institutional funding, third-party and external grants, and economic valuation of contributed assets and infrastructure."
        : "Desglose financiero detallado de costos estimados directos, financiamiento institucional interno, fondos de terceros o fuentes externas y valorización económica de recursos aportados.",
      image: "/images/kimun/Pasos/Kimun 5.jpeg",
      highlights: locale === "en"
        ? [
            "Estimated budget and operational cost breakdown",
            "Institutional funding vs external grants & third parties",
            "Economic valuation of institutional infrastructure & hours"
          ]
        : [
            "Presupuesto estimado y costos operacionales",
            "Financiamiento institucional vs. fondos externos",
            "Valorización económica de recursos e infraestructura"
          ],
      details: locale === "en"
        ? [
            "Automated balance calculation preventing budget deficits",
            "Itemized cost categories with financial justifications",
            "Structured export for accounting and financial compliance"
          ]
        : [
            "Cálculo automático de balances presupuestarios",
            "Desglose por ítems de gasto y justificación financiera",
            "Exportación estructurada a plantillas contables"
          ]
    },
    6: {
      title: locale === "en" ? "Step 6: Evidences & Submission" : "Paso 6: Evidencias y Guardado Final",
      subtitle: locale === "en" ? "Data persistence, traceability and document repository" : "Almacenamiento, trazabilidad y gestión documental",
      desc: locale === "en"
        ? "Final persistence of the initiative in the PostgreSQL database. Once registered, the platform enables uploading supporting documentation (minutes, agreements, attendance sheets, certificates, photos) and submission for supervisory approval."
        : "Cierre y persistencia de la propuesta en base de datos. Una vez almacenada, la plataforma permite gestionar el repositorio de evidencias documentales adjuntas (actas, convenios, listas de asistencia, certificados y fotografías).",
      image: "/images/kimun/Pasos/Kimun 6.jpeg",
      highlights: locale === "en"
        ? [
            "Full initiative persistence in PostgreSQL 16 database",
            "Document management for verifiable evidence (PDFs, logs)",
            "MIME type and payload size validation for security"
          ]
        : [
            "Persistencia íntegra de la propuesta en PostgreSQL",
            "Gestión documental de evidencias (PDF, actas, convenios)",
            "Validación MIME y de tamaño de archivos para máxima seguridad"
          ],
      details: locale === "en"
        ? [
            "Immutable event logging in audit trail history",
            "Automatic generation of official initiative summary sheet",
            "Instant dispatch to supervisor review and feedback cycle"
          ]
        : [
            "Registro inmutable en el historial de trazabilidad (Logs)",
            "Generación automática de ficha de la propuesta",
            "Disponibilidad inmediata para el envío a revisión del supervisor"
          ]
    }
  };

  const handlePrevStep = useCallback(() => {
    setActiveWizardStep((prev) => (prev === 1 ? 6 : prev - 1));
  }, []);

  const handleNextStep = useCallback(() => {
    setActiveWizardStep((prev) => (prev === 6 ? 1 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomOpen(false);
      } else if (isZoomOpen && e.key === "ArrowLeft") {
        handlePrevStep();
      } else if (isZoomOpen && e.key === "ArrowRight") {
        handleNextStep();
      }
    };

    if (isZoomOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomOpen, handlePrevStep, handleNextStep]);

  const currentStep = wizardSteps[activeWizardStep];

  return (
    <div className="space-y-12 mb-12">
      {/* Metric Stat Cards Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Kimün Technical Metrics & Indicators" : "Métricas e Indicadores Técnicos de Kimün"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title={locale === "en" ? "4 RBAC Roles - Admin, Supervisor, Data Entry and Contributor" : "4 Roles RBAC - Admin, Supervisor, Digitador y Colaborador"}>
                <div className="text-sm sm:text-base xl:text-lg font-bold text-primary leading-tight truncate">4 Roles RBAC</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Access Control" : "Control de Acceso"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "In-memory cache (1 query/req)" : "Caché en memoria (1 query/req)"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title={locale === "en" ? "6-Step Wizard - Structured Formulation with Validation" : "Wizard en 6 Pasos - Formulación Estructurada con Validación"}>
                <div className="text-sm sm:text-base xl:text-lg font-bold text-blue-500 leading-tight truncate">{locale === "en" ? "6-Step Wizard" : "6 Pasos Wizard"}</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Guided Formulation" : "Formulación Guiada"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "SDGs, Communes & Evidence" : "ODS, Comunas y Evidencias"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title={locale === "en" ? "21+ Relational Models - PostgreSQL 16 & Eloquent Scopes" : "+21 Modelos Relacionales - PostgreSQL 16 & Eloquent Scopes"}>
                <div className="text-sm sm:text-base xl:text-lg font-bold text-purple-500 leading-tight truncate">+21 {locale === "en" ? "Models" : "Modelos"}</div>
                <div className="text-xs text-muted-foreground font-medium truncate">PostgreSQL 16</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">{locale === "en" ? "Chilean Geography & SDG Targets" : "Geografía Chile & Metas ODS"}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title={locale === "en" ? "Docker Compose - PHP 8.3 FPM, Nginx and PostgreSQL" : "Docker Compose - PHP 8.3 FPM, Nginx y PostgreSQL"}>
                <div className="text-sm sm:text-base xl:text-lg font-bold text-emerald-500 leading-tight truncate">Docker Stack</div>
                <div className="text-xs text-muted-foreground font-medium truncate">{locale === "en" ? "Institutional Intranet" : "Intranet CFT"}</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">PHP 8.3 + Nginx + Postgres</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* Interactive 6-Step Wizard Stepper */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold">
              {locale === "en" ? "Official 6-Step Wizard Form" : "Formulario Wizard en 6 Pasos Oficiales"}
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              {locale === "en"
                ? "Explore the sequential workflow and real interface captures used by collaborators to submit initiatives."
                : "Explora la secuencia interactiva y las capturas reales con las que los colaboradores formulan propuestas en la plataforma."}
            </p>
          </div>
        </div>

        <Card className="overflow-hidden border-border/80 shadow-md">
          <CardHeader className="bg-muted/30 border-b pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((stepNum) => (
                <Button
                  key={stepNum}
                  variant={activeWizardStep === stepNum ? "default" : "outline"}
                  onClick={() => setActiveWizardStep(stepNum)}
                  className="flex flex-col items-start h-auto py-2.5 px-3 text-left justify-start transition-all"
                >
                  <span className="text-[10px] opacity-75 uppercase font-mono tracking-wider">
                    {locale === "en" ? `Step 0${stepNum}` : `Paso 0${stepNum}`}
                  </span>
                  <span className="text-xs font-bold truncate w-full">
                    {stepNum === 1 && (locale === "en" ? "General Data" : "Datos Generales")}
                    {stepNum === 2 && (locale === "en" ? "Additional Data" : "Datos Adicionales")}
                    {stepNum === 3 && (locale === "en" ? "SDGs (ODS)" : "ODS")}
                    {stepNum === 4 && (locale === "en" ? "Participants" : "Participantes")}
                    {stepNum === 5 && (locale === "en" ? "Resources" : "Recursos")}
                    {stepNum === 6 && (locale === "en" ? "Evidences" : "Evidencias")}
                  </span>
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                  {locale === "en" ? `Stage 0${activeWizardStep} of 06` : `Etapa 0${activeWizardStep} de 06`}
                </div>
                <h3 className="text-xl font-bold text-foreground">{currentStep.title}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{currentStep.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{currentStep.desc}</p>
              </div>

              {/* Interactive Window Mockup Frame with Real Screenshot */}
              <div className="rounded-xl border border-border/80 overflow-hidden shadow-lg bg-card">
                {/* Browser-like Header Bar with Controls */}
                <div className="bg-muted/80 border-b border-border/70 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <div className="flex items-center ml-2 px-3 py-1 rounded-md bg-background/80 text-[11px] font-mono text-muted-foreground border border-border/50">
                      <span>cftsanagustin.cl/kimun/iniciativas/crear#paso-{activeWizardStep}</span>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => setIsZoomOpen(true)}
                      className="h-8 text-xs flex items-center gap-1.5 shadow-sm"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      {locale === "en" ? "Inspect Fullscreen" : "Inspeccionar Pantalla Completa"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="h-8 text-xs flex items-center gap-1.5"
                    >
                      <a href={currentStep.image} target="_blank" rel="noopener noreferrer" download>
                        <Download className="w-3.5 h-3.5" />
                        {locale === "en" ? "Download HD" : "Descargar HD"}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Screenshot Image Container with hover zoom prompt */}
                <div
                  className="relative group cursor-pointer overflow-hidden bg-muted/20"
                  onClick={() => setIsZoomOpen(true)}
                  title={locale === "en" ? "Click to expand image" : "Haz clic para ampliar la captura"}
                >
                  <div className="relative w-full max-h-[520px] overflow-hidden flex items-center justify-center bg-black/5 dark:bg-black/40">
                    <Image
                      src={currentStep.image}
                      alt={currentStep.title}
                      width={1763}
                      height={1200}
                      className="w-full h-auto object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      priority={activeWizardStep === 1}
                    />
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/25 transition-colors flex items-center justify-center pointer-events-none">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 text-foreground px-4 py-2 rounded-full text-xs font-medium shadow-xl backdrop-blur-xs flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-primary" />
                      {locale === "en" ? "Click to view full screenshot" : "Haz clic para ver captura completa"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights & Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-muted/40 border border-border/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {locale === "en" ? "Key Stage Highlights" : "Puntos Clave del Paso"}
                  </h4>
                  <ul className="space-y-2">
                    {currentStep.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-muted/40 border border-border/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-amber-500" />
                    {locale === "en" ? "Business Logic & Rules" : "Lógica y Reglas de Negocio"}
                  </h4>
                  <ul className="space-y-2">
                    {currentStep.details.map((item, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lightbox / Fullscreen Modal for Wizard Screenshots */}
      <AnimatePresence>
        {isZoomOpen && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setIsZoomOpen(false)}
          >
            {/* Modal Header */}
            <div
              className="w-full max-w-6xl flex items-center justify-between gap-3 mb-2 px-2 shrink-0 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 min-w-0">
                <Badge variant="secondary" className="text-xs py-0.5 px-2 bg-primary/10 text-primary shrink-0">
                  {locale === "en" ? `Step 0${activeWizardStep}` : `Paso 0${activeWizardStep}`}
                </Badge>
                <span className="font-bold text-sm text-foreground truncate">
                  {currentStep.title}
                </span>
                <span className="text-xs text-muted-foreground hidden md:inline truncate">
                  ({currentStep.subtitle})
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handlePrevStep}
                  className="h-8 w-8 text-xs"
                  title={locale === "en" ? "Previous step (←)" : "Paso anterior (←)"}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleNextStep}
                  className="h-8 w-8 text-xs"
                  title={locale === "en" ? "Next step (→)" : "Siguiente paso (→)"}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="text-xs hidden md:inline-flex"
                >
                  <a href={currentStep.image} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    {locale === "en" ? "Original HD" : "Original HD"}
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsZoomOpen(false)}
                  className="h-8 w-8 p-0 hover:bg-muted text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Scrollable Zoom Image Container */}
            <div
              className="relative w-full max-w-6xl flex-1 min-h-0 rounded-xl border border-border/40 shadow-2xl bg-card/70 flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Prev Button (Left) */}
              <Button
                variant="secondary"
                size="icon"
                onClick={handlePrevStep}
                className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-background/85 hover:bg-background text-foreground shadow-2xl border border-border/70 hidden sm:flex items-center justify-center transition-all hover:scale-110 backdrop-blur-md"
                title={locale === "en" ? "Previous step (←)" : "Paso anterior (←)"}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Floating Next Button (Right) */}
              <Button
                variant="secondary"
                size="icon"
                onClick={handleNextStep}
                className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-background/85 hover:bg-background text-foreground shadow-2xl border border-border/70 hidden sm:flex items-center justify-center transition-all hover:scale-110 backdrop-blur-md"
                title={locale === "en" ? "Next step (→)" : "Siguiente paso (→)"}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Scrollable View for full resolution */}
              <div
                ref={zoomScrollRef}
                className="w-full h-full overflow-y-auto p-1.5 sm:p-2 scroll-smooth"
              >
                <Image
                  key={activeWizardStep}
                  src={currentStep.image}
                  alt={currentStep.title}
                  width={1763}
                  height={1500}
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="w-full h-auto object-cover object-top rounded-lg shadow-sm"
                />
              </div>
            </div>

            {/* Bottom Controls: Step Selectors & Shortcuts */}
            <div
              className="flex flex-col items-center gap-1 mt-2 shrink-0 z-30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-center gap-1.5 bg-background/80 backdrop-blur-xs p-1.5 rounded-full border border-border/60 shadow-lg">
                {[1, 2, 3, 4, 5, 6].map((stepNum) => (
                  <Button
                    key={stepNum}
                    size="sm"
                    variant={activeWizardStep === stepNum ? "default" : "ghost"}
                    onClick={() => setActiveWizardStep(stepNum)}
                    className="h-7 text-xs px-2.5 rounded-full"
                  >
                    {locale === "en" ? `Step 0${stepNum}` : `Paso 0${stepNum}`}
                  </Button>
                ))}
              </div>
              <span className="text-[11px] text-muted-foreground/80 font-mono hidden sm:inline">
                {locale === "en"
                  ? "← → arrow keys to switch steps · Esc to close · scroll to inspect full height"
                  : "Flechas ← → para cambiar de paso · Esc para cerrar · scroll para recorrer toda la altura"}
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Workflow Cycle (Flujo de Aprobación Institucional) */}
      <div>
        <h2 className="text-3xl font-bold mb-4">{locale === "en" ? "Initiative Lifecycle & Approval Workflow" : "Ciclo de Vida y Flujo de Aprobación"}</h2>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {locale === "en"
                ? "Initiatives are not published directly — they go through a rigorous collaborative review cycle on the intranet to ensure compliance with institutional regulations."
                : "Las iniciativas no se publican directamente: atraviesan un riguroso ciclo de revisión colaborativa en la intranet para garantizar el cumplimiento de normativas institucionales."}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-muted/30 border border-border/60 relative">
                <div className="text-xs font-mono text-primary font-semibold mb-1">PHASE 01</div>
                <h4 className="font-bold text-sm text-foreground mb-1">{locale === "en" ? "Contributor: Draft" : "Colaborador: Borrador"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {locale === "en"
                    ? "The faculty member or Community Engagement coordinator completes the 6-step wizard and saves progress securely."
                    : "El docente o el encargado de Vinculación completa el wizard en 6 pasos y guarda su avance de forma segura."}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/30 border border-border/60 relative">
                <div className="text-xs font-mono text-blue-500 font-semibold mb-1">PHASE 02</div>
                <h4 className="font-bold text-sm text-foreground mb-1">{locale === "en" ? "Pending Review" : "Pendiente de Revisión"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {locale === "en"
                    ? "Formal submission to the management team. The record is locked for editing while under evaluation."
                    : "Envío formal al equipo directivo. El registro se bloquea para edición mientras se evalúa."}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/30 border border-border/60 relative">
                <div className="text-xs font-mono text-amber-500 font-semibold mb-1">PHASE 03</div>
                <h4 className="font-bold text-sm text-foreground mb-1">{locale === "en" ? "Observations / Revisions" : "Observaciones / Ajustes"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {locale === "en"
                    ? "If information is missing, the supervisor issues targeted observations and reopens the proposal for editing."
                    : "Si falta información, el supervisor emite observaciones puntuales y reabre la edición."}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/30 border border-emerald-500/40 bg-emerald-500/5 relative">
                <div className="text-xs font-mono text-emerald-500 font-semibold mb-1">PHASE 04</div>
                <h4 className="font-bold text-sm text-emerald-500 mb-1">{locale === "en" ? "Approved & Initiative Active" : "Aprobación e Iniciativa Activa"}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {locale === "en"
                    ? "Automatic conversion to an active Initiative in the general catalogue, with metrics visible across dashboards."
                    : "Conversión automática a Iniciativa activa en el catálogo general con métricas en dashboards."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}

export default function ProjectPage() {
  const { locale, t } = useLanguage();
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  const project = getProjectById(Number(projectId), locale);

  // Navegación cíclica entre proyectos anterior / siguiente
  const allProjects = getProjects(locale);
  const currentIndex = allProjects.findIndex((p) => p.id === Number(projectId));
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  // Barra de progreso de lectura suave con aceleración por resorte (Spring physics)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

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
          <h1 className="text-2xl font-bold mb-4">{locale === "en" ? "Project Not Found" : "Proyecto No Encontrado"}</h1>
          <Button onClick={() => router.push('/')}>{locale === "en" ? "Back to Home" : "Volver al Inicio"}</Button>
        </div>
      </div>
    );
  }

  // La imagen de banner usa la variante panorámica si existe, o la imagen estándar como fallback
  // Declarado después del guard para que TypeScript sepa que project no es undefined
  const bannerImage: string = project.imageWide ?? project.image;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Reading Progress Bar (Fixed Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-emerald-400 origin-left z-[60]"
        style={{ scaleX }}
      />

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
            {/* Responsive Banner Image First */}
            <div className="w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] relative bg-muted rounded-2xl overflow-hidden shadow-xl border border-border/60 group mb-8">
              <ProjectImage 
                src={bannerImage} 
                alt={project.title}
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className={`object-cover ${project.bannerPosition ?? "object-center"} group-hover:scale-105 transition-transform duration-500`}
              />
            </div>

            {/* Title & Info Section Below Image */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="flex items-center gap-1.5 py-1 px-3">
                      {getIcon(tech)}
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{locale === "en" ? "Technical Specs" : "Ficha Técnica"}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-primary shrink-0" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-primary shrink-0" />
                      <span>{project.category}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-3">
                  <div className="flex gap-2">
                    {project.demoUrl && projectId !== "4" && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {locale === "en" ? "Video Demo" : "Demo en Video"}
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
                  {/* Status badge for production/intranet projects (e.g. Kimün) */}
                  {project.statusBadge && !project.githubUrl && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="font-medium leading-relaxed">{project.statusBadge}</span>
                    </div>
                  )}
                  {/* Confidential notice for projects without public repo */}
                  {(project.isConfidential || (project.confidentialNotice && !project.githubUrl)) && (
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300">
                      <Lock className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
                      <span className="leading-relaxed">
                        {project.confidentialNotice || (locale === "en" ? "Protected code and data for internal institutional use." : "Código y datos protegidos para uso interno institucional.")}
                      </span>
                    </div>
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
              <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Project Overview" : "Descripción General"}</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="prose prose-invert max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Video Teaser Section - Only for Project 4 - right after overview */}
            {projectId === "4" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Kimün Trailer" : "Tráiler de Kimün"}</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {locale === "en"
                          ? "Audiovisual presentation teaser for the Kimün platform developed for CFT San Agustín."
                          : "Teaser audiovisual de presentación de la plataforma Kimün desarrollada para el CFT San Agustín."}
                      </p>
                      {/* YouTube Video Player */}
                      <div className="relative w-full overflow-hidden rounded-lg shadow-xl bg-black">
                        <div className="relative" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/p0ptiThtMYI"
                            title={locale === "en" ? "Kimün Platform Trailer" : "Tráiler de la plataforma Kimün"}
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
                          <div className="bg-blue-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Intranet-Integrated" : "Integrado en la Intranet"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "Seamless unified access for all institutional staff and faculty" : "Acceso ágil y unificado para empleados y docentes institucionales"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "6-Phase Guided Wizard" : "Wizard Guiado en 6 Fases"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "Step-by-step formulation linked to UN SDG targets" : "Formulación paso a paso con vinculación a metas ODS"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-emerald-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Approval Cycle & Roles" : "Ciclo de Aprobación & Roles"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "RBAC access control and supervisory workflow with observation feedback" : "Control de acceso RBAC y flujo de supervisión con observaciones"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-amber-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Analytics & Guided Tours" : "Analítica y Tours Guiados"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "Impact dashboards and interactive onboarding tours with Shepherd.js" : "Dashboards de impacto y tours interactivos con Shepherd.js"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}


            {/* Interactive Showcase Section - Only for Project 5 */}
            {projectId === "5" && (
              <JobEngineShowcaseSection />
            )}

            {/* Interactive Dashboards & Metrics Section - Only for Project 1 */}
            {projectId === "1" && (
              <PowerBIDashboardsSection />
            )}

            {/* Interactive Showcase Section - Only for Project 2 */}
            {projectId === "2" && (
              <ChatbotShowcaseSection />
            )}

            {/* Video Demo Section - Only for Project 2 */}
            {projectId === "2" && (
              <div>
                <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Chatbot Demonstration" : "Demostración del Chatbot"}</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {locale === "en" 
                          ? "Explore the capabilities of the administrative AI chatbot developed for Diputación Foral de Bizkaia."
                          : "Explora las capacidades del chatbot administrativo desarrollado para la Diputación Foral de Bizkaia."}
                      </p>
                      
                      {/* YouTube Video Player */}
                      <div className="relative w-full overflow-hidden rounded-lg shadow-xl bg-black">
                        <div className="relative" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/v2g-4adlr4k?si=opA0p6OGpMATycP5"
                            title={locale === "en" ? "Administrative Chatbot Demonstration" : "Demostración del Chatbot Administrativo"}
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
                          <div className="bg-blue-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Natural Interaction" : "Interacción Natural"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "Smooth and intuitive conversation with citizens" : "Conversación fluida e intuitiva con los usuarios"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-emerald-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Accurate Answers" : "Respuestas Precisas"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "Up-to-date municipal and department data" : "Información municipal y departamental actualizada"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Flexible Configuration" : "Configuración Flexible"}</h4>
                            <p className="text-sm text-muted-foreground">{locale === "en" ? "Adaptable to various query types and formats" : "Adaptable a diferentes consultas y formatos"}</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-amber-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{locale === "en" ? "Fast & Efficient" : "Rápido y Eficiente"}</h4>
                            <p className="text-sm text-gray-600 dark:text-muted-foreground">{locale === "en" ? "Instant responses 24/7" : "Respuestas inmediatas 24/7"}</p>
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
                <h2 className="text-3xl font-bold mb-4">{locale === "en" ? "Power BI Renovation - Design System Implementation" : "Renove PowerBI - Design System Implementation"}</h2>
                
                <Card className="mb-6">
                  <CardContent className="py-4 px-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {locale === "en"
                        ? "As part of this project's evolution, I implemented a comprehensive Design System to standardize the visual identity and usability across all Power BI dashboards. This redesign unified color palettes, typography, visual components, and interaction patterns, delivering a consistent and professional experience across all institutional reports."
                        : "Como parte de la evolución de este proyecto, he implementado un completo \"Design System\" para unificar la apariencia y funcionalidad de todos los dashboards PowerBI. Esta renovación ha permitido estandarizar colores, tipografías, componentes visuales y patrones de interacción, creando una experiencia coherente y profesional en todos los informes."}
                    </p>
                  </CardContent>
                </Card>
                
                {/* GIFs Grid */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { 
                        name: locale === "en" ? "Budgets" : "Presupuestos", 
                        description: locale === "en" ? "DFB budgets broken down by revenues and expenditures" : "Presupuestos de la Diputación Foral de Bizkaia separados en Ingresos y Gastos", 
                        fileName: "Presupuestos" 
                      },
                      { 
                        name: locale === "en" ? "Staff Distribution" : "Distribución de la Plantilla", 
                        description: locale === "en" ? "Headcount distribution across departments and gender" : "Distribución de la plantilla por departamentos y género", 
                        fileName: "Distribucion" 
                      },
                      { 
                        name: locale === "en" ? "Topics Analysis" : "Temas", 
                        description: locale === "en" ? "Analysis of citizen inquiry topics in OpenData Bizkaia" : "Análisis de temas sobre los que se consulta en OpenData Bizkaia", 
                        fileName: "Temas" 
                      },
                      { 
                        name: locale === "en" ? "Visits & Downloads" : "Visitas y Descargas", 
                        description: locale === "en" ? "Web visits and dataset downloads in OpenData Bizkaia" : "Visitas y descargas en OpenData Bizkaia", 
                        fileName: "Visitas" 
                      },
                      { 
                        name: locale === "en" ? "Requests" : "Solicitudes", 
                        description: locale === "en" ? "Volume and classification of citizen requests received" : "Número de solicitudes recibidas", 
                        fileName: "Solicitudes" 
                      },
                      { 
                        name: locale === "en" ? "Workforce Positions" : "Puestos de trabajo", 
                        description: locale === "en" ? "Job and public employment positions catalog in DFB" : "Puestos de trabajo de la Diputación Foral de Bizkaia", 
                        fileName: "Puestos" 
                      }
                    ].map((gif, index) => (
                      <motion.div
                        key={gif.fileName}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="aspect-video bg-muted relative group">
                            <ProjectImage 
                              src={`/images/${gif.fileName}.gif`}
                              alt={`${gif.name} - ${locale === "en" ? "Power BI Transformation" : "Transformación PowerBI"}`}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="text-xs">
                                {locale === "en" ? "Before / After" : "Antes/Después"}
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
                      {locale === "en" ? "Complete Renovation Report" : "Informe Completo del Renove"}
                    </CardTitle>
                    <CardDescription>
                      {locale === "en" 
                        ? "Comprehensive technical documentation detailing the Design System implementation" 
                        : "Documentación técnica completa del proceso de implementación del Design System"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed">
                        {locale === "en"
                          ? "This report details the end-to-end modernization of Power BI dashboards through the implementation of a unified Design System for Diputación Foral de Bizkaia. It includes Before & After comparisons demonstrating the evolution towards cleaner, standardized visualizations."
                          : "Este informe detalla el proceso completo de renovación de los dashboards PowerBI a través de la implementación de un Design System unificado para la Diputación Foral de Bizkaia. Incluye un Antes y un Después para ver como han cambiado las visualizaciones y como tienen todos una estructura homogénea."}
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
                          {locale === "en" ? "Full Design System implementation technical documentation" : "Documentación completa del Design System implementation"}
                        </p>
                        <div className="flex gap-2 justify-center">
                          <Button size="sm" variant="outline" onClick={handlePreviewRenovePDF}>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            {locale === "en" ? "Preview" : "Vista Previa"}
                          </Button>
                          <Button size="sm" onClick={handleDownloadRenovePDF}>
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {locale === "en" ? "Download PDF" : "Descargar PDF"}
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
                <h2 className="text-3xl font-bold mb-6">{locale === "en" ? "Full Technical Report" : "Informe Técnico Completo"}</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        {locale === "en"
                          ? "Explore the full technical report detailing all audit findings, network configs, hardening benchmarks, and security recommendations."
                          : "Explora el informe técnico completo con toda la documentación, configuraciones, resultados y recomendaciones desarrolladas durante el proyecto."}
                      </p>
                      
                      {/* PDF Carousel Simulation */}
                      <div className="relative bg-muted/50 rounded-lg p-8 min-h-[600px] flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold">{locale === "en" ? "Cybersecurity Report" : "Informe de Ciberseguridad"}</h3>
                          <p className="text-muted-foreground max-w-md">
                            {locale === "en" 
                              ? "Comprehensive technical documentation of the bootcamp project for Deiviator" 
                              : "Documentación técnica completa del proyecto bootcamp para Deiviator"}
                          </p>
                          <div className="flex gap-2 justify-center">
                            <Button size="sm" variant="outline" onClick={handlePreviewCybersecurityPDF}>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {locale === "en" ? "Preview" : "Vista Previa"}
                            </Button>
                            <Button size="sm" onClick={handleDownloadCybersecurityPDF}>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              {locale === "en" ? "Download PDF" : "Descargar PDF"}
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

            {/* Interactive Showcase Section - Only for Project 4 (Kimün) */}
            {projectId === "4" && (
              <KimunShowcaseSection />
            )}

            {/* Interactive Analytics Dashboard Showcase - Only for Project 4 (Kimün) */}
            {projectId === "4" && (
              <KimunDashboardShowcase />
            )}

          </motion.div>
        </div>
      </section>

      {/* Previous / Next Project Navigation Bar */}
      <section className="py-12 px-4 border-t border-border/40 bg-card/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              {locale === "en" ? "Explore More Projects" : "Explorar Más Proyectos"}
            </span>
            <Button variant="ghost" size="sm" onClick={() => router.push('/#projects')} className="text-xs text-muted-foreground hover:text-foreground">
              {locale === "en" ? "View all projects" : "Ver todos los proyectos"}
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Previous Project Card */}
            {prevProject && (
              <a
                href={`/projects/${prevProject.id}`}
                className="group relative flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-16 rounded-lg overflow-hidden relative shrink-0 bg-muted border border-border/40">
                  <ProjectImage
                    src={prevProject.image}
                    alt={prevProject.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>{locale === "en" ? "Previous Project" : "Proyecto Anterior"}</span>
                  </div>
                  <h4 className="font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground/80 truncate mt-0.5">
                    {prevProject.category}
                  </p>
                </div>
              </a>
            )}

            {/* Next Project Card */}
            {nextProject && (
              <a
                href={`/projects/${nextProject.id}`}
                className="group relative flex items-center justify-between gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-right md:flex-row-reverse"
              >
                <div className="w-20 h-16 rounded-lg overflow-hidden relative shrink-0 bg-muted border border-border/40">
                  <ProjectImage
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                    <span>{locale === "en" ? "Next Project" : "Siguiente Proyecto"}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground/80 truncate mt-0.5">
                    {nextProject.category}
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            {locale === "en"
              ? `© ${new Date().getFullYear()} Kimetz Loroño. Built with Next.js, TypeScript and Tailwind CSS.`
              : `© ${new Date().getFullYear()} Kimetz Loroño. Desarrollado con Next.js, TypeScript y Tailwind CSS.`}
          </p>
          <Button onClick={() => router.push('/')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.projectDetail.backToPortfolio}
          </Button>
        </div>
      </footer>
    </div>
  );
}