import { createRoot } from 'react-dom/client'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Signin",
        element: <SignIn />
      },
      {
        path: "/Signup",
        element: <SignUp />
      },
      {
        path: "/About",
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
