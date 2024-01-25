import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Register from './Register.jsx'
import RegisterSucess from './components/RegisterSucess.jsx'
import Login from './Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
    {/* <RegisterSucess /> */}
    {/* <Register /> */}
  </React.StrictMode>,
)
