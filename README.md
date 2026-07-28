# 🚀 Kimetz Loroño — Portfolio Professional

Portfolio personal y profesional desarrollado con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** y **shadcn/ui**.

Focalizado en **Data Science**, **Data Analytics**, **IA** e **Infraestructura IT & Sistemas**.

---

## 🌟 Características Destacadas

### 🎨 Frontend & UX de Alto Rendimiento
- **Imágenes Optimizadas (`next/image`)**: Conversión automática a WebP/AVIF y *lazy loading* para máxima velocidad.
- **Skeleton Loaders Animados**: Transición fluida (*fade-in*) sin saltos de diseño (*Zero Cumulative Layout Shift - CLS*).
- **Modo Noche / Claro**: Selector de tema persistente con `next-themes`.
- **Navegación Dinámica e Interactiva**: Animaciones con `framer-motion` y scroll suave (*smooth scrolling*).
- **Simulador de Dataset Interactivo**: Explorador en tiempo real del dataset unificado de empleos (+3.300 ofertas) con filtros multi-criterio.

### 🛡️ Seguridad Avanzada & Backend
- **Sanitización Anti-XSS**: Escape HTML riguroso en envíos de mensajes.
- **Rate Limiting por IP (`src/lib/rate-limit.ts`)**: Protección contra spam en el formulario de contacto (máx. 3 envíos por IP / 10 min, HTTP 429).
- **Trampa Honeypot Anti-Bot**: Trampa invisible en cliente/servidor para bloquear bots automatizados.
- **Cabeceras de Seguridad HTTP**: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy y Content-Security-Policy (CSP) configuradas en `next.config.ts`.

### 📊 Analítica Web & SEO
- **Vercel Analytics Integrado**: Medición en tiempo real sin cookies ni banners intrusivos.
- **SEO & Open Graph**: Estructura semántica HTML5, metadatos dinámicos, `lang="es"` y copyright automatizado (`© {new Date().getFullYear()}`).

---

## 📁 Estructura del Proyecto

```text
c:\Portfolio\
├── public/
│   ├── images/              # Activos visuales (16:9 y cuadrados optimizados)
│   │   ├── Chatbot.jpg
│   │   ├── Ciberseguridad.jpg
│   │   ├── Graficas.jpg
│   │   ├── iniciativas.png
│   │   ├── scraping_square.png
│   │   └── scraping_wide.png
│   ├── documents/           # Informes y documentación en PDF
│   │   ├── Informe Ciberseguridad DeiviGo.pdf
│   │   └── Renove PowerBI.pdf
│   └── hero-bg.jpg          # Fondo de cabecera principal
├── scripts/                 # Scripts de utilidad (procesamiento de imágenes)
│   └── fix_chatbot_image.py
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/    # API de contacto con Zod, XSS y Rate Limit
│   │   ├── projects/[id]/  # Vista detallada dinámica de proyectos
│   │   ├── globals.css     # Variables CSS del sistema de diseño
│   │   ├── layout.tsx      # Layout raíz con Vercel Analytics y ThemeProvider
│   │   └── page.tsx        # Página principal del portfolio
│   ├── components/
│   │   ├── project-image.tsx# Componente de imagen con Next.js Image + Skeleton
│   │   ├── contact-form.tsx # Formulario de contacto con validación y Honeypot
│   │   ├── navigation.tsx   # Navegación fija con indicador activo y modo noche
│   │   └── ui/             # Componentes Shadcn (Card, Badge, Button, Skeleton)
│   ├── data/
│   │   └── projects.ts     # Fuente Única de Verdad (Single Source of Truth)
│   └── lib/
│       ├── rate-limit.ts   # Módulo de Rate Limiting por IP (Sliding Window)
│       └── utils.ts        # Helper cn para clases de Tailwind
├── ROADMAP.md               # Hoja de ruta estratégica y propuesta de valor
└── next.config.ts           # Configuración de Next.js y cabeceras de seguridad
```

---

## 💼 Proyectos Incluidos

1. **Scraping & Analítica de Ofertas Laborales (CFT San Agustín)**
   - *Data Science & ETL*: Pipelines multicanal de 7 fuentes, deduplicación difusa en memoria (+3.300 vacantes en ~4s) y motor sintáctico RegEx/NLP.
2. **Chatbot Administrativo (Diputación Foral de Bizkaia)**
   - *IA & NLP*: Clasificación inteligente de consultas ciudadanas mediante Python, Pandas, Faiss, Rapidfuzz, Transformers y Gradio.
3. **Sistema de Gestión de Iniciativas**
   - *Gestión IT & Datos*: Plataforma centralizada para seguimiento y trazabilidad de trámites administrativos en tiempo real.
4. **Dashboards Interactivos en PowerBI (Diputación Foral de Bizkaia)**
   - *Data Analytics*: Paneles interactivos sobre Open Data Bizkaia para la web "Gardentasuna", con Design System unificado e informe técnico.
5. **Informe de Ciberseguridad (The Bridge Bootcamp / Deiviator)**
   - *Ciberseguridad*: Auditorías OSINT, Pentesting, entorno self-hosted (Ubuntu, UFW, VPN, Suricata, Docker) y CI/CD con GitHub Actions (Semgrep, Gitleaks, SBOMs).

---

## 🛠️ Tecnologías

- **Framework**: Next.js 15.5 (App Router)
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS v4, tw-animate-css
- **Animaciones**: Framer Motion
- **Componentes**: shadcn/ui & Radix UI
- **Validación**: Zod
- **Analítica**: Vercel Analytics

---

## 💻 Desarrollo Local

```powershell
# 1. Clonar el repositorio
git clone https://github.com/KimetzL/Portfolio.git
cd Portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev

# 4. Compilar para producción
npm run build
```

El servidor estará disponible en `http://localhost:3000`.

---

## 📝 Licencia y Autoría

© {new Date().getFullYear()} **Kimetz Loroño**. Desarrollado con Next.js, TypeScript y Tailwind CSS.