import { createRoot } from 'react-dom/client'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import About from './components/About.jsx'
import Profile from './components/Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import App from './App.jsx'
import Home from './components/Home.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Signin",
        element: <SignIn />
      },
      {
        path: "/Profile",
        element: <Profile />
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
