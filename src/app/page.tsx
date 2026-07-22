"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Database, 
  Shield, 
  Globe,
  Server,
  Brain,
  Lock,
  Terminal,
  ArrowRight,
  Sparkles
} from "lucide-react";

const skills = {
  "IA & Big Data": [
    { name: "Python", icon: <Code className="w-4 h-4" /> },
    { name: "Power BI", icon: <Database className="w-4 h-4" /> },
    { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },
    { name: "Scikit-learn", icon: <Brain className="w-4 h-4" /> },
    { name: "MySQL", icon: <Database className="w-4 h-4" /> },
  ],
  "Sistemas y Virtualización": [
    { name: "Active Directory", icon: <Server className="w-4 h-4" /> },
    { name: "Docker", icon: <Server className="w-4 h-4" /> },
    { name: "Linux", icon: <Terminal className="w-4 h-4" /> },
    { name: "Windows Server", icon: <Server className="w-4 h-4" /> },
    { name: "VMware", icon: <Server className="w-4 h-4" /> },
  ],
  "Ciberseguridad": [
    { name: "Metasploit", icon: <Shield className="w-4 h-4" /> },
    { name: "Criptografía", icon: <Lock className="w-4 h-4" /> },
    { name: "Burp Suite", icon: <Lock className="w-4 h-4" /> },
    { name: "Kali Linux", icon: <Terminal className="w-4 h-4" /> },
    { name: "Análisis forense", icon: <Shield className="w-4 h-4" /> },
  ],
};

const projects = [
  {
    id: 1,
    title: "Dashboards interactivos en PowerBI",
    description: "Durante mi tiempo en la Diputación Foral de Bizkaia, desarrollé dashboards interactivos utilizando PowerBI gracias a los datos abiertos de Open Data Bizkaia. Estos paneles permitieron visualizar la información de manera más clara e intuitiva para la web \"Gardentasuna\", facilitando la comprensión de los datos.",
    image: "/images/Graficas.jpg",
    technologies: ["PowerBI", "Design Systems", "Data Visualization"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
  },
  {
    id: 2,
    title: "Chatbot administrativo",
    description: "Desarrollé un chatbot administrativo capaz de analizar las consultas de los usuarios y determinar si se refieren a un ayuntamiento, un departamento o un trámite administrativo. El proyecto está implementado en Python, usando librerías como pandas, faiss, rapidfuzz y transformers, con una interfaz interactiva en Gradio. Incluye un instalador que prepara el entorno y descarga los modelos necesarios para ejecutarlo localmente.",
    image: "/images/Chatbot.jpg",
    technologies: ["Python", "Pandas", "Faiss", "Rapidfuzz", "Transformers", "Gradio"],
    githubUrl: "https://github.com/KimetzL/ChatbotDFB",
    demoUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Informe de Ciberseguridad: Proyecto Bootcamp",
    description: "Como parte del Bootcamp de Ciberseguridad de The Bridge, participé en un proyecto colaborativo de dos semanas para la startup Deiviator. Mi labor incluyó auditorías de seguridad (OSINT, Pentesting y análisis de vulnerabilidades), implementación de un entorno self-hosted con Ubuntu, VPN, Suricata, Firewall UFW y Docker, y automatización de auditorías mediante GitHub Actions integrando Semgrep, ESLint, Gitleaks y SBOMs.",
    image: "/images/Ciberseguridad.jpg",
    technologies: ["OSINT", "Pentesting", "Ubuntu", "VPN", "Suricata", "Docker", "GitHub Actions"],
    githubUrl: "",
    demoUrl: "",
    featured: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Disponible para Proyectos</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
          >
            Kimetz Loroño
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Sistemas | Analista de Datos | Ciberseguridad
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                Ver Proyectos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contactar</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Mí</h2>
            <Card className="p-8">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Soy Kimetz, un apasionado por la Tecnología y la Informática. Mi carrera ha estado marcada por ofrecer soluciones tecnológicas eficientes y resolver desafíos de manera creativa en diversas áreas.
                </p>
                <p>
                  Desde mis inicios, me he destacado en la prestación de servicios personalizados, especialmente en el análisis y reparación de hardware. Mi dedicación a este campo ha consolidado una sólida experiencia y habilidades, poniendo de manifiesto mi verdadera fortaleza para abordar problemas de manera analítica y proponer soluciones eficaces. Por otra parte también he desempeñado un papel clave en la gestión de comunicaciones y soporte remoto, lo que ha fortalecido mi habilidad para interactuar efectivamente con los usuarios y ofrecer soluciones a medida.
                </p>
                <p>
                  Así como también he trabajado en áreas clave como la gestión de sistemas informáticos, la administración de Active Directory, la implementación de soluciones de ciberseguridad, y la optimización de sistemas de almacenamiento de datos. Esta experiencia me ha permitido desarrollar una visión integral de la infraestructura tecnológica, garantizando su eficiencia, seguridad y rendimiento.
                </p>
                <p>
                  Actualmente estoy enfocado en la Inteligencia Artificial y el Big Data, áreas que considero clave para el futuro de la innovación tecnológica, ya que mi objetivo es seguir creciendo en el mundo de la tecnología, enfrentando nuevos retos y contribuyendo a la evolución digital de las organizaciones a través de soluciones creativas y eficientes. Creo que destaco por mi capacidad resolutiva, iniciativa y un compromiso constante con el aprendizaje continuo en todas las áreas del sector IT.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades y Experiencia</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="flex items-center gap-1">
                            {skill.icon}
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proyectos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {project.featured && (
                        <Badge className="absolute top-2 right-2" variant="default">
                          Destacado
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href={`/projects/${project.id}`}>
                            Saber Más
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        {project.githubUrl && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contacto</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              ¿Tienes algún proyecto en mente, una consulta o te gustaría colaborar? 
              Envíame un mensaje a través del formulario o conéctate a través de mis redes profesionales.
            </p>

            <ContactForm />

            <div className="flex justify-center gap-4 mt-10">
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/kimetz-loroño" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/KimetzL" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Kimetz Loroño. Desarrollado con Next.js, TypeScript y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}