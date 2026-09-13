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
  Layers
} from "lucide-react";
import { getProjectById } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";



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
  const [activeStep, setActiveStep] = useState(1);
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

  const portalMatrix = [
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

  return (
    <div className="space-y-12 mt-12">
      {/* KPI Stat Cards Grid (Compact Layout) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Métricas e Indicadores de Rendimiento</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-primary">+3.300</div>
                <div className="text-xs text-muted-foreground font-medium">Vacantes Consolidadas</div>
                <div className="text-[10px] text-muted-foreground/70">Dataset activo Maule</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-500 whitespace-nowrap">7 Fuentes</div>
                <div className="text-xs text-muted-foreground font-medium">Portales Integrados</div>
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
                <div className="text-xl font-bold text-purple-500 whitespace-nowrap">~4 seg</div>
                <div className="text-xs text-muted-foreground font-medium">Deduplicación Difusa</div>
                <div className="text-[10px] text-muted-foreground/70">Procesamiento en memoria</div>
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
                <div className="text-xs text-muted-foreground font-medium">Scraping Ético Auditado</div>
                <div className="text-[10px] text-muted-foreground/70">User-Agent & Robots.txt</div>
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
        <h2 className="text-3xl font-bold mb-6">Matriz de Scraping Ético y Fuentes (12 Portales)</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-500" />
              Estado y Cumplimiento Normativo de Fuentes
            </CardTitle>
            <CardDescription>
              User-Agent Transparente Obligatorio: <code>IES-CareerBot/1.0; (+http://www.cftsanagustin.cl)</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-muted/50 text-muted-foreground border-b">
                <tr>
                  <th className="p-3">Portal</th>
                  <th className="p-3">Motor Técnico</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3">Criterio Ético / Gobernanza de Datos</th>
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
                          Activo
                        </Badge>
                      )}
                      {item.status === "excluded" && (
                        <Badge className="bg-rose-600 text-white dark:bg-rose-900/80 dark:text-rose-200 border-0 font-semibold">
                          Excluido
                        </Badge>
                      )}
                      {item.status === "disabled" && (
                        <Badge variant="outline" className="bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-500/50 dark:border-amber-500/30 font-semibold">
                          Deshabilitado
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
  const [activeStep, setActiveStep] = useState(1);

  const pipelineSteps: { [key: number]: { title: string; desc: string; highlights: string[] } } = {
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

  return (
    <div className="space-y-12 mb-12">
      {/* Metric Stat Cards Grid (A) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Métricas e Indicadores del Proyecto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="Motor NLP - Clasificación Contextual con Transformers">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-primary leading-tight truncate">Motor NLP</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Clasificación Contextual</div>
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
                <div className="text-sm sm:text-base xl:text-lg font-bold text-blue-500 leading-tight truncate">Búsqueda FAISS</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Indexación Vectorial</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Embeddings de Trámites & Dptos</div>
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
                <div className="text-xs text-muted-foreground font-medium truncate">Coincidencia Difusa</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Tolerancia a Erratas Ciudadanas</div>
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
                <div className="text-xs text-muted-foreground font-medium truncate">Ejecución Offline</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Interfaz Gradio & Python Setup</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive AI Pipeline Stepper (C) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Canalización de Inteligencia Artificial</h2>
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
                    {stepNum === 1 && "1. Lógica Difusa"}
                    {stepNum === 2 && "2. FAISS Vectorial"}
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
    </div>
  );
}

function PowerBIDashboardsSection() {
  const [activeTab, setActiveTab] = useState(1);

  const dashboards = [
    {
      id: 1,
      title: "Comunicaciones, Consultas, Quejas y Sugerencias",
      description: "Sistema de seguimiento de comunicaciones ciudadanas y gestión de solicitudes",
      src: "https://app.powerbi.com/view?r=eyJrIjoiNGIwNWM4MjEtMjJmZi00ZDJlLTg2N2EtNjQzMjhhYmIwNmZiIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=cb1fe6884b4f452a84ac"
    },
    {
      id: 2,
      title: "Estadísticas del portal de transparencia",
      description: "Análisis de tráfico y métricas de rendimiento del sitio web Gardentasuna",
      src: "https://app.powerbi.com/view?r=eyJrIjoiODlkYzBhZjctMjZjOC00ZGI0LTkzYTQtZTRhZmM4NjU2YzRkIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=cb1fe6884b4f452a84ac"
    },
    {
      id: 3,
      title: "Mapa de Oficinas y Atención Ciudadana",
      description: "Visualización geográfica interactiva de las oficinas y puntos de atención",
      src: "https://app.powerbi.com/view?r=eyJrIjoiNzA5MTZkYjgtY2JhYS00MWQ4LWFiMTctNGFmMGNmMDMxNWRiIiwidCI6IjczZDE3ZDMzLTE4YTktNDJjZC04Yzc4LTc0ZDZjZjZkN2RjNSIsImMiOjl9&pageName=5c18373603eff3c5e8c7"
    }
  ];

  const currentDashboard = dashboards.find((d) => d.id === activeTab) || dashboards[0];

  return (
    <div className="space-y-12">
      {/* Metric Stat Cards Grid (Compact Layout matching Project 5) */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Métricas e Indicadores del Proyecto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="min-w-0" title="3 Dashboards Interactivos en Vivo (Comunicaciones, Web y Mapa)">
                <div className="text-base sm:text-lg xl:text-xl font-bold text-primary leading-tight whitespace-nowrap">3 Dashboards</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Interactivos en Vivo</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Comunicaciones, Web y Mapa</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0" title="+15 Informes Renovados (Estandarización Gardentasuna)">
                <div className="text-base sm:text-lg xl:text-xl font-bold text-blue-500 leading-tight whitespace-nowrap">+15 Informes</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Diseño Renovado</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Estandarización Gardentasuna</div>
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
                <div className="text-xs text-muted-foreground font-medium truncate">Datos Abiertos DFB</div>
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
                <div className="text-xs text-muted-foreground font-medium truncate">Usabilidad Unificada</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Coherencia visual & UX</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Live Selector Tabs */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold">Dashboards Interactivos en Vivo</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Selecciona uno de los paneles dinámicos embebidos para explorar los datos en tiempo real.
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(currentDashboard.src, '_blank')}
            className="w-fit shrink-0"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Abrir en Power BI
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
                    {dash.id === 1 && "Comunicaciones & Quejas"}
                    {dash.id === 2 && "Estadísticas Web"}
                    {dash.id === 3 && "Mapa de Oficinas"}
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
  const [activeWizardStep, setActiveWizardStep] = useState(1);

  const wizardSteps: {
    [key: number]: {
      title: string;
      subtitle: string;
      desc: string;
      highlights: string[];
      details: string[];
    };
  } = {
    1: {
      title: "Paso 1: Datos Generales",
      subtitle: "Identificación y configuración básica de la propuesta",
      desc: "Registro del nombre oficial del proyecto, selección de Dirección Responsable (Vinculación con el Medio o Innovación), Modalidad de ejecución (Presencial, Online o Mixta), Sedes involucradas, Mecanismo y Unidad Ejecutora titular.",
      highlights: [
        "Dirección Responsable: VcM o Innovación",
        "Modalidad: Presencial, Online o Mixta",
        "Asignación de Sedes, Mecanismos y Unidad Ejecutora"
      ],
      details: [
        "Control de campos obligatorios con validación en cliente y servidor",
        "Asignación automática del usuario creador y ciclo de formulación",
        "Definición clara del marco institucional y líneas estratégicas"
      ]
    },
    2: {
      title: "Paso 2: Datos Adicionales",
      subtitle: "Contribución temática y localización territorial oficial",
      desc: "Selección del Programa institucional, Ámbitos de Acción, Líneas de Acción, categorización de Impacto Interno vs. Impacto Externo, y desglose de ubicación geográfica en cascada oficial de Chile (Región, Provincia y Comuna).",
      highlights: [
        "Cascada geográfica oficial de Chile (Región, Provincia y Comuna)",
        "Doble evaluación: Impacto Interno (académico) e Impacto Externo (social)",
        "Alineación con Programas y Ámbitos de Acción institucionales"
      ],
      details: [
        "Carga dinámica de comunas mediante endpoints AJAX",
        "Desglose de impacto medible en estudiantes y comunidad regional",
        "Normalización geográfica para reportes territoriales"
      ]
    },
    3: {
      title: "Paso 3: ODS (Agenda 2030 ONU)",
      subtitle: "Vinculación directa con Objetivos de Desarrollo Sostenible",
      desc: "Matriz interactiva con los 17 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas. Al seleccionar cada objetivo, se despliega un panel para marcar metas e indicadores cuantitativos específicos.",
      highlights: [
        "Matriz interactiva de los 17 Objetivos de Desarrollo Sostenible",
        "Selección de metas e indicadores específicos por objetivo",
        "Cuantificación del aporte institucional a la Agenda 2030"
      ],
      details: [
        "Relaciones M2M persistidas en tablas pivot de PostgreSQL",
        "Métricas de contribución global para memorias institucionales",
        "Filtros de auditoría basados en objetivos globales"
      ]
    },
    4: {
      title: "Paso 4: Participantes, Asistentes y Productos",
      subtitle: "Cuantificación del ecosistema humano y entregables",
      desc: "Registro y conteo de participantes internos (estudiantes de carreras del CFT, directivos, docentes), socios comunitarios o empresariales externos, estimación de asistentes y definición de productos o entregables tangibles.",
      highlights: [
        "Estudiantes, docentes y directivos del CFT San Agustín",
        "Socios comunitarios, empresas y beneficiarios externos",
        "Definición y catálogo de productos tangibles esperados"
      ],
      details: [
        "Seguimiento de horas y dedicación del personal",
        "Registro nominal y agregado de beneficiarios",
        "Vinculación curricular con carreras y módulos formativos"
      ]
    },
    5: {
      title: "Paso 5: Recursos y Presupuesto",
      subtitle: "Planificación económica y fuentes de financiamiento",
      desc: "Desglose financiero detallado de costos estimados directos, financiamiento institucional interno, fondos de terceros o fuentes externas y valorización económica de recursos aportados.",
      highlights: [
        "Presupuesto estimado y costos operacionales",
        "Financiamiento institucional vs. fondos externos",
        "Valorización económica de recursos e infraestructura"
      ],
      details: [
        "Cálculo automático de balances presupuestarios",
        "Desglose por ítems de gasto y justificación financiera",
        "Exportación estructurada a plantillas contables"
      ]
    },
    6: {
      title: "Paso 6: Evidencias y Guardado Final",
      subtitle: "Almacenamiento, trazabilidad y gestión documental",
      desc: "Cierre y persistencia de la propuesta en base de datos. Una vez almacenada, la plataforma permite gestionar el repositorio de evidencias documentales adjuntas (actas, convenios, listas de asistencia, certificados y fotografías).",
      highlights: [
        "Persistencia íntegra de la propuesta en PostgreSQL",
        "Gestión documental de evidencias (PDF, actas, convenios)",
        "Validación MIME y de tamaño de archivos para máxima seguridad"
      ],
      details: [
        "Registro inmutable en el historial de trazabilidad (Logs)",
        "Generación automática de ficha de la propuesta",
        "Disponibilidad inmediata para el envío a revisión del supervisor"
      ]
    }
  };

  const currentStep = wizardSteps[activeWizardStep];

  return (
    <div className="space-y-12 mb-12">
      {/* Metric Stat Cards Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Métricas e Indicadores Técnicos de Kimün</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="4 Roles RBAC - Admin, Supervisor, Digitador y Colaborador">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-primary leading-tight truncate">4 Roles RBAC</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Control de Acceso</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Caché en memoria (1 query/req)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="Wizard en 6 Pasos - Formulación Estructurada con Validación">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-blue-500 leading-tight truncate">6 Pasos Wizard</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Formulación Guiada</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">ODS, Comunas y Evidencias</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="+21 Modelos Relacionales - PostgreSQL 16 & Eloquent Scopes">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-purple-500 leading-tight truncate">+21 Modelos</div>
                <div className="text-xs text-muted-foreground font-medium truncate">PostgreSQL 16</div>
                <div className="text-[10px] text-muted-foreground/70 truncate">Geografía Chile & Metas ODS</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-primary/20 hover:border-primary/40 transition-colors overflow-hidden">
            <CardContent className="p-4 flex items-center gap-3 min-w-0">
              <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-500 shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1 overflow-hidden" title="Docker Compose - PHP 8.3 FPM, Nginx y PostgreSQL">
                <div className="text-sm sm:text-base xl:text-lg font-bold text-emerald-500 leading-tight truncate">Docker Stack</div>
                <div className="text-xs text-muted-foreground font-medium truncate">Intranet CFT</div>
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
            <h2 className="text-3xl font-bold">Formulario Wizard en 6 Pasos Oficiales</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Explora la secuencia interactiva con la que los colaboradores formulan propuestas en la plataforma.
            </p>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30 border-b pb-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((stepNum) => (
                <Button
                  key={stepNum}
                  variant={activeWizardStep === stepNum ? "default" : "outline"}
                  onClick={() => setActiveWizardStep(stepNum)}
                  className="flex flex-col items-start h-auto py-2.5 px-3 text-left justify-start"
                >
                  <span className="text-[10px] opacity-75 uppercase font-mono tracking-wider">Paso 0{stepNum}</span>
                  <span className="text-xs font-bold truncate w-full">
                    {stepNum === 1 && "Datos Generales"}
                    {stepNum === 2 && "Datos Adicionales"}
                    {stepNum === 3 && "ODS"}
                    {stepNum === 4 && "Participantes"}
                    {stepNum === 5 && "Recursos"}
                    {stepNum === 6 && "Evidencias"}
                  </span>
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-2">
                  Etapa 0{activeWizardStep} de 06
                </div>
                <h3 className="text-xl font-bold text-foreground">{currentStep.title}</h3>
                <p className="text-sm text-primary font-medium mt-0.5">{currentStep.subtitle}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{currentStep.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-muted/40 border border-border/50">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Puntos Clave del Paso
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
                    Lógica y Reglas de Negocio
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

      {/* Workflow Cycle (Flujo de Aprobación Institucional) */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Ciclo de Vida y Flujo de Aprobación</h2>
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Las iniciativas no se publican directamente: atraviesan un riguroso ciclo de revisión colaborativa en la intranet para garantizar el cumplimiento de normativas institucionales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-muted/30 border border-border/60 relative">
                <div className="text-xs font-mono text-primary font-semibold mb-1">FASE 01</div>
                <h4 className="font-bold text-sm text-foreground mb-1">Colaborador: Borrador</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  El docente o el encargado de Vinculación completa el wizard en 6 pasos y guarda su avance de forma segura.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/30 border border-border/60 relative">
                <div className="text-xs font-mono text-blue-500 font-semibold mb-1">FASE 02</div>
                <h4 className="font-bold text-sm text-foreground mb-1">Pendiente de Revisión</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Envío formal al equipo directivo. El registro se bloquea para edición mientras se evalúa.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/30 border border-border/60 relative">
                <div className="text-xs font-mono text-amber-500 font-semibold mb-1">FASE 03</div>
                <h4 className="font-bold text-sm text-foreground mb-1">Observaciones / Ajustes</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Si falta información, el supervisor emite observaciones puntuales y reabre la edición.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/30 border border-emerald-500/40 bg-emerald-500/5 relative">
                <div className="text-xs font-mono text-emerald-500 font-semibold mb-1">FASE 04</div>
                <h4 className="font-bold text-sm text-emerald-500 mb-1">Aprobación e Iniciativa Activa</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Conversión automática a Iniciativa activa en el catálogo general con métricas en dashboards.
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
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  const project = getProjectById(Number(projectId));

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

  // La imagen de banner usa la variante panorámica si existe, o la imagen estándar como fallback
  // Declarado después del guard para que TypeScript sepa que project no es undefined
  const bannerImage: string = project.imageWide ?? project.image;

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
            {/* Compact Banner Image First */}
            <div className="w-full h-[260px] md:h-[320px] relative bg-muted rounded-2xl overflow-hidden shadow-xl border border-border/60 group mb-8">
              <ProjectImage 
                src={bannerImage} 
                alt={project.title}
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                    <CardTitle className="text-lg">Ficha Técnica</CardTitle>
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
                          Demo en Video
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
                        {project.confidentialNotice || "Código y datos protegidos para uso interno institucional."}
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
              <h2 className="text-3xl font-bold mb-6">Descripción General</h2>
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
                <h2 className="text-3xl font-bold mb-6">Tráiler de Kimün</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Teaser audiovisual de presentación de la plataforma Kimün desarrollada para el CFT San Agustín.
                      </p>
                      {/* YouTube Video Player */}
                      <div className="relative w-full overflow-hidden rounded-lg shadow-xl bg-black">
                        <div className="relative" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/p0ptiThtMYI"
                            title="Tráiler de la plataforma Kimün"
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
                            <h4 className="font-semibold text-foreground">Integrado en la Intranet</h4>
                            <p className="text-sm text-muted-foreground">Acceso ágil y unificado para empleados y docentes institucionales</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Wizard Guiado en 6 Fases</h4>
                            <p className="text-sm text-muted-foreground">Formulación paso a paso con vinculación a metas ODS</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-emerald-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Ciclo de Aprobación & Roles</h4>
                            <p className="text-sm text-muted-foreground">Control de acceso RBAC y flujo de supervisión con observaciones</p>
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
                            <h4 className="font-semibold text-foreground">Analítica y Tours Guiados</h4>
                            <p className="text-sm text-muted-foreground">Dashboards de impacto y tours interactivos con Shepherd.js</p>
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
                          <div className="bg-blue-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Interacción Natural</h4>
                            <p className="text-sm text-muted-foreground">Conversación fluida e intuitiva con los usuarios</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-emerald-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Respuestas Precisas</h4>
                            <p className="text-sm text-muted-foreground">Información municipal y departamental actualizada</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-purple-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Configuración Flexible</h4>
                            <p className="text-sm text-muted-foreground">Adaptable a diferentes consultas y formatos</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-amber-500/10 rounded-full p-2 mt-1">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">Rápido y Eficiente</h4>
                            <p className="text-sm text-gray-600 dark:text-muted-foreground">Respuestas inmediatas 24/7</p>
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
                <h2 className="text-3xl font-bold mb-4">Renove PowerBI - Design System Implementation</h2>
                
                <Card className="mb-6">
                  <CardContent className="py-4 px-5">
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
                          <div className="aspect-video bg-muted relative group">
                            <ProjectImage 
                              src={`/images/${gif.fileName}.gif`}
                              alt={`${gif.name} - Transformación PowerBI`}
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
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

            {/* Interactive Showcase Section - Only for Project 4 (Kimün) */}
            {projectId === "4" && (
              <KimunShowcaseSection />
            )}

            {/* Capturas del Formulario Wizard - Only for Project 4 */}
            {projectId === "4" && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Capturas del Formulario Wizard</h2>
                <p className="text-muted-foreground mb-6">
                  Vista paso a paso del formulario de formulación de iniciativas, con cada etapa del proceso.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { paso: "Paso 1", titulo: "Datos Generales" },
                    { paso: "Paso 2", titulo: "Datos Adicionales" },
                    { paso: "Paso 3", titulo: "ODS" },
                    { paso: "Paso 4", titulo: "Participantes, Asistentes y Productos" },
                    { paso: "Paso 5", titulo: "Recursos" },
                    { paso: "Paso 6", titulo: "Evidencias" },
                  ].map((step) => (
                    <div
                      key={step.paso}
                      className="rounded-xl border border-dashed border-border/60 bg-muted/30 aspect-video flex flex-col items-center justify-center gap-2 text-center p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Layers className="w-5 h-5 text-primary/60" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">{step.paso}</span>
                      <span className="text-sm font-semibold text-muted-foreground">{step.titulo}</span>
                      <span className="text-xs text-muted-foreground/50 italic">Captura pendiente</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Análisis de Datos - Only for Project 4 */}
            {projectId === "4" && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Análisis de Datos</h2>
                <p className="text-muted-foreground mb-6">
                  Dashboards analíticos, gráficas de impacto y exportaciones de reportes generados por la plataforma Kimün.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Placeholder grande — dashboard principal */}
                  <div className="md:col-span-2 rounded-xl border border-dashed border-border/60 bg-muted/30 h-56 flex flex-col items-center justify-center gap-3 text-center p-6 hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Database className="w-6 h-6 text-primary/60" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">Dashboard Analítico General</span>
                    <span className="text-xs text-muted-foreground/50 italic">Captura / exportación pendiente</span>
                  </div>
                  {/* Placeholder gráfica 1 */}
                  <div className="rounded-xl border border-dashed border-border/60 bg-muted/30 h-44 flex flex-col items-center justify-center gap-2 text-center p-4 hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary/60" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">Gráfica de Iniciativas por Estado</span>
                    <span className="text-xs text-muted-foreground/50 italic">Captura pendiente</span>
                  </div>
                  {/* Placeholder gráfica 2 */}
                  <div className="rounded-xl border border-dashed border-border/60 bg-muted/30 h-44 flex flex-col items-center justify-center gap-2 text-center p-4 hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary/60" />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">Distribución Geográfica de Actividades</span>
                    <span className="text-xs text-muted-foreground/50 italic">Captura pendiente</span>
                  </div>
                </div>
              </div>
            )}



          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Kimetz Loroño. Desarrollado con Next.js, TypeScript y Tailwind CSS.
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