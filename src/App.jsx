import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import HomeLayout from './layout/HomeLayout'

function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
        </Routes>
      </Router>
    </MantineProvider>
  )
}

export default App
