import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 👇 basename necesario para GitHub Pages */}
    <BrowserRouter basename="/mi-cv/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
