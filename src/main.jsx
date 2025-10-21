import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Schoolhomepage from './components/Schoolhomepage.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
    {/* <Schoolhomepage /> */}
    {/* <Home /> */}
  </StrictMode>,
)
