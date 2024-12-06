// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/admin/Dashboard.jsx'
import Admin from './layouts/Admin.jsx'



createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin
       />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<div
          style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Dashboard</div>} />
      </Route> 
    </Routes>
  </BrowserRouter>

  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
