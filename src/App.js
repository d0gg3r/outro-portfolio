import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom"
import { Home, Product, Products, ErrorPage } from './pages'
import { Navbar, Footer } from './components'


import './App.scss'
import Preloader from './components/Preloader/Preloader'

const Layout = () => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category/:id',
        element: <Products />
      },
      {
        path: '/item/:id',
        element: <Product />
      },
    ]
  },
])

const App = () => {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])
  return (
    <div>
      {
        loading ? (
          <Preloader />
        ) : (

          <RouterProvider router={router} />
        )
      }
    </div>
  )
}

export default App