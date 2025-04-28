import { FaFire, FaShower, FaTree, FaSnowflake } from 'react-icons/fa';
import { clad_black_pine, clearPine, western, thermo, obeche, aurora_1, elysium_1, loyly_1, kaelis_1, ice_bath_1, ice_bath_2 } from '../assets';

const navItems = [
  {
    label: 'Our Products',
    to: '/products',
    dropdown: [
      {
        heading: 'Sauna Collections',
        items: [
          { label: 'Aurora', to: '/products/aurora' },
          { label: 'Elysium', to: '/products/elysium' },
          { label: 'Loyly', to: '/products/loyly' },
          { label: 'Kaelis', to: '/products/kaelis' },
        ],
      },
      {
        heading: 'Steam Rooms',
        items: [
          { label: 'Nordmann', to: '/steam-rooms' },
        ],
      },
      {
        heading: 'Ice Baths',
        items: [
          { label: 'Premium Ice Bath', to: '/products/ice-bath/premium-ice-bath' },
        ],
      },
      {
        heading: 'Customization',
        items: [
          { label: 'Equipment', to: '/products/equipment' },
          { label: 'Accessories', to: '/products/accessories' },
        ],
      },
    ],
  },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const productCategories = [
  {
    title: 'Saunas',
    icon: FaFire,
    description: 'Experience the ultimate relaxation with our premium saunas, designed for both residential and commercial use.',
    products: [
      { name: 'Clad Black Pine', image: clad_black_pine },
      { name: 'Clear Pine', image: clearPine },
      { name: 'Western Red Cedar', image: western },
      { name: 'Thermo Treated Poplar', image: thermo },
      { name: 'Obeché Slats', image: obeche },
    ]
  },
  {
    title: 'Steam Rooms',
    icon: FaShower,
    description: 'Transform your space with our state-of-the-art steam rooms, perfect for home spas or commercial wellness centers.',
    products: [
      { name: 'Nordmann AT4D Steam Generator', image: 'https://plus.unsplash.com/premium_photo-1683141182191-6c3dc91f9536?q=80&w=1770&auto=format&fit=crop' },
      { name: 'Nordmann Omega Steam System', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1770&auto=format&fit=crop' },
    ]
  },
  {
    title: 'Ice Baths',
    icon: FaSnowflake,
    description: 'Experience the benefits of cold therapy with our premium ice baths, designed for optimal recovery and performance.',
    products: [
      { name: 'Premium Ice Bath', image: ice_bath_2 },
    ]
  },
  {
    title: 'Accessories',
    icon: FaTree,
    description: 'Enhance your sauna or steam room experience with our carefully curated selection of accessories.',
    products: [
      { name: 'Western Red Cedar Sand Timer', image: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1770&auto=format&fit=crop' },
      { name: 'Cedar Bucket & Ladle', image: 'https://images.unsplash.com/photo-1617469165786-8007eda3caa7?q=80&w=1770&auto=format&fit=crop' },
      { name: 'Thermometer / Hygrometer', image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1770&auto=format&fit=crop' },
    ]
  },
];

const diyKits = [
  { name: 'Sauna Kit 0', capacity: '0 – 1 Person', dimensions: '1400mm Wide x 1400mm Deep' },
  { name: 'Sauna Kit 1', capacity: '1 - 2 Person', dimensions: '1850mm Wide x 1350mm Deep' },
  { name: 'Sauna Kit 2', capacity: '3 - 4 Person', dimensions: '2100mm Wide x 1950mm Deep' },
  { name: 'Sauna Kit 3', capacity: '5 - 6 Person', dimensions: '2600mm Wide x 2100mm Deep' },
];

const aromaConcentrates = [
  'Pine Needle', 'Eucalyptus', 'Sandalwood', 'Peppermint',
  'Green Apple', 'Blood Orange', 'Rose'
];

const saunaRooms = [
  {
    name: 'Aurora',
    slug: 'aurora',
    description: 'Inspired by the breathtaking Northern Lights, this name evokes serenity, warmth, and natural beauty. Perfect for a sleek, modern sauna that offers a tranquil escape.',
    image: aurora_1,
  },
  {
    name: 'Elysium',
    slug: 'elysium',
    description: 'Named after the mythical paradise, this name represents ultimate relaxation and luxury. Ideal for a high-end, spa-like sauna experience.',
    image: elysium_1,
  },
  {
    name: 'Löyly',
    slug: 'loyly',
    description: 'Meaning "heavenly" in Latin, this name conveys a sense of elegance and sophistication. Perfect for a minimalist, contemporary sauna with a refined aesthetic.',
    image: loyly_1,
  },
  {
    name: 'Kaelis',
    slug: 'kaelis',
    description: 'Inspired by the rare and precious gemstone, this name signifies luxury, uniqueness, and radiance. A great fit for a bespoke sauna design with intricate details.',
    image: kaelis_1,
  }
];

const iceBaths = [
  {
    name: 'Premium Ice Bath',
    slug: 'premium-ice-bath',
    description: 'Experience the ultimate in cold therapy with our Premium Ice Bath. Designed for optimal recovery and performance, this state-of-the-art ice bath combines advanced technology with elegant design.',
    productTitle: 'Professional Cold Therapy Solution',
    images: [ice_bath_2, ice_bath_1],
    features: [
      {
        title: 'Temperature Control',
        description: 'Maintains water temperature from 16°C to 0.5°C for optimal cold therapy',
        icon: '🌡️'
      },
      {
        title: 'Sanitation System',
        description: 'Advanced ozone sanitation and filtration system for clean, safe water',
        icon: '🧼'
      },
      {
        title: 'Automated Ice Creation',
        description: 'Built-in system for automated ice creation and temperature maintenance',
        icon: '❄️'
      },
      {
        title: 'Easy Setup',
        description: 'Simple plug & plunge operation with minimal setup required',
        icon: '🔌'
      },
      {
        title: 'Ambient Lighting',
        description: 'Integrated underwater lighting for a premium experience',
        icon: '💡'
      },
      {
        title: 'Versatile Installation',
        description: 'Suitable for both indoor and outdoor use under cover',
        icon: '🏠'
      },
      {
        title: 'Warranty',
        description: 'Comprehensive 1.5 years warranty for peace of mind',
        icon: '📜'
      }
    ],
    technical: {
      frame: 'L 2320mm x W 815mm x H 700mm',
      tub: 'L 1450mm x W 600mm x H 575mm',
      material: 'Stainless steel',
      voltage: '220V – 240V',
      socket: '16-amp 3 pin plug',
      power: '1000 Watts',
      current: '3.5 amps',
      noise: 'dB50'
    },
    maintenance: [
      {
        title: 'Getting Started',
        description: 'Watch Video here',
        icon: '▶️'
      },
      {
        title: 'Maintenance Guide',
        description: 'Watch Video here',
        icon: '📹'
      },
      {
        title: 'Monthly Maintenance',
        description: 'Empty and refill with water / rinse filter cartridge',
        icon: '📅'
      },
      {
        title: 'Quarterly Maintenance',
        description: 'Change the filter cartridge',
        icon: '🔄'
      }
    ],
    considerations: [
      {
        title: 'Access',
        description: 'When planning the placement of your ice bath, be sure to account for its width and length to avoid any obstacles, such as narrow doorways, sharp corners, or steep staircases. If you\'re unsure about access, we recommend sending us a video showing the path from curb side to the intended placement area. This allows us to assist with any concerns.'
      },
      {
        title: 'Electrical Connection',
        description: 'Plug the ice bath directly into a dedicated 220V outlet. For outdoor setups, ensure a weather-proof power source is installed near the tub location. Avoid using extension cords. Position the electrical connection at a safe distance from the bath to prevent any water from reaching the outlet.'
      },
      {
        title: 'Airflow',
        description: 'Ensure the air vents on your ice bath have adequate airflow. Leave at least 5 cm of space between the unit and any walls. Avoid placing the bath directly against a wall, as restricted airflow can affect performance.'
      }
    ]
  }
];

export { navItems, productCategories, diyKits, aromaConcentrates, saunaRooms, iceBaths };
