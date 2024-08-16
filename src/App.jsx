import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/homepage/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/routes/Layout'
import NoteForm , {formLoader} from './components/forms/NoteForm'
import NoteDetail, { noteLoader } from './pages/detail-note/NoteDetail'
import AuthForm from './components/forms/AuthForm'
import MyAccount from './pages/my-account/MyAccount'

function App() {

let router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        index : true,
        element : <HomePage />,
      },
      {
        path : "/login",
        element : <AuthForm isLogin={true} />
      },
      {
        path : "/sign-up",
        element : <AuthForm isLogin={false} />
      },
      {
        path : '/notation/:id',
        element :<NoteDetail />,
        loader : noteLoader,
      },
      {
        path : '/create-notation',
        element : <NoteForm create={true} />,
      },
      {
        path : 'edit-notation/:id',
        element : <NoteForm create={false} />,
        loader : formLoader
      },
      {
        path : '/:id',
        element : <MyAccount/>,
      },
    ]
  }
])

  return (
   <RouterProvider router={router} />
  )
}

export default App
