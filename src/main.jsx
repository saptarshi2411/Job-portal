import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomNavbar/>
    <App />
  </React.StrictMode>,
)
