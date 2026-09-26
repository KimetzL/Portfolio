export type Locale = "es" | "en";

const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      themeLight: "Cambiar a Modo Claro",
      themeDark: "Cambiar a Modo Noche",
    },

    // Hero
    hero: {
      available: "Disponible para Proyectos",
      subtitle: "Científico · Analista · Ingeniero de Datos | IT y Sistemas",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
    },

    // About
    about: {
      title: "Sobre Mí",
      p1: "Soy Kimetz, un apasionado por la Tecnología y la Informática. Mi carrera ha estado marcada por ofrecer soluciones tecnológicas eficientes y resolver desafíos de manera creativa en diversas áreas.",
      p2: "Desde mis inicios, me he destacado en la prestación de servicios personalizados, especialmente en el análisis y reparación de hardware. Mi dedicación a este campo ha consolidado una sólida experiencia y habilidades, poniendo de manifiesto mi verdadera fortaleza para abordar problemas de manera analítica y proponer soluciones eficaces. Por otra parte también he desempeñado un papel clave en la gestión de comunicaciones y soporte remoto, lo que ha fortalecido mi habilidad para interactuar efectivamente con los usuarios y ofrecer soluciones a medida.",
      p3: "Así como también he trabajado en áreas clave como la gestión de sistemas informáticos, la administración de Active Directory, la implementación de soluciones de ciberseguridad, y la optimización de sistemas de almacenamiento de datos. Esta experiencia me ha permitido desarrollar una visión integral de la infraestructura tecnológica, garantizando su eficiencia, seguridad y rendimiento.",
      p4: "Actualmente estoy enfocado en la Inteligencia Artificial y el Big Data, áreas que considero clave para el futuro de la innovación tecnológica, ya que mi objetivo es seguir creciendo en el mundo de la tecnología, enfrentando nuevos retos y contribuyendo a la evolución digital de las organizaciones a través de soluciones creativas y eficientes. Creo que destaco por mi capacidad resolutiva, iniciativa y un compromiso constante con el aprendizaje continuo en todas las áreas del sector IT.",
    },

    // Skills
    skills: {
      title: "Habilidades y Experiencia",
      categories: {
        "IA & Big Data": "IA & Big Data",
        "Sistemas y Virtualización": "Sistemas y Virtualización",
        Ciberseguridad: "Ciberseguridad",
      },
    },

    // Projects
    projects: {
      title: "Proyectos",
      learnMore: "Saber Más",
      internalUse: "Uso Interno",
      confidential: "Confidencial",
    },

    // Contact
    contact: {
      title: "Contacto",
      subtitle:
        "¿Tienes algún proyecto en mente, una consulta o te gustaría colaborar? Envíame un mensaje a través del formulario o conéctate a través de mis redes profesionales.",
      formTitle: "Enviar un Mensaje",
      formDesc: "Completa el formulario y me pondré en contacto contigo directamente.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@email.com",
      subject: "Asunto",
      subjectPlaceholder: "Motivo de tu mensaje",
      message: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      send: "Enviar Mensaje",
      sending: "Enviando mensaje...",
      successTitle: "¡Mensaje Recibido!",
      successDesc: "Muchas gracias por comunicarte. He recibido tu mensaje con éxito.",
      sendAnother: "Enviar otro mensaje",
      toastSuccess: "¡Mensaje enviado!",
      toastSuccessDesc: "Gracias por contactar. Te responderé lo antes posible.",
      toastError: "Error al enviar",
      toastErrorDesc: "Hubo un problema al procesar tu mensaje. Inténtalo de nuevo.",
      toastConnError: "Error de conexión",
      toastConnErrorDesc: "No se pudo conectar con el servidor. Revisa tu conexión.",
    },

    // Footer
    footer: {
      built: "Desarrollado con Next.js, TypeScript y Tailwind CSS.",
    },

    // Project detail page
    projectDetail: {
      backToPortfolio: "Volver al Portfolio",
      viewOnGitHub: "Ver en GitHub",
      viewDemo: "Ver Demo",
      duration: "Duración",
      role: "Rol",
      status: "Estado",
      inDevelopment: "En Desarrollo",
      completed: "Completado",
      confidential: "Confidencial",
      technologies: "Tecnologías",
      highlights: "Puntos Clave",
      internalUse: "Uso Interno",
    },
  },

  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      themeLight: "Switch to Light Mode",
      themeDark: "Switch to Dark Mode",
    },

    // Hero
    hero: {
      available: "Available for Projects",
      subtitle: "Data Scientist · Analyst · Engineer | IT & Systems",
      viewProjects: "View Projects",
      contact: "Get in Touch",
    },

    // About
    about: {
      title: "About Me",
      p1: "I'm Kimetz, passionate about Technology and IT. My career has been defined by delivering efficient technological solutions and creatively solving challenges across various areas.",
      p2: "From early on, I stood out in providing personalized services, especially in hardware analysis and repair. My dedication consolidated strong expertise and skills, showcasing my true strength in approaching problems analytically and proposing effective solutions. I have also played a key role in communications management and remote support, strengthening my ability to effectively interact with users and deliver tailored solutions.",
      p3: "I have also worked in key areas such as IT systems management, Active Directory administration, cybersecurity solution implementation, and data storage optimization. This experience allowed me to develop a comprehensive view of technological infrastructure, ensuring efficiency, security, and performance.",
      p4: "I am currently focused on Artificial Intelligence and Big Data, areas I consider pivotal for the future of technological innovation. My goal is to continue growing in the tech world, taking on new challenges and contributing to the digital evolution of organizations through creative and efficient solutions. I believe I stand out for my problem-solving ability, initiative, and a constant commitment to continuous learning across all IT sectors.",
    },

    // Skills
    skills: {
      title: "Skills & Experience",
      categories: {
        "IA & Big Data": "AI & Big Data",
        "Sistemas y Virtualización": "Systems & Virtualization",
        Ciberseguridad: "Cybersecurity",
      },
    },

    // Projects
    projects: {
      title: "Projects",
      learnMore: "Learn More",
      internalUse: "Internal Use",
      confidential: "Confidential",
    },

    // Contact
    contact: {
      title: "Contact",
      subtitle:
        "Have a project in mind, a question, or want to collaborate? Send me a message through the form or connect through my professional networks.",
      formTitle: "Send a Message",
      formDesc: "Fill out the form and I'll get back to you directly.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      subjectPlaceholder: "Reason for your message",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending message...",
      successTitle: "Message Received!",
      successDesc: "Thank you for reaching out. I've received your message successfully.",
      sendAnother: "Send another message",
      toastSuccess: "Message sent!",
      toastSuccessDesc: "Thanks for reaching out. I'll get back to you as soon as possible.",
      toastError: "Error sending",
      toastErrorDesc: "There was a problem processing your message. Please try again.",
      toastConnError: "Connection error",
      toastConnErrorDesc: "Could not connect to the server. Check your connection.",
    },

    // Footer
    footer: {
      built: "Built with Next.js, TypeScript and Tailwind CSS.",
    },

    // Project detail page
    projectDetail: {
      backToPortfolio: "Back to Portfolio",
      viewOnGitHub: "View on GitHub",
      viewDemo: "View Demo",
      duration: "Duration",
      role: "Role",
      status: "Status",
      inDevelopment: "In Development",
      completed: "Completed",
      confidential: "Confidential",
      technologies: "Technologies",
      highlights: "Key Highlights",
      internalUse: "Internal Use",
    },
  },
} as const;

export type Translations = typeof translations.es;
export { translations };
