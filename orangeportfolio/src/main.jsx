import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Register from './Register.jsx'
import Login from './Login.jsx'
import NavBar from './components/NavBar.jsx'
import ButtonLargerM from './components/ButtonLargM.jsx'
import FormRegisterM from './components/FormRegisterM.jsx'
import RegisterM from './components/RegisterM.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ height: '100vh' }}>  
      <Login/>
      {/* <Register /> */}
    </div>
  </React.StrictMode>,
)


