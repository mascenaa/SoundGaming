import { 
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom'

import Home from './pages/home/homePage'
import Config from './pages/config/configPage'
import Loading from './pages/loading/loading'
import LevelPage from './pages/levelPage/levelPage'

// Level props: Resp, RespText, LevelNumber, LevelPoints

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/config' element={<Config />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/level' element={<LevelPage />} />
      </Routes>
    </Router>
  )
}

export default App
