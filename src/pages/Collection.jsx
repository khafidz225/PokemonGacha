import React from 'react'
import CardCollection from '../components/CardCollection'
import Navbar from '../components/Navbar'

const Collection = () => {
  return (
    <div>
        <Navbar />
        <div className='mt-[40px]'>
            <h1 className='text-center text-[32px] font-medium mt-5'>Your Card Collection</h1>
            <CardCollection />
        </div>
    </div>
  )
}

export default Collection