import { 
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

import Home from './pages/home/homePage'
import Config from './pages/config/configPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/config' element={<Config />} />
      </Routes>
    </Router>
  )
}

export default App
