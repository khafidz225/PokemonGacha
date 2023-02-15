import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {cardList} = useSelector(state => state.counter)
  return (
    <>
        <div className='bg-[#e87c87] p-3'>
            <div className='w-[85%] flex m-auto items-center justify-between'>
                <Link to={'/'}>
                    <div className='flex items-center'>
                        <img className='w-[40px]' src={require('../assets/icons/pokeball.png')} alt="PokeBall" />
                        <h1 className='text-center text-2xl ml-2 font-medium text-white hidden md:block'>Pokemon</h1>
                    </div>
                </Link>
                <Link to={'/collection'}>
                    <div className='flex'>
                            <img className='w-[40px] cursor-pointer' src={require('../assets/icons/backpack-white.png')} alt="" />
                            <p className='absolute p-1 bg-[#ee5f6c] font-bold text-white mt-[25px] ml-[25px] rounded-full w-[25px] text-center text-xs'>{cardList?.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Navbar