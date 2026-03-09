import { oak_sauna_board, obeche_main, triple_shadows_pine, thermo_pine_main, triple_shadow_thermo_pine, pine_stained_black, aurora_1, aurora_2, elysium_1, elysium_2, kaelis_1, kaelis_2, loyly_1, loyly_2, thermo_pine_tongue_groove, imersive_black_pine, rugged_black_stained_rough_pine, thermo, standard_1, standard_2, pine_main } from '../assets';

export const products = {
  'aurora': {
    name: 'Aurora',
    slug: 'aurora',
    description: 'Aurora is a modern outdoor glass sauna designed for premium homes in South Africa. It combines a bold black glass facade, oak sauna board interior, and ambient LED lighting for a high-end wellness experience.',
    productTitle: 'Modern outdoor glass sauna',
    productDescription: 'If you are looking for a modern sauna outdoor design with clean architecture, Aurora delivers a minimalist profile with premium timber finishes. This model is ideal for homeowners who want a statement sauna with everyday comfort and professional installation.',
    images: [aurora_1, aurora_2],
    embed: 'https://kuula.co/share/hJQTz?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    features: [
      {
        title: 'Fast installation',
        description: 'Engineered for streamlined on-site assembly with expert support from the Vaja installation team.',
        icon: '🔧'
      },
      {
        title: 'Premium interior',
        description: 'Oak sauna board walls and Obeche seating provide a refined look with comfortable heat performance.',
        icon: '🏠'
      },
      {
        title: 'Ambient LED lighting',
        description: 'Integrated backrest lighting creates a calming environment for evening sessions and spa-style relaxation.',
        icon: '💡'
      },
      {
        title: 'Optimized footprint',
        description: 'Balanced dimensions make Aurora suitable for luxury courtyards, pool areas, and modern residential layouts.',
        icon: '📏'
      }
    ],
    materials: [
        {
            title: 'Oak Sauna Board',
            image: oak_sauna_board
        },
        {
            title: 'Obeché Slats',
            image: obeche_main
        },
        {
            title: 'Triple Shadow Thermo Pine',
            image: triple_shadow_thermo_pine
        }
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: [aurora_1, aurora_2]
  },
  'elysium': {
    name: 'Elysium',
    slug: 'elysium',
    description: 'Elysium is a luxury outdoor sauna and shower combo that blends heat therapy and cooling rinse in one premium unit. It is built for South African homes that want a complete wellness zone in a compact outdoor format.',
    productTitle: 'Outdoor sauna with shower combo',
    productDescription: 'This sauna and shower combo uses Black Pine and Obeche timber finishes for a high-end spa aesthetic. Elysium is ideal for daily recovery, post-training routines, and residential spa upgrades where design and practicality matter.',
    images: [elysium_1, elysium_2],
    embed: "https://kuula.co/share/hJQn2?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30",
    features: [
      {
        title: 'Integrated wellness layout',
        description: 'Sauna and shower are designed as one system for smooth transitions between heat and cooling.',
        icon: '🔧'
      },
      {
        title: 'Premium timber interior',
        description: 'Obeche seating and wall details create a comfortable, low-maintenance sauna interior with a luxury finish.',
        icon: '🏠'
      }
    ],
    materials: [
        {
            title: 'Black Pine Tongue & Groove',
            image: pine_stained_black
        },
        {
            title: 'Obeche Slats',
            image: obeche_main
        }
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: [elysium_1, elysium_2]
  },
  'loyly': {
    name: 'Loyly',
    slug: 'loyly',
    description: 'Loyly is a wood fired sauna designed for authentic traditional sauna sessions. It combines a rustic black pine exterior, wood burning heater, and feature window for clients who want a classic fire-heated experience.',
    productTitle: 'Wood fired sauna with wood burning stove',
    productDescription: 'For buyers searching for a wood burning sauna stove setup, Loyly provides traditional heat, natural timber character, and robust performance. It is ideal for outdoor spaces where a classic sauna ritual is preferred over electric systems.',
    images: [loyly_1, loyly_2],
    embed: 'https://kuula.co/share/hJQdC?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    features: [
      {
        title: 'Traditional heating',
        description: 'Configured for a wood-fired heater to deliver deep, natural sauna heat and authentic loyly steam.',
        icon: '🔧'
      },
      {
        title: 'Rugged timber finish',
        description: 'Black pine interior and exterior materials create a bold, durable aesthetic suited to outdoor installations.',  
        icon: '🏠' 
      }
    ],
    materials: [
        {
            title: 'Rugged Black Stained Rough Pine',
            image: rugged_black_stained_rough_pine
        },
        {
            title: 'Black Pine Interior',
            image: pine_stained_black
        }
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: [loyly_1, loyly_2]
  }, 
  'kaelis': {
    name: 'Kaelis',
    slug: 'kaelis',
    description: 'Kaelis is a custom outdoor sauna built for homeowners who want a bespoke sauna with premium timber selections. The design blends thermo pine cladding, Obeche seating, and modern detailing for daily wellness use.',
    productTitle: 'Custom outdoor sauna',
    productDescription: 'If you are planning a custom built sauna, Kaelis offers flexibility in finish, layout, and installation planning. It is designed for clients who value a tailored sauna aesthetic with professional project support from concept to completion.',
    images: [kaelis_1, kaelis_2],
    embed: "https://kuula.co/share/hJQD2?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30",
    features: [
      {
        title: 'Custom-ready build',
        description: 'Designed for bespoke projects with options that suit premium residential and hospitality spaces.',
        icon: '🔧'
      },
      {
        title: 'Comfort-focused interior',
        description: 'Obeche slats and carefully selected wood surfaces deliver comfort, durability, and visual warmth.',
        icon: '🏠'
      }
    ],
    materials: [
        {
            title: 'Thermo Pine Tongue & Groove',
            image: thermo_pine_main
        },
        {
            title: 'Triple Shadow Pine',
            image: triple_shadows_pine
        },
        {
          title: 'Obeché Slats',
          image: obeche_main
        }
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: [kaelis_1, kaelis_2]
  },
  'vakio': {
    name: 'Vakio',
    slug: 'vakio',
    description: 'Vakio is our DIY sauna kit range for buyers who want a sauna for sale that is simple to install and easy to upgrade. It is a practical solution for homes, guest lodges, and compact wellness spaces.',
    productTitle: 'DIY sauna kit for homes and small spaces',
    productDescription: 'This DIY sauna kit South Africa range is pre-sized for fast setup and long-term reliability. Vakio gives you a clean, modern sauna room with upgrade paths for lighting, accessories, and finish options as your space evolves.',
    images: [standard_1, standard_2],
    embed: 'https://kuula.co/share/h1Tqh?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    features: [
      {
        title: 'Easy installation',
        description: 'Pre-designed kit layout supports efficient installation with clear assembly steps.',
        icon: '🔧'
      },
      {
        title: 'Clean, minimalistic design',
        description: 'Clean lines and proportioned dimensions create a modern sauna look that fits contemporary interiors.',
        icon: '🏠'
      },
      {
        title: 'Precision Craftsmanship',
        description: 'Each kit is meticulously designed and built to ensure consistent performance and durability.',
        icon: '🔨'
      },
      {
        title: 'Designed for small spaces',
        description: 'Our Standard Sauna Kit range is designed for small spaces, making it an ideal choice for those who want a luxurious sauna without the need for a large room.',
        icon: '🏠'
      },
      {
        title: 'LED lighting provision and ventilation slots',
        description: 'Our Standard Sauna Kit range includes LED lighting provision and ventilation slots, making it an ideal choice for those who want a luxurious sauna without the need for a large room.',
        icon: '💡'
      },
      {
        title: 'Fully Upgradeable',
        description: 'Fully upgradeable with accessories (backrests, lighting kits, glass doors, etc.)',
        icon: '🔧'
      }
    ],
    materials: [
      {
        title: 'Pine Tongue & Groove',
        image: pine_main
      },
      {
        title: 'Obeché Slats',
        image: obeche_main
      }
    ],
    kits: [
      {
        id: 0,
        name: 'Kit 0',
        dimensions: {
          width: '1400mm',
          depth: '1400mm'
        }
      },
      {
        id: 1,
        name: 'Kit 1',
        dimensions: {
          width: '1800mm',
          depth: '1400mm'
        }
      },
      {
        id: 2,
        name: 'Kit 2',
        dimensions: {
          width: '2100mm',
          depth: '1800mm'
        }
      },
      {
        id: 3,
        name: 'Kit 3',
        dimensions: {
          width: '2600mm',
          depth: '2100mm'
        }
      }
    ],
    gallery: [standard_1, standard_2]
  }
};
