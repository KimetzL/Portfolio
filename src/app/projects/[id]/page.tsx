"use client";

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
  Terminal
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
    technologies: ["PowerBI"],
    githubUrl: "",
    demoUrl: "",
    startDate: "2023",
    endDate: "2023",
    client: "Diputación Foral de Bizkaia",
    category: "Análisis de Datos",
    features: [
      "Dashboards interactivos con múltiples filtros",
      "Visualización de datos abiertos de Bizkaia",
      "Integración con plataforma web Gardentasuna",
      "Diseño centrado en el usuario",
      "Actualización automática de datos",
      "Navegación intuitiva y accesible"
    ],
    challenges: [
      "Procesamiento y limpieza de datos abiertos complejos",
      "Diseño de visualizaciones comprensibles para usuarios no técnicos",
      "Integración con sistemas existentes de la administración",
      "Mantenimiento de la privacidad y seguridad de los datos"
    ],
    outcomes: [
      "Mejora significativa en la accesibilidad de datos públicos",
      "Facilitación del análisis de información para ciudadanos",
      "Herramienta útil para toma de decisiones administrativas",
      "Ejemplo exitoso de uso de datos abiertos"
    ]
  },
  2: {
    title: "Chatbot administrativo",
    description: "Desarrollé un chatbot administrativo capaz de analizar las consultas de los usuarios y determinar si se refieren a un ayuntamiento, un departamento o un trámite administrativo. El proyecto está implementado en Python, usando librerías como pandas, faiss, rapidfuzz y transformers, con una interfaz interactiva en Gradio. Incluye un instalador que prepara el entorno y descarga los modelos necesarios para ejecutarlo localmente.",
    longDescription: `
      Este proyecto consiste en el desarrollo de un chatbot administrativo avanzado diseñado para analizar y clasificar automáticamente las consultas de los usuarios. El sistema utiliza procesamiento de lenguaje natural e inteligencia artificial para determinar si las preguntas se refieren a ayuntamientos específicos, departamentos administrativos, o trámites particulares.

      La implementación técnica se basa en Python y combina múltiples librerías especializadas: pandas para el manejo de datos, faiss para búsqueda semántica eficiente, rapidfuzz para coincidencias aproximadas, y transformers para modelos de lenguaje pre-entrenados. La interfaz de usuario se desarrolló con Gradio, proporcionando una experiencia interactiva y amigable.

      Una de las características más destacadas del proyecto es su instalador automático, que prepara el entorno completo y descarga los modelos necesarios para ejecutar el chatbot localmente. Esto facilita su despliegue en diferentes entornos sin requerir configuración manual compleja.
    `,
    image: "/images/Chatbot.jpg",
    technologies: ["Python", "Pandas", "Faiss", "Rapidfuzz", "Transformers", "Gradio"],
    githubUrl: "https://github.com/KimetzL/ChatbotDFB",
    demoUrl: "",
    startDate: "2024",
    endDate: "2024",
    client: "Proyecto Personal",
    category: "Inteligencia Artificial",
    features: [
      "Análisis automático de consultas administrativas",
      "Clasificación de preguntas por categorías",
      "Interfaz interactiva con Gradio",
      "Procesamiento de lenguaje natural",
      "Instalador automático del entorno",
      "Ejecución local sin dependencias externas"
    ],
    challenges: [
      "Entrenamiento de modelos para lenguaje administrativo específico",
      "Implementación de búsqueda semántica eficiente",
      "Creación de interfaz intuitiva para usuarios no técnicos",
      "Automatización completa del proceso de instalación"
    ],
    outcomes: [
      "Alta precisión en clasificación de consultas",
      "Reducción del tiempo de respuesta administrativa",
      "Herramienta reutilizable para diferentes contextos",
      "Código abierto disponible para la comunidad"
    ]
  },
  3: {
    title: "Informe de Ciberseguridad: Proyecto Bootcamp",
    description: "Como parte del Bootcamp de Ciberseguridad de The Bridge, participé en un proyecto colaborativo de dos semanas para la startup Deiviator. Mi labor incluyó auditorías de seguridad (OSINT, Pentesting y análisis de vulnerabilidades), implementación de un entorno self-hosted con Ubuntu, VPN, Suricata, Firewall UFW y Docker, y automatización de auditorías mediante GitHub Actions integrando Semgrep, ESLint, Gitleaks y SBOMs.",
    longDescription: `
      Durante el Bootcamp de Ciberseguridad de The Bridge, participé en un proyecto intensivo de dos semanas desarrollado para la startup Deiviator. Esta experiencia práctica me permitió aplicar conocimientos teóricos en un entorno real, abordando múltiples aspectos de la ciberseguridad moderna.

      Mis responsabilidades principales incluyeron la realización de auditorías de seguridad completas, comenzando con técnicas de OSINT (Open Source Intelligence) para recopilar información pública, seguido de pruebas de pentesting para identificar vulnerabilidades explotables, y análisis detallado de debilidades en sistemas y aplicaciones.

      Paralelamente, implementé un entorno completo self-hosted utilizando Ubuntu como sistema base. Configuré una infraestructura segura que incluía VPN para acceso remoto seguro, Suricata para detección de intrusiones, Firewall UFW para protección de red, y Docker para contenerización de servicios. Además, desarrollé pipelines de automatización usando GitHub Actions que integraban herramientas como Semgrep para análisis estático de código, ESLint para calidad de código, Gitleaks para detección de filtraciones de información, y generación de SBOMs (Software Bill of Materials).
    `,
    image: "/images/Ciberseguridad.jpg",
    technologies: ["OSINT", "Pentesting", "Ubuntu", "VPN", "Suricata", "Docker", "GitHub Actions"],
    githubUrl: "",
    demoUrl: "",
    startDate: "2024",
    endDate: "2024",
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

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;
  
  const project = projectData[projectId as keyof typeof projectData];

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

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Características Clave</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Desafíos y Soluciones</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-500/10 text-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          !
                        </div>
                        <span className="text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Outcomes */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Resultados y Logros</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
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