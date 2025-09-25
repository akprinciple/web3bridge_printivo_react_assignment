import React from 'react'

const TopBar = () => {
  return (
    <div>
        <div style={{padding: '20px', backgroundColor: '#f7f6f4', display: 'flex'}}>
            <div className='p-3'>Cost Calculator</div>
            <div className='p-3'>Discover Stores</div>
            <div className='p-3'>Track Orders</div>
        </div>
    </div>
  )
}

export default TopBar