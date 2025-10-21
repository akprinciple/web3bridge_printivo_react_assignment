import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <div className='bg-amber-100 text-dark p-3 text-center  font-bold'>
            <Link to={'/'} className='p-3 rounded bg-amber-400'>School</Link>
            <Link to={'/home'} className='mx-4 p-3 rounded bg-amber-500'>Home</Link>

        </div>
        <marquee behavior="" direction="" className='text-6xl bg-amber-50 p-2'>
            <h1>Welcome</h1>
        </marquee>
        <Outlet/>
    </div>
  )
}

export default Root