import React from 'react'
import { netflix_logo_url } from '../utils/constants'
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50'>
        <img 
        className=' w-44'
        src={netflix_logo_url} alt='logo' />
    </div>
  )
}

export default Header