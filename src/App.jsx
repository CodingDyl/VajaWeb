import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import HomeLayout from './layout/HomeLayout'
import AboutSection from './pages/about/AboutSection'

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/about" element={<AboutSection />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
