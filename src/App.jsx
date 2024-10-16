import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './pages/Hero'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
