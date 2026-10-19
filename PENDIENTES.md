# 📌 Tareas Pendientes / Recordatorio para la Siguiente Sesión

Este documento registra los puntos clave acordados para retomar en la próxima sesión.

---

## 🏛️ 1. Proyecto Kimün (ID: 4) — Sistema de Iniciativas y Vinculación

- [x] **Cambiar la foto principal del proyecto**:
  - Sustituida la portada por el mockup 3D de alta definición (`/images/kimun/portada-mockup-3d.png`).
- [x] **Meter capturas reales en los 6 pasos del Wizard (`KimunShowcaseSection`)**:
  - **Paso 1**: Datos Generales (Dirección VcM, modalidades, sedes).
  - **Paso 2**: Datos Adicionales & Cascada Geográfica (Región, Provincia, Comuna).
  - **Paso 3**: Matriz ODS Agenda 2030 (17 objetivos e indicadores).
  - **Paso 4**: Ecosistema Humano (Estudiantes, docentes, socios comunitarios, productos).
  - **Paso 5**: Presupuesto y Recursos (Horas docente, infraestructura, fuentes de financiamiento).
  - **Paso 6**: Resumen y Emisión PDF Oficial.
- [x] **Traducir exhaustivamente al inglés**:
  - Revisar y completar la traducción en `KimunShowcaseSection` (títulos, subtítulos, descripciones, badges y viñetas de highlights/details).

---

## 🕷️ 2. Proyecto Web Scraping & ETL (ID: 5) — Motor de Vacantes Maule

- [ ] **Traducir bien al inglés la Demo Interactiva (`JobEngineShowcaseSection`)**:
  - Textos de los 4 pasos del pipeline ETL (Extracción multi-fuente, Persistencia incremental, Motor NLP/RegEx, Deduplicación difusa).
  - Filtros interactivos (búsqueda, portales, comunas, modalidad).
  - Campos de las tarjetas de ofertas de empleo de demostración (`sampleOffers`).
- [ ] **Añadir capturas reales y/o vídeo**:
  - Incorporar imágenes del bot en ejecución, terminal Playwright, o visualizador de vídeo similar al del Chatbot de Bizkaia.
- [ ] **Actualizar foto principal si se encuentra una mejor**:
  - Evaluar sustituir o renovar `scraping.png` / `scraping_wide.png` por una imagen de portada de mayor impacto visual.

---

## 📂 Archivos clave de referencia

- `src/app/projects/[id]/page.tsx` (Contiene `KimunShowcaseSection` y `JobEngineShowcaseSection`)
- `src/components/kimun-dashboard-showcase.tsx` (Dashboard analítico ya terminado y verificado)
- `public/images/kimun/` (Carpeta de recursos gráficos de Kimün)
- `public/images/` (Carpeta de recursos generales de proyectos)
