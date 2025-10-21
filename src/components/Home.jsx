import React, { lazy, Suspense, } from 'react'
// import TopBar from './TopBar'
// import Banner from './Banner'
// import Products from './Products'
// import Category from './Category'

const TopBar = lazy(() => import('./TopBar'));
const Banner = lazy(() => import('./Banner'));
const Products = lazy(() => import('./Products'));
const Category = lazy(() => import('./Category'));
const Home = () => {

  return (
    <Suspense fallback={<div className='text-center'>Loading...</div>}>
    <div>
        <TopBar />
        <Banner />
        <Products />
        <Category />
    </div>
    </Suspense>
    
  )
}

export default Home