import { oak_sauna_board, obeche_main, triple_shadows_pine, thermo_pine_main, triple_shadow_thermo_pine, pine_stained_black, aurora_1, aurora_2, elysium_1, elysium_2, kaelis_1, kaelis_2, loyly_1, loyly_2, thermo_pine_tongue_groove, imersive_black_pine, rugged_black_stained_rough_pine, thermo } from '../assets';

export const products = {
  'aurora': {
    name: 'Aurora',
    slug: 'aurora',
    description: 'Inspired by the breathtaking Northern Lights, this name evokes serenity, warmth, and natural beauty. Perfect for a sleek, modern sauna that offers a tranquil escape.',
    productTitle: 'Compact tranquility',
    // productDescription: 'The Sola sauna is a compact and elegant sauna that offers a serene and tranquil experience. It is designed to fit seamlessly into any space, making it an ideal choice for those who want a luxurious sauna without the need for a large room.',
    images: [aurora_1, aurora_2],
    embed: 'https://kuula.co/share/hJQTz?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    features: [
      {
        title: 'Easy installation',
        description: 'Easy to install: Approximately 4–6 hours with two people.',
        icon: '🔧'
      },
      {
        title: 'Interior',
        description: 'Cozy, pleasant look and feel thanks to the color and quality of the thermo-aspen. Small dimensions make Cala easy to fit into smaller (bath)rooms. Premium door with a metal or wooden handle. Wooden details are pretreated with sauna wax.',
        icon: '🏠'
      },
      {
        title: 'Lighting',
        description: 'The Sola sauna features a built-in LED lighting system that provides a soft, ambient glow to create a relaxing atmosphere. The lighting can be adjusted to your preferences, allowing you to create the perfect lighting for your sauna experience.',
        icon: '💡'
      },
      {
        title: 'Size',
        description: 'The Sola sauna is available in two sizes: solo and four-person. The solo size is perfect for those who want a compact and intimate sauna experience, while the four-person size is perfect for those who want a spacious and luxurious sauna experience.',
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
    description: 'Named after the mythical paradise, this name represents ultimate relaxation and luxury. Ideal for a high-end, spa-like sauna experience.',
    productTitle: 'Elegant relaxation',
    // productDescription: 'The Elysium sauna is a high-end, spa-like sauna that offers a luxurious and serene experience. It is designed to provide a comfortable and relaxing atmosphere, perfect for those who want to escape the stresses of everyday life.',
    images: [elysium_1, elysium_2],
    embed: "https://kuula.co/share/hJQn2?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30",
    features: [
      {
        title: 'Easy installation',
        description: 'Easy to install: Approximately 4–6 hours with two people.',
        icon: '🔧'
      },
      {
        title: 'Interior',
        description: 'Cozy, pleasant look and feel thanks to the color and quality of the thermo-aspen. Small dimensions make Cala easy to fit into smaller (bath)rooms. Premium door with a metal or wooden handle. Wooden details are pretreated with sauna wax.',
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
    description: 'Meaning “heavenly” in Latin, this name conveys a sense of elegance and sophistication. Perfect for a minimalist, contemporary sauna with a refined aesthetic.',
    productTitle: 'Heavenly elegance',
    // productDescription: 'The Celeste sauna is a minimalist, contemporary sauna with a refined aesthetic. It is designed to provide a comfortable and relaxing atmosphere, perfect for those who want to escape the stresses of everyday life.',
    images: [loyly_1, loyly_2],
    embed: 'https://kuula.co/share/hJQdC?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30',
    features: [
      {
        title: 'Easy installation',
        description: 'Easy to install: Approximately 4–6 hours with two people.',
        icon: '🔧'
      },
      {
        title: 'Interior',
        description: 'Cozy, pleasant look and feel thanks to the color and quality of the thermo-aspen. Small dimensions make Cala easy to fit into smaller (bath)rooms. Premium door with a metal or wooden handle. Wooden details are pretreated with sauna wax.',  
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
    description: 'Inspired by the rare and precious gemstone, this name signifies luxury, uniqueness, and radiance. A great fit for a bespoke sauna design with intricate details.',
    productTitle: 'Luxury and radiance',
    // productDescription: 'The Opal sauna is a luxurious and unique sauna that offers a radiant and radiant atmosphere, perfect for those who want to escape the stresses of everyday life.',
    images: [kaelis_1, kaelis_2],
    embed: "https://kuula.co/share/hJQD2?logo=-1&info=0&fs=1&vr=1&initload=0&thumbs=1&margin=30",
    features: [
      {
        title: 'Easy installation',
        description: 'Easy to install: Approximately 4–6 hours with two people.',
        icon: '🔧'
      },
      {
        title: 'Interior',
        description: 'Cozy, pleasant look and feel thanks to the color and quality of the thermo-aspen. Small dimensions make Cala easy to fit into smaller (bath)rooms. Premium door with a metal or wooden handle. Wooden details are pretreated with sauna wax.',
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
  }
};
