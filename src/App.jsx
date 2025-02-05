import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box>
      <Navbar/>
      <Home/>
      <Footer/>
    </Box>
  )
}

export default App
