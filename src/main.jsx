import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './ELEMENTX/abstract/abstract.css'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/userContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <UserContextProvider>
    <App />
    </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
