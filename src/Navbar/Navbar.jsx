import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className=" w-full h-[60px] flex items-center justify-end text-[20px] font-medium pr-[100px] ">
      <ul className=' flex gap-10'>
        <li>
          <Link to='/' > Home </Link>
        </li>
        <li>
          <Link to='#' > Prodact </Link>
        </li>
        <li>
          <Link to='#' > About us </Link>
        </li>
        <li>
          <Link to='#' > Blog </Link>
        </li>
        <li>
          <Link to='#' > Contact </Link>
        </li>
      </ul>
    </nav>
      
    </>
  )
}

export default Navbar
