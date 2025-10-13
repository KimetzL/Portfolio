'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Download,
  Eye,
  ExternalLink,
  BarChart3,
  Database,
  Shield,
  Palette,
  TrendingUp,
  FileText,
  Image as ImageIcon
} from 'lucide-react'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const skills = {
    'Power BI': ['Advanced DAX', 'Data Modeling', 'Power Query', 'Visual Design', 'Performance Optimization'],
    'Data Analysis': ['SQL', 'Python', 'Statistics', 'ETL Processes', 'Data Visualization'],
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript'],
    'Tools': ['Git', 'VS Code', 'Azure DevOps', 'Agile', 'Scrum']
  }

  const experience = [
    {
      title: 'Data Analyst & Power BI Developer',
      company: 'Current Company',
      period: '2022 - Present',
      description: 'Development of interactive dashboards and business intelligence solutions. Implementation of design systems for Power BI reports.',
      achievements: [
        'Created 15+ interactive dashboards for different departments',
        'Implemented a unified Design System across all Power BI reports',
        'Reduced report loading time by 40% through optimization',
        'Trained 50+ employees in Power BI usage'
      ]
    },
    {
      title: 'Junior Data Analyst',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Data analysis and reporting for business decision making.',
      achievements: [
        'Automated 10+ manual reporting processes',
        'Developed KPI tracking systems',
        'Created data visualization solutions'
      ]
    }
  ]

  const powerBiGifs = [
    { name: 'Presupuestos', description: 'Budget management dashboard transformation' },
    { name: 'Distribucion', description: 'Distribution analysis dashboard redesign' },
    { name: 'Temas', description: 'Theme customization and consistency improvements' },
    { name: 'Visitas', description: 'Visitor tracking dashboard enhancement' },
    { name: 'Solicitudes', description: 'Request management system optimization' },
    { name: 'Puestos', description: 'Position analysis dashboard modernization' }
  ]

  const handlePdfPreview = (pdfName: string) => {
    setSelectedPdf(pdfName)
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              KL
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Kimetz L.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Data Analyst & Power BI Developer
          </p>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Specialized in creating interactive dashboards and implementing design systems for Power BI. 
            Passionate about data visualization and business intelligence solutions that drive informed decision-making.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('mailto:your.email@example.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://github.com/KimetzL', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              About
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Skills
            </TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription>Professional profile and background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  I'm a passionate Data Analyst with extensive experience in Power BI development and data visualization. 
                  My focus is on creating intuitive, interactive dashboards that transform complex data into actionable insights.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  One of my key achievements has been the implementation of a comprehensive Design System for Power BI reports, 
                  ensuring consistency and improving user experience across all organizational dashboards.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Dashboards Created</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">40%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Performance Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Users Trained</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8">
            {/* Cybersecurity Project */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Cybersecurity Dashboard
                </CardTitle>
                <CardDescription>
                  Real-time monitoring and analysis of security events and threats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300">
                  Comprehensive cybersecurity dashboard providing real-time insights into security events, 
                  threat detection, and system vulnerabilities. Features automated alerting and detailed analytics.
                </p>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handlePdfPreview('cybersecurity-report.pdf')}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Preview Report
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('/documents/cybersecurity-report.pdf', '_blank')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Separator />

            {/* Interactive Dashboards Project */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Interactive Dashboards - PowerBI Design System
                </CardTitle>
                <CardDescription>
                  Complete renovation of PowerBI dashboards with unified design system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    One of my most significant projects has been the comprehensive renovation of our PowerBI dashboards 
                    through the implementation of a unified Design System. This initiative has transformed our data visualization 
                    approach, ensuring consistency, improving user experience, and standardizing our analytical tools across the organization.
                  </p>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    The Design System implementation includes standardized color palettes, consistent typography, 
                    uniform component layouts, and interactive patterns that work seamlessly across all dashboards. 
                    This has resulted in improved usability, faster development cycles, and enhanced data storytelling capabilities.
                  </p>
                </div>

                {/* Before/After GIFs Grid */}
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" />
                    Dashboard Transformations - Before & After
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {powerBiGifs.map((gif, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">{gif.name}</CardTitle>
                          <CardDescription className="text-sm">{gif.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <img 
                              src={`/images/${gif.name}.gif`}
                              alt={`${gif.name} dashboard transformation`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `
                                  <div class="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 p-4">
                                    <ImageIcon class="w-8 h-8 mb-2" />
                                    <span class="text-sm text-center">${gif.name}.gif</span>
                                    <span class="text-xs text-slate-400 dark:text-slate-500 mt-1">Upload GIF to view</span>
                                  </div>
                                `;
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Complete Report */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Complete Renovation Report
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Detailed documentation of the entire Design System implementation process, including methodologies, 
                    challenges faced, solutions implemented, and results achieved.
                  </p>
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handlePdfPreview('Renove PowerBI.pdf')}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview Report
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('/documents/Renove PowerBI.pdf', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>

                {/* Future PowerBI Space */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Live PowerBI Dashboards
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-dashed border-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <Database className="w-12 h-12 text-slate-400 mb-4" />
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Executive Dashboard
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                          C-level metrics and KPIs visualization
                        </p>
                        <Badge variant="secondary">Coming Soon</Badge>
                      </CardContent>
                    </Card>
                    <Card className="border-dashed border-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50">
                      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                        <BarChart3 className="w-12 h-12 text-slate-400 mb-4" />
                        <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Sales Analytics
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                          Real-time sales performance tracking
                        </p>
                        <Badge variant="secondary">Coming Soon</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* PDF Preview Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Document Preview</DialogTitle>
              <DialogDescription>
                Preview of {selectedPdf}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[60vh] w-full rounded-md border">
              <div className="p-4">
                {selectedPdf && (
                  <iframe
                    src={`/documents/${selectedPdf}`}
                    className="w-full h-[500px]"
                    title="PDF Preview"
                  />
                )}
              </div>
            </ScrollArea>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              <Button 
                onClick={() => selectedPdf && window.open(`/documents/${selectedPdf}`, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}