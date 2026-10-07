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
  Maximize2,
  ExternalLink,
  Download,
  X,
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

      {/* Real KPIs Banner from Kimün */}
      <div className="rounded-xl border border-border/80 bg-card/60 p-2 sm:p-3 shadow-xs overflow-hidden flex items-center justify-center">
        <img
          src="/images/kimun/kpis.png"
          alt="KPIs Institucionales Kimün"
          className="w-full max-h-[140px] object-contain"
        />
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
              {/* View Context Header - Full Width for Title, Subtitle and Description */}
              <div className="space-y-2 pb-2 border-b border-border/50">
                <div className="flex items-center gap-2">
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
                <p className="text-xs md:text-sm text-primary font-medium">
                  {currentView.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {currentView.desc}
                </p>
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
                {/* Browser-like Header Bar with Action Buttons on Top Right */}
                <div className="bg-muted/80 border-b border-border/70 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <div className="flex items-center ml-2 px-3 py-1 rounded-md bg-background/80 text-[11px] font-mono text-muted-foreground border border-border/50">
                      <span>http://cftsanagustin.cl/kimun/dashboard#{currentView.id}</span>
                    </div>
                  </div>
                  {/* Action Buttons: Inspeccionar Pantalla Completa y Descargar HD */}
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
                      <a href={currentView.image} target="_blank" rel="noopener noreferrer" download>
                        <Download className="w-3.5 h-3.5" />
                        {locale === "en" ? "Download HD" : "Descargar HD"}
                      </a>
                    </Button>
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
