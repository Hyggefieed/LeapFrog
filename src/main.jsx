import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import LeapFrogNavbar from './components/Navbar.jsx'
import Home from './pages/home.jsx'
import LeapFrogFooter from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LeapFrogNavbar />
    <Home />
    <LeapFrogFooter/>
  </StrictMode>,
)
