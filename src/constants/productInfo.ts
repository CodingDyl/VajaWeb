import { productIcons } from './productIcons';

export interface ProductFeature {
  title: string;
  description: string;
  icon: keyof typeof productIcons;
}

export interface ProductInfo {
  description: string;
  features: ProductFeature[];
  dimensions: {
    width: number;
    depth: number;
    height: number;
  };
}

export const productInfo: Record<string, ProductInfo> = {
  Kaelis: {
    description: "A refined balance of warmth and modern design, Kaelis features a striking exterior of Thermo Pine Tongue & Groove, paired with a clean, minimalist Triple Pine Interior. The seating is crafted from premium Obeche Wood, chosen for its smooth, splinter-free finish and cool touch — ideal for elevated comfort and everyday rituals.",
    features: [
      { 
        title: 'Premium Materials', 
        description: 'Exterior crafted from thermo pine tongue-and-groove with a clean, minimalist triple pine interior',
        icon: 'wood'
      },
      { 
        title: 'Comfortable Seating', 
        description: 'Premium obeche wood seating with smooth, splinter-free finish for elevated comfort',
        icon: 'armchair'
      },
      { 
        title: 'Modern Design', 
        description: 'Striking exterior design that balances warmth with contemporary aesthetics',
        icon: 'palette'
      },
      { 
        title: 'Everyday Luxury', 
        description: 'Perfectly designed for daily use with premium materials and thoughtful details',
        icon: 'sparkles'
      }
    ],
    dimensions: {
      width: 1800,
      depth: 2100,
      height: 2400
    }
  },
  Aurora: {
    description: "A bold fusion of nature and modernism, Aurora is defined by its striking black glass façade, seamlessly blending into its surroundings while standing out in style. The interior features Oak Sauna Board Walls, soft Obeche Benches, and an ambient LED strip backrest for a calming glow. The rear exterior is finished in Triple-shadow Thermo Pine, bringing earthy contrast to its contemporary form.",
    features: [
      { 
        title: 'Striking Facade', 
        description: 'Black glass exterior that seamlessly blends with surroundings while making a bold statement',
        icon: 'buildingStore'
      },
      { 
        title: 'Premium Interior', 
        description: 'Warm pine sauna board walls with soft obeche benches for ultimate comfort',
        icon: 'home'
      },
      { 
        title: 'Ambient Lighting', 
        description: 'LED strip backrest providing a calming glow for the perfect sauna experience',
        icon: 'sun'
      },
      { 
        title: 'Natural Contrast', 
        description: 'Triple-shadow Lunawood rear exterior creating an earthy contrast to the modern design',
        icon: 'trees'
      }
    ],
    dimensions: {
      width: 2060,
      depth: 2000,
      height: 2400
    }
  },
  Loyly: {
    description: "Named after the Finnish word for the soothing steam that rises from sauna stones, Löyly captures the essence of authentic sauna tradition. Built with a Rugged Black-stained Rough Pine exterior and an Immersive Black Pine interior, it offers a deeply grounding atmosphere. Inside, black pine benches and a wood-burning heater create a raw, elemental experience, while a large feature window invites nature to complete the ritual. Löyly is a celebration of fire, wood, and timeless Nordic serenity.",
    features: [
      { 
        title: 'Rustic Charm', 
        description: 'Rough black-stained pine exterior with black T&G pine walls and benches',
        icon: 'mountain'
      },
      { 
        title: 'Traditional Heating', 
        description: 'Wood-burning heater for an authentic sauna experience',
        icon: 'flame'
      },
      { 
        title: 'Natural Connection', 
        description: 'Large feature window connecting the interior with the outdoors',
        icon: 'window'
      },
      { 
        title: 'Bold Design', 
        description: 'Immersive space that blends fire, wood, and nature in perfect harmony',
        icon: 'leaf'
      }
    ],
    dimensions: {
      width: 2200,
      depth: 2200,
      height: 2400
    }
  },
  Elysium: {
    description: "A sanctuary in every sense—Elysium is our signature Sauna + Shower Combo. Clad in Black Wide-plank Rough Pine, it opens to a serene interior of full Obeche T&G walls, matching benches, and a soft LED strip that adds a modern glow. The adjacent shower zone is lined with White Washed Garapa Timber, blending seamlessly into the warm, light-toned interior for a luxurious, cohesive finish.",
    features: [
      { 
        title: 'Luxury Combo', 
        description: 'Signature sauna + shower combination for the ultimate wellness experience',
        icon: 'bath'
      },
      { 
        title: 'Premium Materials', 
        description: 'Black Wide-plank Rough Pine exterior with full Obeche T&G walls and matching benches',
        icon: 'tools'
      },
      { 
        title: 'Modern Lighting', 
        description: 'Soft LED strip adding a modern glow to the interior',
        icon: 'lamp'
      },
      { 
        title: 'Luxurious Finish', 
        description: 'Accoya timber shower zone seamlessly blending with the warm, light-toned interior',
        icon: 'building'
      }
    ],
    dimensions: {
      width: 2960,
      depth: 1900,
      height: 2400
    }
  }
}; 