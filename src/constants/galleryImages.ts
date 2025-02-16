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
    route: 'category/classic-wooden-sauna',
    title: 'Classic Wooden Sauna',
    description: 'Experience the traditional warmth and comfort of our handcrafted wooden saunas.',
    images: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1717356495389-6ab1e5ff9d84?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Luxurious wooden sauna',
        title: 'Main Classic Sauna'
      },
      {
        id: 11,
        src: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Interior of wooden sauna',
        title: 'Interior View'
      },
      {
        id: 12,
        src: 'https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Sauna accessories',
        title: 'Sauna Essentials'
      }
    ]
  },
  {
    route: 'category/contemporary-steam-room',
    title: 'Contemporary Steam Room',
    description: 'Discover our modern steam rooms featuring cutting-edge technology and elegant design.',
    images: [
      {
        id: 2,
        src: 'https://plus.unsplash.com/premium_photo-1683141182191-6c3dc91f9536?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Modern steam room',
        title: 'Main Steam Room'
      },
      {
        id: 21,
        src: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Steam room seating',
        title: 'Relaxation Area'
      },
      {
        id: 22,
        src: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Steam room features',
        title: 'Modern Features'
      }
    ]
  },
  {
    route: 'category/scenic-outdoor-sauna',
    title: 'Scenic Outdoor Sauna',
    description: 'Enjoy the perfect blend of nature and relaxation in our outdoor sauna facilities.',
    images: [
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Outdoor sauna with view',
        title: 'Main Outdoor Sauna'
      },
      {
        id: 31,
        src: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Scenic view from sauna',
        title: 'Panoramic Views'
      },
      {
        id: 32,
        src: 'https://images.unsplash.com/photo-1712659604528-b179a3634560?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Outdoor sauna exterior',
        title: 'Exterior Design'
      }
    ]
  },
  {
    route: 'category/mosaic-wellness-oasis',
    title: 'Mosaic Wellness Oasis',
    description: 'Immerse yourself in the artistic beauty of our mosaic-tiled wellness spaces.',
    images: [
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Mosaic-tiled steam room',
        title: 'Main Mosaic Room'
      },
      {
        id: 41,
        src: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Mosaic detail work',
        title: 'Artistic Details'
      },
      {
        id: 42,
        src: 'https://images.unsplash.com/photo-1583417267826-aebc4d1542e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Wellness area overview',
        title: 'Full Oasis View'
      }
    ]
  },
  {
    route: 'category/high-tech-infrared-sauna',
    title: 'High-Tech Infrared Sauna',
    description: 'Experience the future of wellness with our state-of-the-art infrared sauna technology.',
    images: [
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Infrared sauna cabin',
        title: 'Main Infrared Cabin'
      },
      {
        id: 51,
        src: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Control panel',
        title: 'Smart Controls'
      },
      {
        id: 52,
        src: 'https://images.unsplash.com/photo-1712659606957-b7395ba9ebb2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Infrared technology display',
        title: 'Technology Features'
      }
    ]
  },
  {
    route: 'category/aromatherapy-haven',
    title: 'Aromatherapy Haven',
    description: 'Enhance your wellness journey with our therapeutic aromatherapy steam experiences.',
    images: [
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Aromatherapy steam room',
        title: 'Main Aromatherapy Room'
      },
      {
        id: 61,
        src: 'https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Essential oils display',
        title: 'Aromatherapy Selection'
      },
      {
        id: 62,
        src: 'https://images.unsplash.com/photo-1713270176394-3f9f91f43905?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Steam room interior',
        title: 'Therapeutic Environment'
      }
    ]
  }
];

// Update the gallery items export to maintain consistent routing
export const galleryItems = galleryCategories.map(category => ({
  id: category.images[0].id,
  src: category.images[0].src,
  alt: category.images[0].alt,
  title: category.title,
  route: category.route // This now includes the 'category/' prefix
})); 