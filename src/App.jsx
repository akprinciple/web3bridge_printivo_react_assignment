import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Schoolhomepage from './components/Schoolhomepage'
import './App.css'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          index: true,
          element: <Schoolhomepage/>
        },
        {
          path: 'home',
          element: <Home/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
