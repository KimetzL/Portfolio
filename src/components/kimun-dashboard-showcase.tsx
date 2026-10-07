"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";
import {
  BarChart3,
  Globe,
  Briefcase,
  Users,
  MapPin,
  GraduationCap,
  Maximize2,
  ExternalLink,
  Download,
  X,
  Layers,
  Sparkles,
  Clock,
  TrendingUp,
  ChevronLeft,
  ChevronRight
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

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * value;

      const formatted =
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("es-CL");

      setDisplayValue(formatted);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export function KimunDashboardShowcase() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState("general");
  const [isZoomOpen, setIsZoomOpen] = useState(false);

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
        { label: locale === "en" ? "Prosperity Dimension" : "Dimensión Prosperidad", value: "29%", detail: locale === "en" ? "38 initiatives in decent work & innovation" : "38 initiatives en trabajo decente e innovación" },
        { label: locale === "en" ? "Planet Dimension" : "Dimensión Planeta", value: "19%", detail: locale === "en" ? "25 projects in climate action & ecosystems" : "25 proyectos en acción climática y biosfera" },
        { label: locale === "en" ? "Partnerships & Peace" : "Alianzas & Paz", value: "16%", detail: locale === "en" ? "21 projects fostering territorial networks" : "21 proyectos tejiendo redes y justicia social" },
      ]
    },
    academico: {
      id: "academico",
      tabLabel: locale === "en" ? "03. Academic Linkage" : "03. Vinculación Académica",
      shortLabel: "Académico",
      icon: <GraduationCap className="w-4 h-4" />,
      badge: locale === "en" ? "Curricular Integration" : "Tributación Curricular",
      title: locale === "en" ? "Curricular Tributation & Disciplinary Areas" : "Tributación Curricular & Áreas Disciplinares",
      subtitle: locale === "en"
        ? "Direct alignment between field initiatives and formal academic degree plans across 4 institutional schools"
        : "Articulación directa entre iniciativas de vinculación y mallas curriculares de 4 escuelas del CFT",
      desc: locale === "en"
        ? "Educational analytics view auditing curricular bidirectional impact. Demonstrates that 82% of all initiatives link directly to formal accredited coursework, with technology and software engineering careers representing the largest driving volume (34%)."
        : "Vista de analítica pedagógica que audita la bidireccionalidad curricular. Demuestra que el 82% de iniciativas tributan a asignaturas oficiales de carrera, lideradas por carreras de Tecnología e Informática (34% del volumen total).",
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

  const viewKeys = Object.keys(views);
  const currentIndex = viewKeys.indexOf(activeTab);
  const currentView = views[activeTab] || views.general;

  const handlePrevView = useCallback(() => {
    const prevIdx = (currentIndex - 1 + viewKeys.length) % viewKeys.length;
    setActiveTab(viewKeys[prevIdx]);
  }, [currentIndex, viewKeys]);

  const handleNextView = useCallback(() => {
    const nextIdx = (currentIndex + 1) % viewKeys.length;
    setActiveTab(viewKeys[nextIdx]);
  }, [currentIndex, viewKeys]);

  // Keyboard controls: Escape to close, ArrowLeft / ArrowRight to cycle views in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomOpen(false);
      } else if (isZoomOpen && e.key === "ArrowLeft") {
        handlePrevView();
      } else if (isZoomOpen && e.key === "ArrowRight") {
        handleNextView();
      }
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
  }, [isZoomOpen, handlePrevView, handleNextView]);

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

      {/* Global Top KPI Ribbon — React + Tailwind CSS (Stretched layout with CountUp & Contextual progress bars) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* 01. Actividades Totales */}
        <Card className="bg-card/70 backdrop-blur-xs border-primary/20 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between">
          <CardContent className="p-3 sm:p-3.5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1.5 text-primary mb-1">
                <BarChart3 className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                  {locale === "en" ? "Total Activities" : "Actividades Totales"}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight tabular-nums">
                <AnimatedNumber value={52} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {locale === "en" ? "43 init. (83%) · 9 prop. (17%)" : "43 inic. (83%) · 9 prop. (17%)"}
              </div>
            </div>
            {/* Visual Context Progress Bar */}
            <div className="w-full bg-muted/60 rounded-full h-1 mt-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "83%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* 02. Impacto Estimado */}
        <Card className="bg-card/70 backdrop-blur-xs border-blue-500/20 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between">
          <CardContent className="p-3 sm:p-3.5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1.5 text-blue-500 mb-1">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                  {locale === "en" ? "Estimated Impact" : "Impacto Estimado"}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-blue-500 tracking-tight tabular-nums">
                <AnimatedNumber value={1062} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {locale === "en" ? "Participants & community" : "Participantes y comunidad"}
              </div>
            </div>
            <div className="w-full bg-muted/60 rounded-full h-1 mt-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-blue-500 rounded-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* 03. Compromiso ODS */}
        <Card className="bg-card/70 backdrop-blur-xs border-emerald-500/20 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between">
          <CardContent className="p-3 sm:p-3.5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1.5 text-emerald-500 mb-1">
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                  {locale === "en" ? "SDG Commitment" : "Compromiso ODS"}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-500 tracking-tight tabular-nums">
                <AnimatedNumber value={17} /> / 17
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {locale === "en" ? "100% 2030 Agenda (17 SDGs)" : "100% Agenda 2030 (17 ODS)"}
              </div>
            </div>
            <div className="w-full bg-muted/60 rounded-full h-1 mt-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* 04. Duración Promedio */}
        <Card className="bg-card/70 backdrop-blur-xs border-sky-500/20 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between">
          <CardContent className="p-3 sm:p-3.5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1.5 text-sky-500 mb-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                  {locale === "en" ? "Avg. Duration" : "Duración Promedio"}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-sky-500 tracking-tight tabular-nums">
                <AnimatedNumber value={12} suffix={locale === "en" ? " days" : " días"} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {locale === "en" ? "Avg. days per initiative" : "Tiempo medio por iniciativa"}
              </div>
            </div>
            <div className="w-full bg-muted/60 rounded-full h-1 mt-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                className="h-full bg-sky-500 rounded-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* 05. Ratio de Impacto */}
        <Card className="bg-card/70 backdrop-blur-xs border-purple-500/20 hover:border-purple-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between">
          <CardContent className="p-3 sm:p-3.5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1.5 text-purple-500 mb-1">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                  {locale === "en" ? "Impact Ratio" : "Ratio de Impacto"}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-purple-500 tracking-tight tabular-nums">
                1 : <AnimatedNumber value={7.2} decimals={1} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {locale === "en" ? "Beneficiaries / participant" : "Beneficiarios por participante"}
              </div>
            </div>
            <div className="w-full bg-muted/60 rounded-full h-1 mt-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-purple-500 rounded-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* 06. Inversión Valorizada */}
        <Card className="bg-card/70 backdrop-blur-xs border-amber-500/20 hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between">
          <CardContent className="p-3 sm:p-3.5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
                  {locale === "en" ? "Valued Budget" : "Inversión Total"}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-amber-500 tracking-tight tabular-nums">
                <AnimatedNumber value={6.48} prefix="$" suffix="M" decimals={2} />
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                {locale === "en" ? "CLP total funds ($6.484.000)" : "CLP fondos ($6.484.000)"}
              </div>
            </div>
            <div className="w-full bg-muted/60 rounded-full h-1 mt-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "89.5%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
                className="h-full bg-amber-500 rounded-full"
              />
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

                {/* Clickable Image Viewer Container with Next.js Image Optimization */}
                <div
                  onClick={() => setIsZoomOpen(true)}
                  className="relative cursor-zoom-in group bg-slate-950/20 flex items-center justify-center overflow-hidden max-h-[600px] w-full"
                  title={locale === "en" ? "Click to inspect full resolution in lightbox" : "Haz clic para abrir el visor en alta resolución"}
                >
                  <Image
                    src={currentView.image}
                    alt={currentView.title}
                    width={1600}
                    height={900}
                    priority={activeTab === "general"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
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

      {/* Lightbox / Fullscreen Modal with Keyboard & Arrow Navigation */}
      <AnimatePresence>
        {isZoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-2 sm:p-4"
            onClick={() => setIsZoomOpen(false)}
          >
            {/* Modal Controls Bar */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between gap-4 p-3 mb-2 bg-card/90 rounded-lg border border-border/60 shadow-xl shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Badge variant="secondary" className="text-xs font-mono">
                  {currentIndex + 1} / {viewKeys.length}
                </Badge>
                <Badge variant="outline" className="text-xs hidden sm:inline-flex">
                  {currentView.shortLabel}
                </Badge>
                <span className="font-bold text-sm text-foreground truncate">
                  {currentView.title}
                </span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                {/* Previous & Next quick buttons in header */}
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handlePrevView}
                  className="h-8 w-8 text-xs"
                  title={locale === "en" ? "Previous view (←)" : "Vista anterior (←)"}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleNextView}
                  className="h-8 w-8 text-xs"
                  title={locale === "en" ? "Next view (→)" : "Siguiente vista (→)"}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="text-xs hidden md:inline-flex"
                >
                  <a href={currentView.image} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    {locale === "en" ? "Original" : "Original"}
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

            {/* Scrollable Zoom Image Container with Floating Left / Right Chevrons */}
            <div
              className="relative w-full max-w-6xl flex-1 flex items-center justify-center overflow-hidden rounded-xl border border-border/40 shadow-2xl bg-card/50 p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Prev Button */}
              <Button
                variant="secondary"
                size="icon"
                onClick={handlePrevView}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-background/80 hover:bg-background text-foreground shadow-2xl border border-border/60 hidden sm:flex items-center justify-center transition-transform hover:scale-110"
                title={locale === "en" ? "Previous view (←)" : "Vista anterior (←)"}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Floating Next Button */}
              <Button
                variant="secondary"
                size="icon"
                onClick={handleNextView}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-background/80 hover:bg-background text-foreground shadow-2xl border border-border/60 hidden sm:flex items-center justify-center transition-transform hover:scale-110"
                title={locale === "en" ? "Next view (→)" : "Siguiente vista (→)"}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* High-res Image */}
              <div className="w-full h-full max-h-[75vh] overflow-auto flex items-center justify-center">
                <Image
                  key={currentView.id}
                  src={currentView.image}
                  alt={currentView.title}
                  width={1920}
                  height={1080}
                  priority
                  sizes="95vw"
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Modal Bottom Controls: Pill selectors + keyboard hint */}
            <div 
              className="flex flex-col items-center gap-1.5 mt-2 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Module Jump Pills */}
              <div className="flex items-center justify-center gap-1.5 flex-wrap max-w-2xl px-2">
                {viewKeys.map((key, idx) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-2.5 py-1 text-[11px] rounded-full transition-all border ${
                      activeTab === key
                        ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm scale-105"
                        : "bg-background/60 hover:bg-background text-muted-foreground hover:text-foreground border-border/50"
                    }`}
                  >
                    {idx + 1}. {views[key].shortLabel}
                  </button>
                ))}
              </div>

              {/* Keyboard helper hint */}
              <div className="text-[11px] text-white/60 font-mono flex items-center gap-2">
                <span>
                  {locale === "en" 
                    ? "Use ← / → arrows to navigate · ESC to close" 
                    : "Usa las flechas ← / → para navegar · ESC para cerrar"}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
