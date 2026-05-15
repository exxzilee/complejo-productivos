# Complejo Productivo del Arroz — Presentación Web

Micrositio editorial cinematográfico para la exposición oral sobre el **Complejo Productivo del Arroz en Argentina**.

Expositores: **Santiago Ochoa · Tobías Ardans · Joaquín Sosa**.

---

## Cómo ejecutar

Requisitos: **Node.js 18+** y npm.

```bash
# 1) Instalar dependencias
npm install

# 2) Desarrollo (abre http://localhost:5173 automáticamente)
npm run dev

# 3) Build de producción
npm run build

# 4) Previsualizar el build
npm run preview
```

Para la exposición en aula: una vez abierto el sitio, presionar **F11** para pantalla completa.

## Navegación

- **Scroll del mouse / trackpad** — recorrido principal con scroll-snap.
- **Flechas ↑ / ↓** o **Space / Page Up / Page Down** — avanzar / retroceder de sección.
- **Home / End** — primer / última sección.
- **Índice lateral derecho** (desktop) — saltar a cualquier sección con un click.

## Estructura de la presentación

| # | Sección | Aporta |
|---|---|---|
| I | Apertura cinematográfica | Tema, expositores |
| II | Definición de complejo productivo | Marco conceptual |
| III | Mapa interactivo | Corrientes + Entre Ríos, +90% nacional |
| IV | Condiciones geográficas | 4 requisitos del cultivo |
| V | Diagrama 3 sectores | Visión integral del proceso |
| VI–VIII | Agrario · Industrial · Comercial | Detalle de cada eslabón |
| IX | Actores sociales | Grid interactivo de 8 actores |
| X | Destino de la producción | Brasil, principal comprador |
| XI | Impacto y desafíos | Ambiental · económico · social |
| XII | Conclusión + créditos | Modelo agroindustrial, gracias |

## Decisiones de diseño

- **Modo oscuro cinematográfico** (negro carbón, marfil cálido, esmeralda y dorado-arroz) para sensación documental tipo *National Geographic*.
- **Tipografía editorial**: Fraunces (display) + Inter (cuerpo). Combina autoridad y legibilidad en proyector.
- **Scroll-snap vertical** para que cada sección ocupe la pantalla completa como un slide en una exposición, manteniendo la naturalidad del scroll.
- **Animaciones cinematográficas** con Framer Motion: reveals al entrar viewport, parallax sutil en imágenes hero, contadores animados, paths SVG que se dibujan.
- **Sin librerías de mapas ni de charts**: SVG inline y composiciones tipográficas, para un resultado más editorial y menos genérico.
- **Imágenes Unsplash** servidas via URL con parámetros de optimización (`?w=...&q=80&auto=format`).
- **Respeta `prefers-reduced-motion`** para accesibilidad.

## Síntesis del contenido

El contenido original de los `.docx` se transformó en comunicación visual:

- **Conservado literal**: cifras (+90%), provincias, "Brasil principal comprador", los 3 sectores, los actores, los impactos, la frase final ("modelo agroindustrial, tecnificado e intensivo").
- **Reescrito como titulares con verbo activo**: cada slide tiene una idea dominante.
- **Visualizado como dato**: porcentajes → contadores animados; flujo → diagrama interactivo; geografía → mapa SVG.
- **Eliminado de la pantalla** (queda para el orador): conectores narrativos del guión oral, introducciones, frases de transición.

Cada slide funciona como apoyo visual de la exposición oral — **no** como documento pegado en pantalla.

## Stack técnico

- React 18 + Vite 5
- Tailwind CSS 3 (paleta custom, sin defaults)
- Framer Motion 11
- lucide-react (iconografía)

## Estructura de archivos

```
src/
├── App.jsx               # composición + navegación por teclado
├── main.jsx
├── index.css             # tipografías, scroll-snap, grain, vignette
├── data/slides.js        # contenido sintetizado
└── components/
    ├── Hero.jsx
    ├── Definition.jsx
    ├── MapSection.jsx
    ├── GeoConditions.jsx
    ├── ProcessDiagram.jsx
    ├── SectorDetail.jsx
    ├── ActorsGrid.jsx
    ├── Destination.jsx
    ├── ImpactSection.jsx
    ├── Closing.jsx
    ├── ProgressBar.jsx
    ├── SectionIndex.jsx
    ├── SectionFrame.jsx
    ├── AnimatedCounter.jsx
    ├── RevealText.jsx
    └── ScrollIndicator.jsx
```

## Notas de compatibilidad y limitaciones

- Optimizado para **navegadores modernos** (Chrome/Edge/Firefox actuales).
- En **móvil** el scroll-snap se relaja para que el scroll sea natural y las grillas se apilen en una columna.
- El **mapa SVG** de Argentina utiliza siluetas simplificadas con fines ilustrativos; no es cartográficamente preciso.
- Las **imágenes de Unsplash** requieren conexión a internet la primera vez. Para uso 100% offline, descargar las imágenes y reemplazar las URLs en `src/components/Hero.jsx`, `src/data/slides.js` y `src/components/Closing.jsx`.
