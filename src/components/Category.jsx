import React from 'react'

const Category = () => {
  return (
    <div className='container mx-auto my-15 px-20'>
        <h1 className='text-3xl my-3'>Popular Categories </h1>
        <div className='grid grid-cols-4 gap-4'>
            <div className='shadow-lg ' style={{overflow: 'hidden'}}>

            <img src="../../public/season.png" alt="" className='w-full transition-transform duration-1000 hover:scale-140' />
            <div className='p-5'>

            <b className='mt-5' style={{ display: 'block' }}>Greeting Cards</b>
            <p className='mt-5'>starting at</p>
            <p className='mt-2'>
                <b>₦29,800</b> per 50
            </p>
            <button className='bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded'>Browse Greetings Card</button>
            </div>
            </div>

            <div className='shadow-lg ' style={{overflow: 'hidden'}}>

            <img src="../../public/1473165427_stickers.png" alt="" className='w-full transition-transform duration-1000 hover:scale-140 transition-transform duration-1000 hover:scale-140' />
            <div className='p-5'>

            <b className='mt-5' style={{ display: 'block' }}>Stickers</b>
            <p className='mt-5'>starting at</p>
            <p className='mt-2'>
                <b>₦5,400</b> per 75
            </p>
            <button className='bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded'>Browse Stickers</button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Category