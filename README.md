# Portfolio de Kimetz Loroño

Un sitio web de portfolio personal moderno y responsivo construido con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## Características

- 🎨 **Diseño Moderno**: Tema oscuro profesional con animaciones suaves
- 📱 **Responsivo**: Diseño mobile-first que funciona en todos los dispositivos
- ⚡ **Rendimiento**: Optimizado para carga rápida e interacciones suaves
- 🎭 **Animaciones**: Hermosas animaciones y transiciones con Framer Motion
- 🌙 **Tema Oscuro**: Tema oscuro por defecto con excelente contraste
- 📊 **Showcase de Proyectos**: Páginas de proyectos dinámicas con información detallada
- 🛠️ **Display de Habilidades**: Habilidades categorizadas con indicadores visuales
- 📧 **Integración de Contacto**: Formas fáciles de contactar

## Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Componentes**: shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Tema**: next-themes

## Estructura del Proyecto

```
src/
├── app/
│   ├── api/placeholder/[...slug]/    # API dinámica de placeholder de imágenes
│   ├── projects/[id]/                # Páginas dinámicas de proyectos
│   ├── globals.css                   # Estilos globales y tema
│   ├── layout.tsx                    # Layout raíz con theme provider
│   └── page.tsx                      # Página principal del portfolio
├── components/
│   ├── ui/                           # Componentes shadcn/ui
│   ├── navigation.tsx                # Componente de navegación
│   └── theme-provider.tsx            # Wrapper del theme provider
└── hooks/
    └── use-toast.ts                  # Hook de notificaciones toast
```

## Secciones

### 1. Sección Hero
- Introducción llamativa con nombre y tagline
- Botones de llamada a la acción
- Elementos de fondo animados
- Badge "Disponible para Proyectos"

### 2. Sección Sobre Mí
- Resumen profesional detallado
- Descripción del background técnico
- Enfoque en la resolución de problemas
- Mentalidad de aprendizaje continuo

### 3. Sección Habilidades
Categorizadas en tres áreas principales:
- **IA & Big Data**: Python, Power BI, TensorFlow, Scikit-learn
- **Sistemas y Virtualización**: Active Directory, Docker, Linux, Windows Server
- **Ciberseguridad**: Metasploit, Criptografía, Burp Suite, Kali Linux

### 4. Sección Proyectos
- Grid layout con tarjetas de proyectos (limitado a 3)
- Proyectos destacados
- Badges de tecnología
- Botones "Saber Más" para vistas detalladas
- Enlaces a GitHub y demos

### 5. Páginas de Detalles de Proyectos
- Imágenes hero grandes
- Descripciones comprehensivas de proyectos
- Características, desafíos y resultados
- Stacks de tecnología
- Información de clientes y timelines
- Demo en vivo y enlaces GitHub

### 6. Sección Contacto
- Introducción profesional
- Enlaces a LinkedIn, GitHub y email
- Diseño limpio y accesible

## Personalización

### Actualizar Información Personal

1. **Nombre y Tagline**: Editar en `src/app/page.tsx` en la sección Hero
2. **Texto Sobre Mí**: Modificar el párrafo en la sección About
3. **Habilidades**: Actualizar el objeto `skills` con tus propias tecnologías
4. **Proyectos**: Reemplazar datos de proyectos con tus proyectos reales
5. **Enlaces de Contacto**: Actualizar URLs en la sección Contact

### Añadir Nuevos Proyectos

1. Añadir datos de proyecto al array `projects` en `src/app/page.tsx`
2. Añadir información detallada del proyecto a `projectData` en `src/app/projects/[id]/page.tsx`
3. Añadir imágenes de proyecto al directorio `public/`
4. Actualizar los paths de imágenes en los datos del proyecto

### Personalizar Colores

El tema usa propiedades CSS custom definidas en `src/app/globals.css`. Puedes modificar el esquema de colores actualizando las variables CSS en los selectores `:root` y `.dark`.

## Despliegue

### Vercel (Recomendado)
1. Sube tu código a GitHub
2. Conecta tu repositorio a Vercel
3. Despliega automáticamente con configuración cero

### GitHub Pages
1. Construye el proyecto: `npm run build`
2. Exporta archivos estáticos: `npm run export` (si está configurado)
3. Despliega el directorio `out/` a GitHub Pages

### Otras Plataformas
El proyecto es compatible con cualquier plataforma que soporte aplicaciones Next.js.

## Desarrollo

### Empezando

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linting
npm run lint
```

### Scripts Disponibles

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint

## Generación de Imágenes

El proyecto incluye imágenes placeholder generadas usando AI. Puedes generar tus propias imágenes usando la herramienta CLI incluida:

```bash
# Generar una nueva imagen
z-ai-generate -p "Tu prompt aquí" -o "./path/to/image.jpg" -s 1024x1024
```

## Características de Rendimiento

- **Imágenes Optimizadas**: Optimización automática de imágenes
- **Code Splitting**: División automática de código por ruta
- **Caching**: Estrategias de caching incorporadas
- **Bundle Minimal**: Tree-shaking y eliminación de código muerto
- **Smooth Scrolling**: Animaciones aceleradas por hardware

## Accesibilidad

- Estructura HTML5 semántica
- Labels y roles ARIA
- Soporte de navegación por teclado
- Compatibilidad con screen readers
- Gestión de focus
- Cumplimiento de contraste de color

## Soporte de Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Navegadores móviles (iOS Safari, Android Chrome)

## Licencia

Este proyecto es open source y está disponible bajo la [Licencia MIT](LICENSE).

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor no dudes en enviar un Pull Request.

---

Desarrollado con ❤️ por Kimetz Loroño