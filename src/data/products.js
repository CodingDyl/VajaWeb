import { clearPine, western, thermo, obeche, productImage, productImage2 } from '../assets';

export const products = {
  'aurora': {
    name: 'Aurora',
    slug: 'aurora',
    description: 'Inspired by the breathtaking Northern Lights, this name evokes serenity, warmth, and natural beauty. Perfect for a sleek, modern sauna that offers a tranquil escape.',
    productTitle: 'Compact tranquility',
    // productDescription: 'The Sola sauna is a compact and elegant sauna that offers a serene and tranquil experience. It is designed to fit seamlessly into any space, making it an ideal choice for those who want a luxurious sauna without the need for a large room.',
    images: ["https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", productImage, productImage2],
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
            title: 'Premium Pine Wood',
            image: clearPine
        },
        {
            title: 'Thermo Treated Poplar',
            image: thermo
        },
        {
            title: 'Obeché Slats',
            image: obeche
        }
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
  'elysium': {
    name: 'Elysium',
    slug: 'elysium',
    description: 'Named after the mythical paradise, this name represents ultimate relaxation and luxury. Ideal for a high-end, spa-like sauna experience.',
    productTitle: 'Elegant relaxation',
    // productDescription: 'The Elysium sauna is a high-end, spa-like sauna that offers a luxurious and serene experience. It is designed to provide a comfortable and relaxing atmosphere, perfect for those who want to escape the stresses of everyday life.',
    images: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", productImage, productImage2],
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
            title: 'Premium Pine Wood',
            image: clearPine
        },
        
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
  'celeste': {
    name: 'Celeste',
    slug: 'celeste',
    description: 'Meaning “heavenly” in Latin, this name conveys a sense of elegance and sophistication. Perfect for a minimalist, contemporary sauna with a refined aesthetic.',
    productTitle: 'Heavenly elegance',
    // productDescription: 'The Celeste sauna is a minimalist, contemporary sauna with a refined aesthetic. It is designed to provide a comfortable and relaxing atmosphere, perfect for those who want to escape the stresses of everyday life.',
    images: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", productImage, productImage2],
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
            title: 'Premium Pine Wood',
            image: clearPine
        },
        {
            title: 'Thermo Treated Poplar',
            image: thermo
        },
        {
            title: 'Obeché Slats',
            image: obeche
        }
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  }, 
  'opal': {
    name: 'Opal',
    slug: 'opal',
    description: 'Inspired by the rare and precious gemstone, this name signifies luxury, uniqueness, and radiance. A great fit for a bespoke sauna design with intricate details.',
    productTitle: 'Luxury and radiance',
    // productDescription: 'The Opal sauna is a luxurious and unique sauna that offers a radiant and radiant atmosphere, perfect for those who want to escape the stresses of everyday life.',
    images: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", productImage, productImage2],
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
            title: 'Premium Pine Wood',
            image: clearPine
        },
        
    ],
    dimensions: {
        width: '1400mm',
        depth: '1400mm',
        height: '2100mm'
    },
    gallery: ["https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  }
};
