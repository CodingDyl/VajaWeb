import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Modal } from '@mantine/core'
import Cookies from 'js-cookie'
import HomeLayout from './layout/HomeLayout'
import AboutSection from './pages/about/AboutSection'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Blog from './pages/blog/Blog'
import BlogPage from './components/BlogPage'
import Products from './pages/products/Products'
import ProductPage from './pages/products/sauna\'s/ProductPage'
import AuromaConcentrates from './pages/products/other/AuromaConcentrates'
import DIYSauna from './pages/products/other/DIYSauna'
import Accessories from './pages/products/customization/Accessories'
import Equipment from './pages/products/customization/Equipment'
import { products } from './data/products'
import SteamRooms from './pages/products/SteamRooms'
import '@mantine/carousel/styles.css';
import CategoryGallery from './pages/gallery/category/[slug]'
import { ReferralForm } from './components/ReferralForm'

function App() {
  const [showReferralModal, setShowReferralModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasVisited = Cookies.get('has_visited')
      if (!hasVisited) {
        setShowReferralModal(true)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleModalClose = () => {
    setShowReferralModal(false)
    Cookies.set('has_visited', 'true', { expires: 30 })
  }

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route 
            path="/products/:productSlug" 
            element={<ProductPage products={products} />} 
          />
          <Route path="/gallery/category/:slug" element={<CategoryGallery />} />
          <Route path="/products/auroma-concentrates" element={<AuromaConcentrates />} />
          <Route path="/products/diy-sauna-kits" element={<DIYSauna />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/equipment" element={<Equipment />} />

          <Route path="/steam-rooms" element={<SteamRooms />} />
        </Routes>

        <Modal
          opened={showReferralModal}
          onClose={handleModalClose}
          size="md"
          centered
          withCloseButton
        >
          <div className="p-4">
            <h2 className="text-4xl font-bold text-accent text-center mb-6">
              We'd Love to Know
            </h2>
            <ReferralForm onSubmit={handleModalClose} />
          </div>
        </Modal>
      </Router>
    </MantineProvider>
  )
}

export default App
