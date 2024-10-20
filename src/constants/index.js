import { FaFire, FaShower, FaTree } from 'react-icons/fa';
import { clearPine, western, thermo, obeche } from '../assets';

const navItems = [
  {
    label: 'Our Products',
    to: '/products',
    dropdown: [
      { label: 'Steam Rooms', to: '/products/steam-rooms' },
      { label: 'Saunas', to: '/products/saunas' },
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

export { navItems, productCategories, diyKits, aromaConcentrates };
