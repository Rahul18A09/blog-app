import React from 'react'
import { NavLink } from 'react-router-dom'
// react icons
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'



function Navbar() {
    // navItems
    const navItems = [
        {path:"/", link:"Home"},
        {path:"/services", link:"Services"},
        {path:"/about", link:"About"},
        {path:"/blogs", link:"Blogs"},
        {path:"/contact", link:"Contact"},
    ]
  return (
   <header className='bg-black'>
    <nav className='px-4 py-4'>
        <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>

        {/* navItems for lg devices */}
        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navItems.map(({path, link}) => <li className='text-white' key={path}><NavLink to={path}>{link}</NavLink></li>)
            }
        </ul>

        {/* menu icons */}

        <div className='text-white lg:flex gap-4 items-center hidden'>
           <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
           <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
           <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
           <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
        </div>

        {/* mobile menu btn, display on  mobile screen */}

        <button className='cursor-pointer'><FaBars className='w-5 h-5 text-white'/></button>
    </nav> 
   </header>
  )
}

export default Navbar
