import React from 'react'
import TopBar from './TopBar'
import Banner from './Banner'
import Products from './Products'
import Category from './Category'

const Home = () => {
  return (
    <div>
        <TopBar />
        <Banner />
        <Products />
        <Category />
    </div>
  )
}

export default Home