import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'

const Nav = () => {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className='padding-x py-8 z-10 w-full bg-slate-600'>
        <nav className='flex justify-between items-center max-container'>
          <AiOutlineMenu onClick={handleNav} className='cursor-pointer' size={20} />
          {
            nav ? (
              ''
            )
            : (
              ''
            )
          }

          <h1>Logo</h1>
          <div className='flex row'>
            <AiOutlineSearch className='mx-2 cursor-pointer' size={20} />
            <BsPersonCircle className='cursor-pointer' size={20} />
          </div>
        </nav>
      </header>
  )
}



export default Nav
