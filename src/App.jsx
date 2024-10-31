import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
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

import '@mantine/carousel/styles.css';

function App() {
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
          <Route path="/products/auroma-concentrates" element={<AuromaConcentrates />} />
          <Route path="/products/diy-sauna-kits" element={<DIYSauna />} />
          <Route path="/products/accessories" element={<Accessories />} />
          <Route path="/products/equipment" element={<Equipment />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
