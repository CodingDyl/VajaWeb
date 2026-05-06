import { FaFire, FaShower, FaTree } from 'react-icons/fa';
import { clad_black_pine, clearPine, western, thermo, obeche, aurora_1, elysium_1, loyly_1, kaelis_1, standard_1 } from '../assets';

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
          { label: 'Vakio', to: '/products/vakio' },
        ],
      },
      {
        heading: 'Steam Rooms',
        items: [
          { label: 'Nordmann', to: '/steam-rooms' },
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
    description: 'A modern outdoor glass sauna with oak interior finishes and LED ambient lighting for premium home wellness spaces.',
    image: aurora_1,
  },
  {
    name: 'Elysium',
    slug: 'elysium',
    description: 'A luxury sauna and shower combo designed for complete outdoor recovery and spa-style home installations.',
    image: elysium_1,
  },
  {
    name: 'Löyly',
    slug: 'loyly',
    description: 'A wood fired sauna with a wood burning heater for authentic traditional sessions and bold rustic design.',
    image: loyly_1,
  },
  {
    name: 'Kaelis',
    slug: 'kaelis',
    description: 'A custom outdoor sauna with premium timber and bespoke detailing for high-end residential wellness projects.',
    image: kaelis_1,
  },
  {
    name: 'Vakio',
    slug: 'vakio',
    description: 'A DIY sauna kit range for compact spaces, quick setup, and scalable upgrades over time.',
    image: standard_1,
  }
];

export { navItems, productCategories, diyKits, aromaConcentrates, saunaRooms };
