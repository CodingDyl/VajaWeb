import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import HomeLayout from './layout/HomeLayout'
import AboutSection from './pages/about/AboutSection'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Blog from './pages/blog/Blog'
import BlogPage from './components/BlogPage'
import Products from './pages/products/Products'

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
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
