import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTopButton from './Components/ScrollToTopButton.jsx'
import { RouterProvider } from 'react-router'
import router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
      <ScrollToTopButton />
      <ToastContainer position="top-right" autoClose={2000} />
    </UserContext>
  </StrictMode>
)
