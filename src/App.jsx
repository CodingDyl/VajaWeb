import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Modal } from '@mantine/core'
import '@mantine/core/styles.css'
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
import IceProductPage from './pages/products/iceBath/IceProductPage'
import { ThreeDGallery } from './pages/gallery/ThreeDGallery'
import ThankYou from './pages/contact/thank-you/ThankYou'

function App() {
  const [showClosureNotice, setShowClosureNotice] = useState(false)

  useEffect(() => {
    // Check if user has already seen the closure notice
    const hasSeenNotice = Cookies.get('closure_notice_seen')
    
    if (!hasSeenNotice) {
      const timer = setTimeout(() => {
        setShowClosureNotice(true)
      }, 500) // Show shortly after page load
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClosureNoticeClose = () => {
    setShowClosureNotice(false)
    // Set cookie to expire after 1 day so notice shows again on next visit during closure period
    Cookies.set('closure_notice_seen', 'true', { expires: 1 })
  }

  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/thank-you" element={<ThankYou />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route 
            path="/products/:productSlug" 
            element={<ProductPage products={products} />} 
          />
          <Route path="/products/ice-bath/:productSlug" element={<IceProductPage />} />
          <Route path="/gallery/category/:slug" element={<CategoryGallery />} />
          <Route path="/products/auroma-concentrates" element={<AuromaConcentrates />} />
          <Route path="/products/diy-sauna-kits" element={<DIYSauna />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/equipment" element={<Equipment />} />

          <Route path="/steam-rooms" element={<SteamRooms />} />
          <Route path="/gallery/category/client-3d-renderings" element={<ThreeDGallery />} />
        </Routes>

        <Modal
          opened={showClosureNotice}
          onClose={handleClosureNoticeClose}
          size="md"
          centered
          withCloseButton
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
        >
          <div className="p-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                🎄 Holiday Closure Notice
              </h2>
              <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg text-center">
                We will be closed from
              </p>
              <p className="text-2xl font-bold text-accent text-center">
                12th December - 12th January
              </p>
              <p className="text-center">
                All requests submitted during this period will be answered when we reopen.
              </p>
              <p className="text-center text-sm text-gray-600 mt-4">
                Thank you for your patience and understanding. We wish you a wonderful holiday season! 🎉
              </p>
            </div>
            
            <button
              onClick={handleClosureNoticeClose}
              className="mt-6 w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Got it, thanks!
            </button>
          </div>
        </Modal>
      </Router>
    </MantineProvider>
  )
}

export default App
