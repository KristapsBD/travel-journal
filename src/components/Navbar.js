import React from 'react'
import { BiWorld } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <BiWorld className='world-icon'/>
        <h1>my travel journal.</h1>
    </nav>
  )
}

export default Navbar