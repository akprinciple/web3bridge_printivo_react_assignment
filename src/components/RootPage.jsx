import React from 'react'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <div>
        <marquee>
            <h1>Welcome</h1>
        </marquee>
        <Outlet/>
    </div>
  )
}

export default RootPage