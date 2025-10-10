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

  // Función para manejar la vista previa del PDF
  const handlePreviewPDF = () => {
    // URL del PDF en la carpeta documents
    const pdfUrl = "/documents/Informe Ciberseguridad DeiviGo.pdf";
    window.open(pdfUrl, '_blank');
  };

  // Función para manejar la descarga del PDF
  const handleDownloadPDF = () => {
    // URL del PDF en la carpeta documents
    const pdfUrl = "/documents/Informe Ciberseguridad DeiviGo.pdf";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Informe Ciberseguridad DeiviGo.pdf';
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
                            <Button size="sm" variant="outline" onClick={handlePreviewPDF}>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              Vista Previa
                            </Button>
                            <Button size="sm" onClick={handleDownloadPDF}>
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