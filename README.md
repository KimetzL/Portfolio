# Portfolio - Kimetz L.

Portfolio personal desarrollado con Next.js 15, TypeScript y Tailwind CSS.

## Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos
- **Interfaz Moderna**: Construida con shadcn/ui components
- **Navegación por Pestañas**: Organización intuitiva del contenido
- **Vista Previa de PDFs**: Modal para previsualizar documentos
- **Galería de Imágenes**: Espacio para GIFs de transformaciones

## Estructura del Proyecto

```
├── public/
│   ├── images/          # Colocar aquí los GIFs de PowerBI
│   │   ├── Presupuestos.gif
│   │   ├── Distribucion.gif
│   │   ├── Temas.gif
│   │   ├── Visitas.gif
│   │   ├── Solicitudes.gif
│   │   └── Puestos.gif
│   └── documents/       # Colocar aquí los PDFs
│       ├── Renove PowerBI.pdf
│       └── cybersecurity-report.pdf
├── src/
│   ├── app/
│   │   └── page.tsx     # Página principal del portfolio
│   └── components/ui/   # Componentes de la interfaz
```

## Secciones del Portfolio

### 1. Acerca de Mí
- Perfil profesional
- Estadísticas destacadas
- Especialización en Power BI

### 2. Experiencia
- Historial laboral
- Logros clave
- Proyectos importantes

### 3. Proyectos

#### Cybersecurity Dashboard
- Dashboard de monitoreo de seguridad
- Vista previa y descarga de informes PDF

#### Dashboards Interactivos - PowerBI Design System
- **Transformaciones con GIFs**: Antes y después de la implementación del Design System
  - Presupuestos: Gestión de presupuestos
  - Distribución: Análisis de distribución
  - Temas: Personalización y consistencia
  - Visitas: Seguimiento de visitantes
  - Solicitudes: Gestión de solicitudes
  - Puestos: Análisis de puestos
- **Informe Completo**: Documentación del renove con vista previa y descarga
- **Espacio Futuro**: Áreas reservadas para dashboards PowerBI en vivo

### 4. Habilidades
- Power BI (DAX, Data Modeling, etc.)
- Data Analysis (SQL, Python, etc.)
- Frontend (React, TypeScript, etc.)
- Tools (Git, Azure DevOps, etc.)

## Instrucciones de Uso

### Para Agregar los GIFs de PowerBI:
1. Coloca los archivos GIF en la carpeta `public/images/`
2. Asegúrate de que tengan los nombres exactos:
   - `Presupuestos.gif`
   - `Distribucion.gif`
   - `Temas.gif`
   - `Visitas.gif`
   - `Solicitudes.gif`
   - `Puestos.gif`

### Para Agregar los PDFs:
1. Coloca los archivos PDF en la carpeta `public/documents/`
2. Los nombres deben ser:
   - `Renove PowerBI.pdf` (para el informe del renove)
   - `cybersecurity-report.pdf` (para el informe de ciberseguridad)

### Para Agregar Dashboards PowerBI Futuros:
1. Reemplaza las tarjetas "Coming Soon" en la sección "Live PowerBI Dashboards"
2. Puedes integrar iframes de PowerBI o enlaces a los dashboards

## Personalización

### Cambiar Información Personal:
- Edita el componente `Portfolio` en `src/app/page.tsx`
- Modifica nombre, título, descripción y contacto

### Agregar Nuevos Proyectos:
- Copia y adapta la estructura de las tarjetas existentes
- Mantén la consistencia en el diseño

### Modificar Colores y Estilos:
- Edita las clases de Tailwind CSS
- Usa las variables de diseño definidas en el componente

## Tecnologías Utilizadas

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de CSS
- **shadcn/ui**: Biblioteca de componentes
- **Lucide React**: Iconos
- **Framer Motion**: Animaciones (opcional)

## Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Verificar código
npm run lint
```

El servidor se ejecutará en `http://localhost:3000`

## Notas Importantes

- Los GIFs y PDFs deben estar en las carpetas correctas para que se muestren
- La vista previa de PDFs funciona mejor con navegadores modernos
- El diseño es totalmente responsive y compatible con modo oscuro/claro
- Los espacios para PowerBIs futuros están preparados para integración fácil