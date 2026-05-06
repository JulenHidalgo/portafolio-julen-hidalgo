import auziker_logo from "./images/auziker_logo.jpg";
import ihodei_logo from "./images/ihodei_logo.svg";
import tartanga_logo from "./images/tartanga_logo.jpg";
export const DATA = {
  skills: [
    {
      category: "Frontend",
      name: "Interfaces modernas",
      desc: "Desarrollo interfaces web y móviles modernas, responsivas y atractivas, centradas en una experiencia de usuario fluida e intuitiva.",
      tags: [
        "React",
        "React Native",
        "JavaScript",
        "HTML5",
        "CSS3",
        "JSON",
        "XML",
        "WordPress",
        "Elementor"
      ],
    },
    {
      category: "Backend",
      name: "Servidores y APIs",
      desc: "Diseño e implementación de APIs REST seguras, lógica de negocio escalable y sistemas de autenticación robustos.",
      tags: [
        "Node.js",
        "Express",
        "FastAPI",
        "Java EE",
        "PHP",
        "JWT",
        "OAuth 2.0",
        "Sockets"
      ],
    },
    {
      category: "Agentes de IA",
      name: "Sistemas inteligentes",
      desc: "Desarrollo de agentes de IA, asistentes inteligentes y flujos conversacionales integrados en soluciones empresariales.",
      tags: [
        "Google ADK",
        "Azure OpenAI",
        "LangGraph",
        "LangChain",
        "LLMs",
        "Prompt Engineering"
      ],
    },
    {
      category: "Data Engineering",
      name: "Procesamiento de datos",
      desc: "Trabajo con grandes volúmenes de datos, procesamiento distribuido y pipelines para análisis y explotación de información.",
      tags: [
        "Hadoop",
        "HDFS",
        "Hive",
        "Spark",
        "Apache NiFi",
        "ElasticSearch"
      ],
    },
    {
      category: "Data Science",
      name: "Análisis y modelado",
      desc: "Exploración, análisis estadístico y desarrollo de modelos de datos para la toma de decisiones y soluciones inteligentes.",
      tags: [
        "Python",
        "JupyterLab",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Statsmodels",
        "Matplotlib",
        "Seaborn"
      ],
    },
    {
      category: "Bases de datos",
      name: "Gestión de datos",
      desc: "Diseño de bases de datos, consultas optimizadas y gestión eficiente de información relacional y no relacional.",
      tags: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Cassandra",
        "Hibernate / JPA"
      ],
    },
    {
      category: "Automatización e IA",
      name: "Flujos inteligentes",
      desc: "Automatización de procesos e integración de IA generativa para optimizar tareas y flujos empresariales complejos.",
      tags: [
        "Make.com",
        "Webhooks",
        "IA Generativa",
        "Google APIs",
        "Chrome Extensions"
      ],
    },
    {
      category: "DevOps & Herramientas",
      name: "Despliegue y control",
      desc: "Despliegue de aplicaciones en producción, control de versiones y gestión de entornos de desarrollo profesionales.",
      tags: [
        "GitHub",
        "Docker",
        "Railway",
        "Vercel",
        "Ubuntu",
        "Prometheus",
        "Grafana",
        "Apache Superset",
        "Play Store",
        "App Store",
        "Odoo ERP"
      ],
    },
    {
      category: "Lenguajes",
      name: "Programación",
      desc: "Experiencia en distintos lenguajes de programación y capacidad de adaptación rápida a nuevas tecnologías y entornos.",
      tags: [
        "JavaScript",
        "Java",
        "Python",
        "SQL",
        "PL-SQL",
        "PHP"
      ],
    },
  ],

  experience: [
    {
      role: "Desarrollador Full Stack de IA",
      company: "BAIC (Basque Artificial Intelligence Center) · Prácticas Especialización IA y Big Data",
      date: "Feb 2026 — Actualidad",
      desc: "Desarrollo de un sistema basado en IA para la generación automática de documentos informativos internos, junto con un chatbot interactivo orientado a la mejora continua y validación de contenidos. Implementación de una arquitectura full stack con backend en FastAPI y frontend conectado. Además, integración de data layers en la web corporativa para el análisis del comportamiento de usuarios y la mejora de métricas de navegación.",
    },
    {
      role: "Desarrollador Full Stack",
      company: "iHodei · Prácticas 2º DAM",
      date: "Feb 2025 — Abr 2025",
      desc: "Desarrollo de productos reales en producción, incluyendo aplicaciones móviles publicadas en Google Play y App Store, extensiones para Chrome y backends en Node.js con APIs REST. Trabajo con autonomía en proyectos completos, definiendo arquitectura, integraciones y contratos de API entre servicios.",
    },
    {
      role: "Desarrollador Web",
      company: "Auziker · Prácticas 1º DAM",
      date: "Mayo 2024",
      desc: "Diseño y desarrollo de la página web corporativa desde cero. Participación en reuniones con el equipo para la toma de requisitos y transformación de necesidades en una web moderna, responsive y alineada con la identidad visual de la empresa.",
    },
  ],

  projects: [
    {
      type: "emp",
      name: "iHodei Blogs",
      image: ihodei_logo,
      bg: "rgba(240,160,48,0.07)",
      desc: "Plataforma basada en IA para la generación automática de posts de blog para clientes de HodeiCloud. Desarrollo completo de una app móvil multiplataforma publicada en Play Store y App Store, una extensión de Chrome para gestión y paneles, y flujos automatizados en Make.com que conectan modelos de IA con CMS externos.",
      tags: ["React Native", "Make.com", "Chrome Extension", "IA generativa", "Webhooks"],
      links: [
        { label: "GitHub App", url: "https://github.com/JulenHidalgo/ihodei-blogs" },
        { label: "GitHub Extensión", url: "https://github.com/JulenHidalgo/ihodei-blogs-chrome-extension" },
      ],
    },
    {
      type: "emp",
      name: "iHodei Contact",
      image: ihodei_logo,
      bg: "rgba(240,160,48,0.07)",
      desc: "Sistema corporativo de gestión de contactos y contenido para HodeiCloud. Desarrollo del backend completo en Node.js con MySQL, integración con Google Drive API para gestión de recursos multimedia y creación de una extensión de Chrome para publicación directa de contenido desde el navegador.",
      tags: ["Node.js", "MySQL", "Google Drive API", "OAuth 2.0", "Chrome Extension", "Railway"],
      links: [
        { label: "GitHub Server", url: "https://github.com/JulenHidalgo/ihodei-contact-server" },
        { label: "GitHub Extensión", url: "https://github.com/JulenHidalgo/ihodei-contact-chrome-extension" },
      ],
    },
    {
      type: "emp",
      name: "Sine — Gestión de Bobinas",
      image: ihodei_logo,
      bg: "rgba(240,160,48,0.07)",
      desc: "Sistema de trazabilidad industrial para la gestión de materiales eléctricos en una empresa de instalaciones. Diseño de base de datos, desarrollo de API REST con autenticación JWT y despliegue en producción, permitiendo el registro y consulta completa del ciclo de vida de cada bobina.",
      tags: ["Node.js", "Express", "MySQL", "JWT", "API REST", "Railway"],
      links: [{ label: "GitHub Server", url: "https://github.com/JulenHidalgo/sine-server" }],
    },
    {
      type: "emp",
      name: "Web Auziker",
      image: auziker_logo,
      bg: "rgba(240,160,48,0.07)",
      desc: "Rediseño completo de la presencia web de Auziker, empresa del sector de la construcción. Liderazgo del proyecto desde la fase de requisitos hasta el desarrollo final, creando una web moderna, responsive y alineada con la identidad visual de la empresa.",
      tags: ["HTML", "CSS", "JavaScript"],
      links: [{ label: "GitHub", url: "https://github.com/JulenHidalgo/auziker-website" }],
    },
    {
      type: "edu",
      name: "Nocturna",
      image: tartanga_logo,
      bg: "rgba(78,140,255,0.07)",
      desc: "Sistema completo de venta de entradas para discotecas con arquitectura cliente-servidor. Desarrollo en Java EE y JavaFX, implementación de seguridad con cifrado simétrico y asimétrico, generación de informes con JasperReports e integración con Odoo. Proyecto de alta complejidad técnica.",
      tags: ["Java EE", "JavaFX", "MySQL", "JPA/Hibernate", "MongoDB", "Odoo", "JasperReports"],
      links: [
        { label: "GitHub Cliente", url: "https://github.com/JulenHidalgo/nocturna-client" },
        { label: "GitHub Server", url: "https://github.com/JulenHidalgo/nocturna-server" },
      ],
    },
    {
      type: "edu",
      name: "Sign Up / Sign In",
      image: tartanga_logo,
      bg: "rgba(78,140,255,0.07)",
      desc: "Sistema de autenticación distribuido con integración en Odoo. Comunicación mediante sockets con programación multihilo para gestión de concurrencia, base de datos PostgreSQL y arquitectura orientada a servicios empresariales.",
      tags: ["Java", "JavaFX", "Sockets", "Hilos", "PostgreSQL", "Odoo"],
      links: [],
    },
    {
      type: "edu",
      name: "Cooking Master",
      image: tartanga_logo,
      bg: "rgba(78,140,255,0.07)",
      desc: "Aplicación de gestión de catering con sistema de usuarios y roles. Permite la creación de recetas estructuradas, gestión de ingredientes y control de permisos por tipo de usuario, con persistencia en base de datos MySQL.",
      tags: ["Java", "MySQL", "WindowBuilder"],
      links: [],
    },
    {
      type: "edu",
      name: "G5 Forces",
      image: tartanga_logo,
      bg: "rgba(78,140,255,0.07)",
      desc: "Transformación de una web estática en una aplicación dinámica mediante gestión de datos XML en servidor. Uso de PHP, XSLT y scripts de procesamiento de datos para generar contenido dinámico en entorno local con XAMPP.",
      tags: ["PHP", "XML", "XSLT", "HTML", "CSS", "JavaScript", "XAMPP"],
      links: [],
    },
  ],

  education: [
    {
      year: "2025 — En curso",
      degree: "Curso de especialización en Inteligencia Artificial y Big Data",
      school: "CIFP Txurdinaga LHII",
      badge: "En curso",
    },
    {
      year: "2023 — 2025",
      degree: "Ciclo Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      school: "CIFP Tartanga LHII",
      badge: null,
    },
    {
      year: "2021 — 2023",
      degree: "Bachillerato de Ciencias y Tecnología",
      school: "IES Etxebarri BHI",
      badge: null,
    },
  ],

  contact: [
    {
      iconType: "linkedin",
      label: "LinkedIn",
      val: "julen-hidalgo-chamero",
      url: "https://www.linkedin.com/in/julen-hidalgo-chamero-11a70a2bb/",
      copyOnClick: false,
    },
    {
      iconType: "github",
      label: "GitHub",
      val: "github.com/JulenHidalgo",
      url: "https://github.com/JulenHidalgo",
      copyOnClick: false,
    },
    {
      iconType: "location",
      label: "Ubicación",
      val: "Bilbao, Bizkaia",
      url: null,
      copyOnClick: false,
    },
  ],
};
