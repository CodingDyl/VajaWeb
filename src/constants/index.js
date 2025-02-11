import { FaFire, FaShower, FaTree } from 'react-icons/fa';
import { clearPine, western, thermo, obeche } from '../assets';

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
          { label: 'Celeste', to: '/products/celeste' },
          { label: 'Opal', to: '/products/opal' },
        ],
      },
      {
        heading: 'Steam Rooms',
        items: [
          { label: 'Nordmann AT4D Steam Generator', to: '/products/steam-generator' },
          { label: 'Nordmann Omega Steam System', to: '/products/steam-system' },
        ],
      },
      {
        heading: 'Customization',
        items: [
          { label: 'Equipment', to: '/products/equipment' },
          { label: 'Accessories', to: '/products/accessories' },
        ],
      },
      // {
      //   heading: 'Other',
      //   items: [
      //     { label: 'DIY Sauna Kits', to: '/products/diy-sauna-kits' },
      //     { label: 'Aroma Concentrates', to: '/products/auroma-concentrates' },
      //   ],
      // }
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
    image: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Elysium',
    slug: 'elysium',
    description: 'Named after the mythical paradise, this name represents ultimate relaxation and luxury. Ideal for a high-end, spa-like sauna experience.',
    image: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Celeste',
    slug: 'celeste',
    description: 'Meaning “heavenly” in Latin, this name conveys a sense of elegance and sophistication. Perfect for a minimalist, contemporary sauna with a refined aesthetic.',
    image: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Opal',
    slug: 'opal',
    description: 'Inspired by the rare and precious gemstone, this name signifies luxury, uniqueness, and radiance. A great fit for a bespoke sauna design with intricate details.',
    image: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

export { navItems, productCategories, diyKits, aromaConcentrates, saunaRooms };
