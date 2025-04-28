import { kaelis_1, aurora_1, loyly_1, elysium_1, ice_bath_1, steam_product_1, kaelis_2, aurora_2, loyly_2, elysium_2, ice_bath_2, steam_product_2, custom_2, custom_1, custom_3 } from "../assets";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface GalleryCategory {
  route: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    route: 'category/kaelis',
    title: 'Kaelis',
    description: 'A refined balance of warmth and modern design, featuring thermo pine tongue-and-groove exterior and premium obeche wood seating.',
    images: [
      {
        id: 1,
        src: kaelis_1,
        alt: 'Kaelis sauna exterior',
        title: 'Kaelis Exterior'
      },
      {
        id: 11,
        src: kaelis_2,
        alt: 'Kaelis interior with obeche wood seating',
        title: 'Premium Interior'
      }
    ],
  },
  {
    route: 'category/aurora',
    title: 'Aurora',
    description: 'A bold fusion of nature and modernism, featuring a striking black glass façade and warm pine sauna board walls with ambient LED lighting.',
    images: [
      {
        id: 2,
        src: aurora_1,
        alt: 'Aurora black glass facade',
        title: 'Modern Facade'
      },
      {
        id: 21,
        src: aurora_2,
        alt: 'Aurora interior with LED lighting',
        title: 'Ambient Interior'
      }
    ]
  },
  {
    route: 'category/loyly',
    title: 'Loyly',
    description: 'A celebration of authentic sauna tradition with rugged black-stained rough pine exterior and immersive black pine interior, featuring a wood-burning heater.',
    images: [
      {
        id: 3,
        src: loyly_1,
        alt: 'Loyly black-stained pine exterior',
        title: 'Traditional Exterior'
      },
      {
        id: 31,
        src: loyly_2,
        alt: 'Loyly wood-burning heater',
        title: 'Authentic Heating'
      },
    ]
  },
  {
    route: 'category/elysium',
    title: 'Elysium',
    description: 'A luxurious sauna and shower combination, featuring black wide-plank rough pine exterior and full Obeche T&G walls with modern LED lighting.',
    images: [
      {
        id: 4,
        src: elysium_1,
        alt: 'Elysium sauna and shower combo',
        title: 'Luxury Combo'
      },
      {
        id: 41,
        src: elysium_2,
        alt: 'Elysium shower zone',
        title: 'Premium Shower'
      }
    ],
  },
  {
    route: 'category/custom-saunas',
    title: 'Custom Sauna Solutions',
    description: 'Explore our bespoke sauna designs tailored to your unique space and preferences, from compact urban retreats to expansive wellness sanctuaries.',
    images: [
      {
        id: 5,
        src: custom_1,
        alt: 'Custom sauna design',
        title: 'Bespoke Design'
      },
      {
        id: 51,
        src: custom_2,
        alt: 'Custom sauna interior',
        title: 'Personalized Interior'
      },
      {
        id: 52,
        src: custom_3,
        alt: 'Custom sauna features',
        title: 'Unique Features'
      }
    ]
  },
  {
    route: 'category/premium-ice-baths',
    title: 'Premium Ice Baths',
    description: 'Experience the ultimate cold therapy with our premium ice bath solutions, designed for optimal recovery and wellness benefits.',
    images: [
      {
        id: 6,
        src: ice_bath_1,
        alt: 'Premium ice bath installation',
        title: 'Luxury Ice Bath'
      },
      {
        id: 61,
        src: ice_bath_2,
        alt: 'Ice bath features and controls',
        title: 'Advanced Features'
      }
    ]
  },
  // {
  //   route: 'category/premium-steam-rooms',
  //   title: 'Premium Steam Rooms',
  //   description: 'Transform your space with our high-quality steam generators and custom-designed steam rooms, featuring Nordmann technology for the ultimate wellness experience.',
  //   images: [
  //     {
  //       id: 7,
  //       src: steam_product_1,
  //       alt: 'Nordmann Steam Generator',
  //       title: 'Professional Steam Generator'
  //     },
  //     {
  //       id: 71,
  //       src: steam_product_2,
  //       alt: 'Steam room installation',
  //       title: 'Custom Installation'
  //     },
  //     {
  //       id: 72,
  //       src: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //       alt: 'Luxury steam experience',
  //       title: 'Luxury Experience'
  //     }
  //   ]
  // }
];

// Update the gallery items export to maintain consistent routing
export const galleryItems = galleryCategories.map(category => ({
  id: category.images[0].id,
  src: category.images[0].src,
  alt: category.images[0].alt,
  title: category.title,
  route: category.route
})); 