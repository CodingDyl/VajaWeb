import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
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
          <Route path="/products/icebath/:productSlug" element={<IceProductPage />} />
          <Route path="/gallery/category/:slug" element={<CategoryGallery />} />
          <Route path="/products/auroma-concentrates" element={<AuromaConcentrates />} />
          <Route path="/products/diy-sauna-kits" element={<DIYSauna />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/equipment" element={<Equipment />} />

          <Route path="/steam-rooms" element={<SteamRooms />} />
          <Route path="/steamrooms" element={<SteamRooms />} />
          <Route path="/gallery/category/client-3d-renderings" element={<ThreeDGallery />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
