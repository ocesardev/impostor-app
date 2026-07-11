import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Players } from './pages/Players'
import { ThemeSelection } from './pages/ThemeSelection'
import { Reveal } from './pages/Reveal'
import { RoundStart } from './pages/RoundStart'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/players' element={<Players />}/>
        <Route path='/themes' element={<ThemeSelection />}/>
        <Route path='/reveal' element={<Reveal />}/>
        <Route path='/round-start' element={<RoundStart />}/>
      </Routes>
    </Router>
  )
}

export default App
