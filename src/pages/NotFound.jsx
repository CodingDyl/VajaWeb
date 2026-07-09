import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  IconArrowLeft,
  IconArrowRight,
  IconHome,
  IconMail,
  IconMapSearch,
  IconPhoto,
} from '@tabler/icons-react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { SEOHead } from '../components/SEOHead';
import { fadeIn, staggerContainer } from '../utils/motion';
import { aurora_1, elysium_1, kaelis_1, sauna_hero } from '../assets';

const recoveryLinks = [
  {
    label: 'View Saunas',
    description: 'Browse Aurora, Elysium, Loyly, Kaelis, and Vakio.',
    to: '/products',
    icon: IconHome,
  },
  {
    label: 'Project Gallery',
    description: 'See completed sauna and steam room installations.',
    to: '/gallery',
    icon: IconPhoto,
  },
  {
    label: 'Contact Vaja',
    description: 'Send us the page you were looking for.',
    to: '/contact',
    icon: IconMail,
  },
];

const productTiles = [
  { name: 'Aurora', to: '/products/aurora', image: aurora_1 },
  { name: 'Elysium', to: '/products/elysium', image: elysium_1 },
  { name: 'Kaelis', to: '/products/kaelis', image: kaelis_1 },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary text-gray-700">
      <SEOHead
        title="Page Not Found | Vaja"
        description="The requested Vaja page could not be found. Return to our sauna products, gallery, or contact page."
        canonicalUrl="/404"
        noindex
      />
      <Navbar />

      <main className="overflow-hidden">
        <motion.section
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          animate="show"
          className="relative min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(164,183,146,0.34),transparent_30%),linear-gradient(135deg,#f5f2ed_0%,#ddd3c2_62%,#c8bba8_100%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[43vw] opacity-25 lg:block">
            <img
              src={sauna_hero}
              alt=""
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </div>

          <div className="container relative mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)]">
              <motion.div variants={fadeIn('right', 'spring', 0.2, 0.75)} className="max-w-3xl">
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-secondary backdrop-blur">
                  <IconMapSearch size={16} />
                  Page not found
                </p>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                  <span className="text-8xl font-bold leading-none text-accent sm:text-9xl lg:text-[10rem]">
                    404
                  </span>
                  <h1 className="max-w-xl pb-2 text-4xl font-bold leading-tight text-secondary sm:text-5xl">
                    This route has drifted off the plan.
                  </h1>
                </div>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                  The page may have moved, the link may be outdated, or the product detail you need might live under our sauna collection.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-accent/90"
                  >
                    View products
                    <IconArrowRight size={18} />
                  </Link>
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-secondary/30 bg-white/50 px-6 py-3 text-sm font-bold text-secondary transition hover:border-accent hover:text-accent"
                  >
                    <IconArrowLeft size={18} />
                    Back home
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {recoveryLinks.map((item) => {
                    const RecoveryIcon = item.icon;

                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="group rounded-lg border border-secondary/15 bg-white/60 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg"
                      >
                        <RecoveryIcon className="mb-4 text-accent" size={24} />
                        <h2 className="text-base font-bold text-secondary">{item.label}</h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">{item.description}</p>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div variants={fadeIn('left', 'spring', 0.3, 0.75)} className="relative">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-l-4 border-t-4 border-accent/70" />
                <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b-4 border-r-4 border-accent/70" />
                <div className="relative grid gap-4 rounded-lg border border-white/70 bg-white/45 p-4 shadow-2xl backdrop-blur">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={elysium_1}
                      alt="Elysium sauna and shower combo"
                      className="h-64 w-full object-cover sm:h-80 lg:h-96"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {productTiles.map((tile) => (
                      <Link
                        key={tile.name}
                        to={tile.to}
                        className="group overflow-hidden rounded-md bg-secondary/10"
                        aria-label={`View ${tile.name}`}
                      >
                        <img
                          src={tile.image}
                          alt=""
                          className="h-24 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-28"
                          loading="lazy"
                        />
                        <span className="block px-2 py-2 text-center text-xs font-bold text-secondary">
                          {tile.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
