"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import {
  Github,
  Linkedin,
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
import { getFeaturedProjects, getOtherProjects } from "@/data/projects";
import { ProjectImage } from "@/components/project-image";
import { useLanguage } from "@/context/language-context";

const skillIcons: Record<string, React.ReactNode> = {
  Python: <Code className="w-4 h-4" />,
  "Power BI": <Database className="w-4 h-4" />,
  TensorFlow: <Brain className="w-4 h-4" />,
  "Scikit-learn": <Brain className="w-4 h-4" />,
  MySQL: <Database className="w-4 h-4" />,
  "Active Directory": <Server className="w-4 h-4" />,
  Docker: <Server className="w-4 h-4" />,
  Linux: <Terminal className="w-4 h-4" />,
  "Windows Server": <Server className="w-4 h-4" />,
  VMware: <Server className="w-4 h-4" />,
  Metasploit: <Shield className="w-4 h-4" />,
  Criptografía: <Lock className="w-4 h-4" />,
  Cryptography: <Lock className="w-4 h-4" />,
  "Burp Suite": <Lock className="w-4 h-4" />,
  "Kali Linux": <Terminal className="w-4 h-4" />,
  "Análisis forense": <Shield className="w-4 h-4" />,
  "Forensic Analysis": <Shield className="w-4 h-4" />,
};

const skillsData = {
  es: {
    "IA & Big Data": ["Python", "Power BI", "TensorFlow", "Scikit-learn", "MySQL"],
    "Sistemas y Virtualización": ["Active Directory", "Docker", "Linux", "Windows Server", "VMware"],
    "Ciberseguridad": ["Metasploit", "Criptografía", "Burp Suite", "Kali Linux", "Análisis forense"],
  },
  en: {
    "AI & Big Data": ["Python", "Power BI", "TensorFlow", "Scikit-learn", "MySQL"],
    "Systems & Virtualization": ["Active Directory", "Docker", "Linux", "Windows Server", "VMware"],
    "Cybersecurity": ["Metasploit", "Cryptography", "Burp Suite", "Kali Linux", "Forensic Analysis"],
  },
};

export default function Home() {
  const { locale, t } = useLanguage();
  const skills = skillsData[locale];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <ProjectImage
            src="/hero-bg.jpg"
            alt="Background"
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 z-10 pointer-events-none" />
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
              <span className="text-sm text-primary">{t.hero.available}</span>
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
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                {t.hero.viewProjects}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">{t.hero.contact}</a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.about.title}</h2>
            <Card className="p-8">
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.skills.title}</h2>
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
                          <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                            {skillIcons[skill] ?? <Globe className="w-4 h-4" />}
                            {skill}
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.projects.title}</h2>
            {/* Featured Projects Grid (Top Row - 2 Columns) */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {getFeaturedProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/30 bg-card/80 backdrop-blur">
                    <div className="aspect-video bg-muted relative overflow-hidden group">
                      <ProjectImage
                        src={project.image}
                        alt={project.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-sm line-clamp-3">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button size="sm" asChild className="group">
                          <a href={`/projects/${project.id}`}>
                            {t.projects.learnMore}
                            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </Button>
                        {project.githubUrl ? (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : project.statusBadge ? (
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 self-center"
                            title={project.confidentialNotice || project.statusBadge}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {project.statusBadge}
                          </span>
                        ) : project.isConfidential ? (
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-muted/60 text-muted-foreground border border-border/60 self-center"
                            title={project.confidentialNotice || (locale === "es" ? "Proyecto institucional" : "Institutional project")}
                          >
                            <Lock className="w-3 h-3 text-amber-500" />
                            {t.projects.internalUse}
                          </span>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Other Projects Grid (Bottom Row - 3 Columns) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getOtherProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative overflow-hidden group">
                      <ProjectImage
                        src={project.image}
                        alt={project.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{project.description}</CardDescription>
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
                            {t.projects.learnMore}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        {project.githubUrl ? (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : project.isConfidential ? (
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-muted/60 text-muted-foreground border border-border/60 self-center"
                            title={project.confidentialNotice || (locale === "es" ? "Proyecto confidencial" : "Confidential project")}
                          >
                            <Lock className="w-3 h-3 text-amber-500" />
                            {t.projects.confidential}
                          </span>
                        ) : null}
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              {t.contact.subtitle}
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
            © {new Date().getFullYear()} Kimetz Loroño. {t.footer.built}
          </p>
        </div>
      </footer>
    </div>
  );
}