import './App.css'
import { Box } from './components/organisms/Box/Box'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Team from './Team'
import Features from './Features'
import SignIn from './SignIn'
import Header from './components/molecules/Header/Header'



function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Box/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
