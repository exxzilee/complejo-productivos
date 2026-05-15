// Synthesized content for the presentation.
// Source documents: Resumen_Complejo_Productivo_Arroz.docx + Guion_Oral_Complejo_Productivo_Arroz.docx

export const presenters = [
  'Santiago Ochoa',
  'Tobías Ardans',
  'Joaquín Sosa'
]

export const conditions = [
  {
    title: 'Clima cálido y húmedo',
    desc: 'Temperaturas elevadas durante el ciclo de cultivo y alta humedad ambiente.',
    icon: 'Sun'
  },
  {
    title: 'Agua en abundancia',
    desc: 'Disponibilidad permanente para el sistema de inundación controlada.',
    icon: 'Droplets'
  },
  {
    title: 'Relieve llano',
    desc: 'Terrenos planos que permiten el anegamiento uniforme de los cuadros.',
    icon: 'Mountain'
  },
  {
    title: 'Suelos aptos',
    desc: 'Suelos que retienen el agua y soportan la inundación sin erosionarse.',
    icon: 'Layers'
  }
]

export const sectors = [
  {
    id: 'agrario',
    n: '01',
    name: 'Sector Agrario',
    short: 'Cultivo',
    desc: 'Preparación del suelo, siembra, riego e inundación de los campos y cosecha.',
    // Combine harvester working a golden grain field — distinct from the hero flooded field
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=85&auto=format&fit=crop',
    imageAlt: 'Cosecha mecanizada de granos',
    bullets: [
      'Preparación del suelo y nivelación',
      'Siembra en cuadros inundables',
      'Riego e inundación controlada',
      'Cosecha mecanizada'
    ]
  },
  {
    id: 'industrial',
    n: '02',
    name: 'Sector Industrial',
    short: 'Molienda',
    desc: 'Procesamiento del arroz en molinos arroceros: secado, limpieza y empaquetado.',
    // Interior of a grain/food processing facility — industrial setting
    image: 'https://images.unsplash.com/photo-1565017228801-b8bce6b3ebc0?w=1920&q=85&auto=format&fit=crop',
    imageAlt: 'Interior de molino arrocero',
    bullets: [
      'Secado del grano',
      'Limpieza y descascarillado',
      'Pulido y selección',
      'Empaquetado final'
    ]
  },
  {
    id: 'comercial',
    n: '03',
    name: 'Sector Comercial',
    short: 'Distribución',
    desc: 'Distribución y venta en el mercado interno y exportación al exterior.',
    // Cargo containers / port logistics — export and trade
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1920&q=85&auto=format&fit=crop',
    imageAlt: 'Logística y distribución de granos',
    bullets: [
      'Logística y transporte',
      'Comercialización interna',
      'Exportación regional',
      'Acuerdos con compradores'
    ]
  }
]

export const actors = [
  { name: 'Productores arroceros', detail: 'Llevan adelante el cultivo en los campos.' },
  { name: 'Trabajadores rurales', detail: 'Mano de obra en siembra, riego y cosecha.' },
  { name: 'Molinos arroceros', detail: 'Procesan el grano hasta su forma comercial.' },
  { name: 'Cooperativas', detail: 'Asocian productores para fortalecer la cadena.' },
  { name: 'Transportistas', detail: 'Trasladan la producción entre eslabones.' },
  { name: 'Empresas exportadoras', detail: 'Conectan la producción con mercados externos.' },
  { name: 'Estado', detail: 'Regula, promueve y controla la actividad.' },
  { name: 'Consumidores', detail: 'Destino final del producto en hogares y comercios.' }
]

export const impacts = [
  {
    kind: 'Ambiental',
    title: 'Presión sobre los recursos',
    desc: 'Uso intensivo de agua, contaminación por agroquímicos, degradación del suelo y alteración de ecosistemas.'
  },
  {
    kind: 'Económico',
    title: 'Altos costos productivos',
    desc: 'Insumos, energía y logística elevan el costo de producción y exponen al sector a la volatilidad del mercado.'
  },
  {
    kind: 'Social y de gestión',
    title: 'Manejo sustentable',
    desc: 'Equilibrar producción y conservación exige planificación, tecnología y políticas de uso racional del agua.'
  }
]
