"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";
import {
  BarChart3,
  Globe,
  GraduationCap,
  Briefcase,
  Users,
  MapPin,
  TrendingUp,
  Maximize2,
  ExternalLink,
  Download,
  X,
  CheckCircle2,
  Zap,
  Database,
  Layers,
  Sparkles
} from "lucide-react";

interface DashboardView {
  id: string;
  tabLabel: string;
  shortLabel: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  metrics: { label: string; value: string; detail: string }[];
  highlights: { title: string; desc: string }[];
}

export function KimunDashboardShowcase() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("general");
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomOpen(false);
    };
    if (isZoomOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isZoomOpen]);

  const views: Record<string, DashboardView> = {
    general: {
      id: "general",
      tabLabel: locale === "en" ? "01. General / Summary" : "01. General / Resumen",
      shortLabel: "Resumen",
      icon: <BarChart3 className="w-4 h-4" />,
      badge: locale === "en" ? "Multi-criteria Radar" : "Huella Multicriterio",
      title: locale === "en" ? "Executive Summary & Impact Footprint" : "Resumen Ejecutivo & Huella de Impacto",
      subtitle: locale === "en" 
        ? "Cross-sectional consolidation of initiatives, SDG radar, seasonality and conversion pipeline" 
        : "Consolidación transversal de iniciativas, radar ODS, estacionalidad y embudo de maduración",
      desc: locale === "en"
        ? "Comprehensive overview synthesizing institutional activity. Features a multi-axis Chart.js radar correlating projects with the 17 UN SDGs, geographic distribution across 5 campuses, real-time conversion rates, and maturity stage analytics."
        : "Vista panorámica que sintetiza la actividad institucional completa. Integra un radar de impacto ODS multicriterio, distribución geográfica por sedes, tasa de conversión (40%) y embudo de maduración con tiempos promedio de tramitación (0.5 días).",
      image: "/images/kimun/dashboard-general.jpg",
      metrics: [
        { label: locale === "en" ? "Total Activities" : "Actividades Totales", value: "52", detail: locale === "en" ? "43 Initiatives (83%) / 9 Proposals (17%)" : "43 Iniciativas (83%) · 9 Propuestas (17%)" },
        { label: locale === "en" ? "Estimated Impact" : "Impacto Estimado", value: "1.062", detail: locale === "en" ? "Participants and beneficiaries in Maule" : "Participantes y asistentes en el Maule" },
        { label: locale === "en" ? "SDG Engagement" : "Compromiso ODS", value: "17 / 17", detail: locale === "en" ? "100% of UN Global Goals addressed" : "100% de los Objetivos ONU abordados" },
        { label: locale === "en" ? "Conversion Rate" : "Tasa de Conversión", value: "40%", detail: locale === "en" ? "0.5 days avg. from proposal to approval" : "0.5 días promedio propuesta → aprobación" },
      ],
      highlights: [
        {
          title: locale === "en" ? "Chart.js Multi-Criteria Radar" : "Radar Multicriterio Chart.js",
          desc: locale === "en" 
            ? "Spider chart dynamically contrasting active initiatives vs. draft proposals across all 17 global goals."
            : "Gráfico spider que cruza en tiempo real iniciativas aprobadas frente a propuestas en formulación."
        },
        {
          title: locale === "en" ? "Maturity Cycle & Pipeline" : "Ciclo de Madurez & Estados",
          desc: locale === "en"
            ? "Strict workflow tracking: Draft, Registered, Pending Review, In Progress, Finalized, Closed."
            : "Auditoría visual del pipeline de estados institucionales (Borrador, Revisión, Aprobado, Cerrado)."
        },
        {
          title: locale === "en" ? "Annual Seasonality Curve" : "Curva de Estacionalidad",
          desc: locale === "en"
            ? "Monthly initiative launch trajectory to optimize academic planning and resource allocation."
            : "Curva mensual de despliegue que permite planificar cargas docentes e infraestructura en el Maule."
        }
      ]
    },
    ods: {
      id: "ods",
      tabLabel: locale === "en" ? "02. Sustainability (SDG 5P)" : "02. Sostenibilidad (ODS 5P)",
      shortLabel: "ODS 5P",
      icon: <Globe className="w-4 h-4" />,
      badge: "Agenda 2030 ONU",
      title: locale === "en" ? "Sustainability Matrix & 5P Dimensions" : "Matriz de Sostenibilidad & Dimensiones 5P",
      subtitle: locale === "en"
        ? "Strategic alignment with the five official UN sustainability pillars: People, Planet, Prosperity, Peace and Partnerships"
        : "Alineación estratégica con los cinco pilares de la ONU: Personas, Planeta, Prosperidad, Paz y Alianzas",
      desc: locale === "en"
        ? "Specialized module categorizing institutional impact under the official UN 5P framework. Computes proportional distributions, audits specific micro-targets (e.g. 10.2, 9.5, 1.5, 4.6), and generates executive metrics for sustainability balance sheets."
        : "Módulo especializado que clasifica el impacto bajo el marco oficial 5P de las Naciones Unidas. Calcula cuotas porcentuales por pilar, audita metas desagregadas específicas y cuantifica el aporte institucional a la Agenda 2030.",
      image: "/images/kimun/dashboard-ods.jpg",
      metrics: [
        { label: locale === "en" ? "People Dimension" : "Dimensión Personas", value: "36%", detail: locale === "en" ? "48 activities in education, health & equity" : "48 actividades en educación, salud y equidad" },
        { label: locale === "en" ? "Prosperity Dimension" : "Dimensión Prosperidad", value: "29%", detail: locale === "en" ? "38 initiatives in decent work & innovation" : "38 iniciativas en trabajo decente e innovación" },
        { label: locale === "en" ? "Planet Dimension" : "Dimensión Planeta", value: "19%", detail: locale === "en" ? "25 projects in climate action & ecosystems" : "25 proyectos en acción climática y biosfera" },
        { label: locale === "en" ? "Specific Targets" : "Metas Específicas", value: "+15", detail: locale === "en" ? "Granular targets tracked (10.2, 9.5, 1.5, 4.6...)" : "Metas desagregadas con ranking de impacto" },
      ],
      highlights: [
        {
          title: locale === "en" ? "5P Dimensional Classification" : "Clasificación 5P Canónica",
          desc: locale === "en"
            ? "Automatic grouping of the 17 SDGs into the 5 core UN sustainability dimensions with color-coded badges."
            : "Agrupación automática de los 17 ODS en las 5 dimensiones clave con paleta oficial de la ONU."
        },
        {
          title: locale === "en" ? "Sub-target Granular Auditing" : "Auditoría de Sub-Metas",
          desc: locale === "en"
            ? "Direct query tracking on specific indicators (social inclusion, research capacity, community resilience)."
            : "Monitoreo de metas específicas (inclusión social, investigación aplicada, resiliencia comunitaria)."
        },
        {
          title: locale === "en" ? "Proportional Donut Visualizer" : "Análisis Proporcional",
          desc: locale === "en"
            ? "Interactive Chart.js donut chart with animated percentage breakdown and dynamic legends."
            : "Gráfico de donut interactivo con cálculo automático de cuotas relativas por pilar."
        }
      ]
    },
    academico: {
      id: "academico",
      tabLabel: locale === "en" ? "03. Academic & Execution" : "03. Académico y Ejecución",
      shortLabel: "Académico",
      icon: <GraduationCap className="w-4 h-4" />,
      badge: locale === "en" ? "Curricular Linkage" : "Vinculación Curricular",
      title: locale === "en" ? "Academic Governance, Careers & Agreements" : "Gobernanza Académica, Carreras & Convenios",
      subtitle: locale === "en"
        ? "Traceability across executing units, academic programs, curricular subjects and formal agreements"
        : "Trazabilidad de unidades ejecutoras, programas, carreras formativas y convenios institucionales",
      desc: locale === "en"
        ? "Audit of the system's direct linkage to CFT San Agustín's educational curriculum. Measures student engagement across academic schools (Technology, Business, Agro, Health), institutional lines of action, and formal collaboration addendums."
        : "Auditoría del impacto directo en los planes de estudio del CFT San Agustín. Evalúa qué carreras y asignaturas curriculares nutren las iniciativas con participación estudiantil, además de rastrear convenios formales de cooperación.",
      image: "/images/kimun/dashboard-academico.jpg",
      metrics: [
        { label: locale === "en" ? "Curricular Linkage" : "Mecanismo Curricular", value: "82%", detail: locale === "en" ? "32 initiatives integrated into formal coursework" : "32 iniciativas integradas en asignaturas oficiales" },
        { label: locale === "en" ? "Technology School" : "Área Tecnológica", value: "34%", detail: locale === "en" ? "13 initiatives driven by IT and Software careers" : "13 iniciativas impulsadas por carreras tecnológicas" },
        { label: locale === "en" ? "Lines of Action" : "Líneas de Acción", value: "Top 10", detail: locale === "en" ? "Technical pertinence & community collaboration" : "Pertinencia técnica y colaboración territorial" },
        { label: locale === "en" ? "Leading Subjects" : "Asignaturas Clave", value: "5 Líderes", detail: locale === "en" ? "Irrigation, Communication, OOP Design..." : "Técnicas de Riego, Comunicación, Diseño POO..." },
      ],
      highlights: [
        {
          title: locale === "en" ? "Executing Units & Macro Programs" : "Unidades Ejecutoras & Programas",
          desc: locale === "en"
            ? "Cross-referencing vicerectories, departments and academic schools with Eloquent aggregations."
            : "Cruce relacional de vicerrectorías, direcciones y programas con agregaciones Eloquent en PostgreSQL."
        },
        {
          title: locale === "en" ? "Coursework Integration Ranking" : "Impacto en Asignaturas",
          desc: locale === "en"
            ? "Identifies exact academic modules whose students apply hands-on skills in local community projects."
            : "Identifica los módulos formativos cuyos estudiantes aplican competencias prácticas en el territorio."
        },
        {
          title: locale === "en" ? "Legal Agreement Tracking" : "Convenios Marco & Adendum",
          desc: locale === "en"
            ? "Bar breakdown classifying activities under signed institutional covenants vs. independent projects."
            : "Desglose que clasifica actividades amparadas en convenios formales vs. ejecución directa."
        }
      ]
    },
    recursos: {
      id: "recursos",
      tabLabel: locale === "en" ? "04. Resources & Budget" : "04. Recursos y Presupuesto",
      shortLabel: "Recursos",
      icon: <Briefcase className="w-4 h-4" />,
      badge: locale === "en" ? "Economic Valuation" : "Valorización Económica",
      title: locale === "en" ? "Budget Valuation, Funding & Deliverables" : "Inversión, Financiamiento & Productos",
      subtitle: locale === "en"
        ? "Financial intelligence auditing institutional costs, external funding leverage, and physical outputs"
        : "Auditoría presupuestaria de costos institucionales, aportes externos y entregables físicos",
      desc: locale === "en"
        ? "Financial analytics module valuing human capital (teaching hours), infrastructure (workshops, laboratories), and direct funds. Discriminates institutional CFT financing against third-party or government contributions, and tracks deliverables."
        : "Módulo de inteligencia financiera que valoriza horas docentes, infraestructura y fondos monetarios. Discrimina con precisión el origen del financiamiento (recursos propios del CFT vs. fuentes externas) y cataloga entregables generados.",
      image: "/images/kimun/dashboard-recursos.jpg",
      metrics: [
        { label: locale === "en" ? "Valued Investment" : "Inversión Valorizada", value: "$6.484.000", detail: locale === "en" ? "CLP total budget administered across initiatives" : "Presupuesto global administrado en CLP" },
        { label: locale === "en" ? "Human Capital" : "Recurso Humano", value: "$3.794.000", detail: locale === "en" ? "58.5% allocated to faculty & specialist hours" : "58.5% correspondiente a horas docente y especialistas" },
        { label: locale === "en" ? "Infrastructure" : "Infraestructura", value: "$1.620.000", detail: locale === "en" ? "25% in technical labs and campus facilities" : "25% en laboratorios, talleres y equipamiento" },
        { label: locale === "en" ? "Institutional Funds" : "Fondos Propios", value: "$5.804.000", detail: locale === "en" ? "89.5% direct CFT funding vs. $680K external" : "89.5% financiamiento CFT vs. $680K externos" },
      ],
      highlights: [
        {
          title: locale === "en" ? "Tangible Deliverables Catalog" : "Catálogo de Entregables",
          desc: locale === "en"
            ? "Tracking 10 applied research documents, 7 final reports, prototypes, technical manuals, and workshops."
            : "Conteo de 10 investigaciones aplicadas, 7 informes técnicos, prototipos, manuales y capacitaciones."
        },
        {
          title: locale === "en" ? "Campus Budget Valuation" : "Valorización por Sede",
          desc: locale === "en"
            ? "Detailed expenditure breakdown: Central ($2.54M), Linares ($1.91M), Curicó, Cauquenes, and Talca."
            : "Desglose del gasto por campus (Casa Central $2.54M, Linares $1.91M, Curicó, Cauquenes y Talca)."
        },
        {
          title: locale === "en" ? "Internal vs. External Split" : "Auditoría de Financiamiento",
          desc: locale === "en"
            ? "Automated pie comparison confirming transparency in institutional vs. partner-funded capital."
            : "Comparativa que audita la proporción de fondos institucionales frente a apalancamiento de terceros."
        }
      ]
    },
    participantes: {
      id: "participantes",
      tabLabel: locale === "en" ? "05. Participants & Impact" : "05. Participantes e Impacto",
      shortLabel: "Participantes",
      icon: <Users className="w-4 h-4" />,
      badge: locale === "en" ? "Human Ecosystem" : "Ecosistema Humano",
      title: locale === "en" ? "Beneficiaries, Community & Academic Roles" : "Beneficiarios, Comunidad & Perfiles",
      subtitle: locale === "en"
        ? "Comprehensive quantification of internal members (students, faculty) and external partners (firms, NGOs, OMIL)"
        : "Cuantificación de actores internos (estudiantes, docentes) y contrapartes comunitarias del Maule",
      desc: locale === "en"
        ? "Human ecosystem mapping breaking down participant profiles, external institutional partners (companies, municipal OMILs, community boards), and total attendance figures across all campuses, featuring an exceptional 1:7.2 impact ratio."
        : "Mapeo detallado del capital humano movilizado. Discrimina participantes internos (estudiantes, docentes, titulados, directivos) y beneficiarios externos (empresas, OMIL, juntas vecinales), destacando una relación de impacto de 1:7.2.",
      image: "/images/kimun/dashboard-participantes.jpg",
      metrics: [
        { label: locale === "en" ? "Internal Participants" : "Participantes Internos", value: "130", detail: locale === "en" ? "52 students (40%), 44 teachers (34%), alumni" : "52 estudiantes (40%), 44 docentes (34%), titulados" },
        { label: locale === "en" ? "Community Attendees" : "Asistentes Comunidad", value: "932", detail: locale === "en" ? "Audience in technical fairs, seminars & workshops" : "Público en ferias, charlas y talleres territoriales" },
        { label: locale === "en" ? "External Partners" : "Socios Comunitarios", value: "16+", detail: locale === "en" ? "Enterprises (16%), Community groups, OMIL" : "Empresas (16%), Agrupaciones, OMIL, territorio" },
        { label: locale === "en" ? "Impact Ratio" : "Ratio de Impacto", value: "1 : 7.2", detail: locale === "en" ? "7.2 community beneficiaries per internal member" : "7.2 beneficiarios comunitarios por integrante interno" },
      ],
      highlights: [
        {
          title: locale === "en" ? "Academic Profile Segmentation" : "Segmentación por Perfil",
          desc: locale === "en"
            ? "Granular breakdown: Students (40%), Teachers (34%), Alumni (5%), Program coordinators, and leadership."
            : "Segmentación: Estudiantes (40%), Docentes (34%), Titulados (5%), Coordinadores y Directivos."
        },
        {
          title: locale === "en" ? "Geographic Attendance Reach" : "Asistencia por Sede",
          desc: locale === "en"
            ? "Community footprint leader: Curicó (461 attendees), Cauquenes (160), Linares (130), Talca (100)."
            : "Impacto territorial líder: Curicó (461 asistentes), Cauquenes (160), Linares (130), Talca (100)."
        },
        {
          title: locale === "en" ? "Dual Impact Frequencies" : "Impacto Interno vs. Externo",
          desc: locale === "en"
            ? "Dual horizontal bar charts contrasting curricular updates against socio-economic improvements."
            : "Evaluación en paralelo de mejoras formativas pedagógicas vs. beneficios económicos directos."
        }
      ]
    },
    mapa: {
      id: "mapa",
      tabLabel: locale === "en" ? "06. Territory (Maule Map)" : "06. Territorio (Mapa Maule)",
      shortLabel: "Mapa Maule",
      icon: <MapPin className="w-4 h-4" />,
      badge: "GIS & Leaflet",
      title: locale === "en" ? "Geospatial Territorial Coverage" : "Cobertura Territorial Geoespacial",
      subtitle: locale === "en"
        ? "Interactive cartographic visualization mapping initiatives across the 30 municipalities of Maule Region"
        : "Visualización cartográfica interactiva de las 30 comunas de la Región del Maule",
      desc: locale === "en"
        ? "Geographic Information System (GIS) component powered by Leaflet and OpenStreetMap. Geolocates initiatives with proportional proportional bubbles, auditing institutional presence across local communes, provincial zones, and remote rural districts."
        : "Sistema de información geográfica (GIS) implementado con Leaflet y OpenStreetMap. Georreferencia iniciativas con círculos proporcionales, auditando la presencia institucional en comunas rurales y cabeceras provinciales.",
      image: "/images/kimun/dashboard-mapa.jpg",
      metrics: [
        { label: locale === "en" ? "Local / Communal" : "Alcance Comunal", value: "12", detail: locale === "en" ? "Deployed directly across 10 specific municipalities" : "Desplegadas en 10 comunas específicas del Maule" },
        { label: locale === "en" ? "Provincial Scope" : "Alcance Provincial", value: "4", detail: locale === "en" ? "Extended impact across Talca, Curicó & Linares" : "Impacto extendido en Provincias de Talca, Curicó y Linares" },
        { label: locale === "en" ? "Regional Scope" : "Alcance Regional", value: "3", detail: locale === "en" ? "Cross-regional deployment throughout the VII Region" : "Cobertura global en toda la VII Región del Maule" },
        { label: locale === "en" ? "Leading Commune" : "Comuna Líder", value: "Constitución (3)", detail: locale === "en" ? "Followed by Curicó, Talca, Empedrado e Iquique" : "Seguida por Curicó, Talca, Empedrado e Iquique" },
      ],
      highlights: [
        {
          title: locale === "en" ? "Interactive GIS Map Layer" : "Capa Cartográfica Leaflet",
          desc: locale === "en"
            ? "Custom Leaflet map layer with circle markers scaled to initiative density and interactive popups."
            : "Capa cartográfica con marcadores proporcionales a la densidad de iniciativas y popups interactivos."
        },
        {
          title: locale === "en" ? "Hierarchical Aggregation Switcher" : "Resumen Jerárquico Territorial",
          desc: locale === "en"
            ? "Real-time switcher filtering between Communes, Provinces, and Regional boundaries."
            : "Conmutador que agrupa datos por Comunas, Provincias y límites regionales oficiales de Chile."
        },
        {
          title: locale === "en" ? "Decentralization Audit" : "Descentralización Institucional",
          desc: locale === "en"
            ? "Monitors ratio of activities in urban capitals vs. remote coastal or Andean rural communities."
            : "Monitorea el equilibrio entre capitales provinciales y comunidades costeras o andinas vulnerables."
        }
      ]
    }
  };

  const currentView = views[activeTab] || views.general;

  return (
    <div className="space-y-8 my-10">
      {/* Header of Section */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-0 font-semibold px-2.5 py-0.5">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            {locale === "en" ? "Executive Analytics Suite" : "Suite Analítica Ejecutiva"}
          </Badge>
          <Badge variant="outline" className="border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/5">
            <Database className="w-3 h-3 mr-1" />
            {locale === "en" ? "100% Real Institutional Data" : "100% Datos Reales Institucionales"}
          </Badge>
          <Badge variant="outline" className="border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-500/5">
            <BarChart3 className="w-3 h-3 mr-1" />
            Chart.js + Leaflet GIS
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {locale === "en" ? "Interactive Analytics & Impact Dashboard" : "Dashboard Analítico & Inteligencia Institucional"}
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-3xl leading-relaxed">
          {locale === "en" 
            ? "Comprehensive business intelligence module developed for CFT San Agustín. Explores cross-sectional KPIs, sustainability impact (UN 2030 Agenda), academic curricular integration, budgets, and territorial geolocation in the Maule Region."
            : "Módulo integral de inteligencia institucional desarrollado para el CFT San Agustín. Explora KPIs transversales, compromiso ODS (Agenda 2030), vinculación curricular, presupuestos valorizados y cobertura geográfica en la Región del Maule."}
        </p>
      </div>

      {/* Global Top KPI Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <Card className="bg-card/70 backdrop-blur-xs border-primary/20 hover:border-primary/40 transition-all shadow-xs">
          <CardContent className="p-3.5">
            <div className="flex items-center gap-2 text-primary mb-1">
              <BarChart3 className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {locale === "en" ? "Total Activities" : "Actividades Totales"}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-foreground tracking-tight">52</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
              43 Inic. (83%) · 9 Prop. (17%)
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur-xs border-blue-500/20 hover:border-blue-500/40 transition-all shadow-xs">
          <CardContent className="p-3.5">
            <div className="flex items-center gap-2 text-blue-500 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {locale === "en" ? "Impact Reach" : "Impacto Estimado"}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-blue-500 tracking-tight">1.062</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
              130 Internos · 932 Comunidad
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur-xs border-emerald-500/20 hover:border-emerald-500/40 transition-all shadow-xs">
          <CardContent className="p-3.5">
            <div className="flex items-center gap-2 text-emerald-500 mb-1">
              <Globe className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {locale === "en" ? "UN SDGs Linked" : "Compromiso ODS"}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-emerald-500 tracking-tight">17 / 17</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
              {locale === "en" ? "100% 2030 Agenda covered" : "100% Agenda 2030 cubierta"}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur-xs border-amber-500/20 hover:border-amber-500/40 transition-all shadow-xs">
          <CardContent className="p-3.5">
            <div className="flex items-center gap-2 text-amber-500 mb-1">
              <Briefcase className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {locale === "en" ? "Valued Budget" : "Presupuesto Total"}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-amber-500 tracking-tight">$6.48M</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
              CLP Directo + Infraestructura
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur-xs border-purple-500/20 hover:border-purple-500/40 transition-all shadow-xs col-span-2 sm:col-span-1">
          <CardContent className="p-3.5">
            <div className="flex items-center gap-2 text-purple-500 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {locale === "en" ? "Conversion Rate" : "Tasa Conversión"}
              </span>
            </div>
            <div className="text-2xl font-extrabold text-purple-500 tracking-tight">40%</div>
            <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
              {locale === "en" ? "0.5 days avg. maturation" : "0.5 días maduración promedio"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Tabs Selector */}
      <Card className="overflow-hidden border-border/80 shadow-md">
        <CardHeader className="bg-muted/30 border-b p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-primary" />
              {locale === "en" ? "Explore Dashboard Views (6 Modules):" : "Explorar Vistas del Dashboard (6 Módulos):"}
            </span>
            <span className="text-[11px] font-mono text-muted-foreground/70 hidden sm:inline">
              {locale === "en" ? "Click any tab to inspect real visuals" : "Haz clic en una pestaña para inspeccionar datos reales"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {Object.values(views).map((view) => {
              const isActive = activeTab === view.id;
              return (
                <Button
                  key={view.id}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setActiveTab(view.id)}
                  className={`flex flex-col items-start h-auto py-2.5 px-3 text-left justify-start transition-all relative ${
                    isActive 
                      ? "shadow-sm ring-2 ring-primary/30" 
                      : "hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider opacity-75">
                      {view.id.toUpperCase()}
                    </span>
                    <span className={isActive ? "text-primary-foreground" : "text-muted-foreground"}>
                      {view.icon}
                    </span>
                  </div>
                  <span className="text-xs font-bold truncate w-full">
                    {view.shortLabel}
                  </span>
                </Button>
              );
            })}
          </div>
        </CardHeader>

        {/* Tab Content Display Area */}
        <CardContent className="p-4 sm:p-6 space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* View Context Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-border/50">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs py-0.5 px-2.5 bg-primary/10 text-primary font-semibold">
                      {currentView.badge}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">
                      Módulo {currentView.tabLabel.split(".")[0]}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {currentView.title}
                  </h3>
                  <p className="text-xs md:text-sm text-primary font-medium mt-0.5">
                    {currentView.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-3xl">
                    {currentView.desc}
                  </p>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => setIsZoomOpen(true)}
                    className="flex items-center gap-1.5 shadow-sm"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    {locale === "en" ? "Inspect Fullscreen" : "Inspeccionar Pantalla Completa"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex items-center gap-1.5"
                  >
                    <a href={currentView.image} target="_blank" rel="noopener noreferrer" download>
                      <Download className="w-3.5 h-3.5" />
                      {locale === "en" ? "Download HD" : "Descargar HD"}
                    </a>
                  </Button>
                </div>
              </div>

              {/* Specific View Metrics Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {currentView.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-muted/40 border border-border/50">
                    <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-foreground mt-0.5">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-muted-foreground/80 mt-0.5 leading-tight">
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Window Mockup Frame */}
              <div className="rounded-xl border border-border/80 overflow-hidden shadow-lg bg-card">
                {/* Browser-like Header Bar */}
                <div className="bg-muted/80 border-b border-border/70 px-4 py-2.5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <div className="hidden sm:flex items-center ml-2 px-3 py-1 rounded-md bg-background/80 text-[11px] font-mono text-muted-foreground border border-border/50">
                      <span>http://kimun.cftsanagustin.cl/kimun/dashboard#{currentView.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {locale === "en" ? "Live Production Capture" : "Captura en Producción Real"}
                    </Badge>
                  </div>
                </div>

                {/* Clickable Image Viewer Container */}
                <div
                  onClick={() => setIsZoomOpen(true)}
                  className="relative cursor-zoom-in group bg-slate-950/20 flex items-center justify-center overflow-hidden max-h-[600px]"
                  title={locale === "en" ? "Click to inspect full resolution in lightbox" : "Haz clic para abrir el visor en alta resolución"}
                >
                  <img
                    src={currentView.image}
                    alt={currentView.title}
                    className="w-full h-auto object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <div className="px-4 py-2 rounded-full bg-background/90 text-foreground text-xs font-semibold shadow-lg flex items-center gap-2 border border-border/50">
                      <Maximize2 className="w-3.5 h-3.5 text-primary" />
                      {locale === "en" ? "Click to view full image in lightbox" : "Clic para ampliar y explorar en detalle"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Highlights / Engineering Points */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  {locale === "en" ? "Technical Highlights & Implementation" : "Puntos Clave de Ingeniería & Analítica"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentView.highlights.map((h, i) => (
                    <div key={i} className="p-3.5 rounded-lg bg-muted/30 border border-border/60 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-2 text-foreground font-semibold text-xs mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{h.title}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed pl-5">
                        {h.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Lightbox / Fullscreen Modal */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4"
            onClick={() => setIsZoomOpen(false)}
          >
            {/* Modal Controls Bar */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between gap-4 p-3 mb-2 bg-card/90 rounded-lg border border-border/60 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Badge variant="secondary" className="text-xs">{currentView.shortLabel}</Badge>
                <span className="font-bold text-sm text-foreground truncate">{currentView.title}</span>
                <span className="text-xs text-muted-foreground hidden md:inline">({currentView.subtitle})</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="text-xs"
                >
                  <a href={currentView.image} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    {locale === "en" ? "Open Original" : "Abrir Original"}
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsZoomOpen(false)}
                  className="hover:bg-muted text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Scrollable Zoom Image Container */}
            <div
              className="w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-xl border border-border/40 shadow-2xl bg-card p-1"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentView.image}
                alt={currentView.title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="text-[11px] text-white/60 mt-2 font-mono">
              {locale === "en" ? "Press ESC or click outside to close" : "Presiona ESC o haz clic fuera para cerrar"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
