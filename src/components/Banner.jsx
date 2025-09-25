import React from 'react'
import logo from '/logo.svg'
const Banner = () => {
  return (
    <div style={{backgroundColor: '#ece8d9', padding: '20px'}}>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <img src={logo} alt="Printivo Logo" className='h-10'/>
            </div>
            <div className='w-3/4'>
                <a href="" className='px-4'>All products</a>
                <a href="" className='px-4'>Become a Seller</a>
                <a href="" className='px-4'>Merch Store</a>
                <a href="" className='px-4'>Market Place</a>
            </div>

        </div>
            <div className=' flex justify-between mt-12 pl-20'>
                <div className='w-6/12'>
                    <p className='mt-10 text-5xl font-bold'>Quality Prints</p>

                    <h4  className='mt-10 font-medium text-3xl'>Shipped to your Doorstep</h4>

                    <p className='mt-6'>What would you like to print today?</p>
                <input type="text" placeholder='Search for Business Cards, T-shirts, etc' className='w-full p-10 bg-white mb-12 border-0'/>
                </div>
                <div className='w-6/12 justify-end flex'>
                    <img src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1623764552/printivo/Card3_n9kqin.png" alt="" className='w-100 mt-10' />
                </div>
            </div>
    </div>
  )
}

export default Banner