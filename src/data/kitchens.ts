export interface Kitchen {
  slug: string
  name: string
  style: 'moderna' | 'rustica' | 'minimalista' | 'con-isla' | 'clasica'
  hasIsland?: boolean
  description: string
  images: string[]
  details: {
    materials: string
    location: string
  }
  featured: boolean
}

export const kitchens: Kitchen[] = [
  {
    slug: 'compacta-isla-marmol',
    name: 'Cocina compacta abierta con isla',
    style: 'minimalista',
    hasIsland: true,
    description:
      'Cocina compacta de diseño minimalista con isla central y encimera de mármol. Frentes sin tiradores en acabado mate que maximizan la limpieza visual del espacio. Un proyecto donde la funcionalidad y la elegancia se fusionan en cada detalle.',
    images: [
      '/images/cocinas/compacta-isla-marmol/principal.jpeg',
      '/images/cocinas/compacta-isla-marmol/2.jpeg',
    ],
    details: {
      materials: 'Lacado mate sin tiradores, encimera mármol blanco',
      location: 'Alicante',
    },
    featured: true,
  },
  {
    slug: 'elegante-isla-vistas-mar',
    name: 'Cocina elegante con isla',
    style: 'moderna',
    hasIsland: true,
    description:
      'Cocina abierta con isla de gran formato y acabados de primera calidad. La combinación de madera natural y superficies lacadas crea un ambiente cálido y sofisticado. Diseñada para disfrutar de la cocina con vistas privilegiadas.',
    images: [
      '/images/cocinas/elegante-isla-vistas-mar/principal.jpeg',
      '/images/cocinas/elegante-isla-vistas-mar/2.jpeg',
    ],
    details: {
      materials: 'Madera natural, lacado blanco mate, encimera cuarzo',
      location: 'Altea, Alicante',
    },
    featured: true,
  },
  {
    slug: 'moderna-blanca-peninsula',
    name: 'Cocina moderna con península',
    style: 'moderna',
    description:
      'Cocina de líneas limpias con península integrada que amplía la zona de trabajo y sirve como barra de desayuno. Acabados en blanco mate con encimera de cuarzo que aportan luminosidad al espacio. Un diseño moderno y funcional para el día a día.',
    images: [
      '/images/cocinas/moderna-blanca-peninsula/principal.jpeg',
      '/images/cocinas/moderna-blanca-peninsula/2.jpeg',
    ],
    details: {
      materials: 'Lacado blanco mate, encimera cuarzo blanco',
      location: 'Gran Alacant, Alicante',
    },
    featured: true,
  },
  {
    slug: 'moderna-taupe-mesa',
    name: 'Cocina moderna en taupe con mesa',
    style: 'moderna',
    description:
      'Cocina en tonos taupe con mesa integrada que invita a reunir a la familia. Los acabados cálidos y la distribución pensada crean un espacio acogedor sin renunciar a la modernidad. Materiales de alta durabilidad para un uso intensivo.',
    images: [
      '/images/cocinas/moderna-taupe-mesa/principal.jpeg',
      '/images/cocinas/moderna-taupe-mesa/2.jpeg',
      '/images/cocinas/moderna-taupe-mesa/3.jpeg',
    ],
    details: {
      materials: 'Laminado taupe, encimera compacto mineral, mesa lacada',
      location: 'San Juan, Alicante',
    },
    featured: false,
  },
  {
    slug: 'negra-madera-roble',
    name: 'Cocina negra con madera de roble',
    style: 'moderna',
    description:
      'Contraste impactante entre los frentes negros mate y la madera de roble natural. Un diseño audaz que equilibra lo contemporáneo con lo orgánico para crear una cocina de gran personalidad. Acabados de primera calidad para un resultado duradero.',
    images: [
      '/images/cocinas/negra-madera-roble/principal.jpeg',
      '/images/cocinas/negra-madera-roble/2.jpeg',
    ],
    details: {
      materials: 'Lacado negro mate, chapa de roble natural, encimera compacto',
      location: 'Los Arenales del Sol, Alicante',
    },
    featured: false,
  },
  {
    slug: 'verde-salvia-marmol',
    name: 'Cocina verde salvia con mármol',
    style: 'moderna',
    description:
      'Cocina en verde salvia con encimera de mármol blanco que aporta carácter y distinción al espacio. Un color tendencia que transforma la estancia en un ambiente único y lleno de personalidad. La combinación con el mármol eleva el conjunto a un nivel premium.',
    images: [
      '/images/cocinas/verde-salvia-marmol/principal.jpeg',
      '/images/cocinas/verde-salvia-marmol/2.jpeg',
      '/images/cocinas/verde-salvia-marmol/3.jpeg',
    ],
    details: {
      materials: 'Lacado verde salvia mate, encimera mármol blanco',
      location: 'Alicante',
    },
    featured: false,
  },
]
