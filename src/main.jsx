import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserNameProvider } from './Context/Context.jsx'
// import { UserNameProvider } from './context/Context.jsx/UserNameContext'; 
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserNameProvider>
      <RouterProvider router={router}/> 
      </UserNameProvider>
    
  </React.StrictMode>,
)
