'use client';

import React from 'react'
import Link from 'next/link'
import {AiFillBug} from "react-icons/ai"
import {usePathname} from "next/navigation"



const Navbar = () => {
  const currentPath=usePathname();
  
  const links=[
    {label:"Dashboard",href:"/"},
    {label:"Issues",href:"/issues"},
  ]

  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14 '>
      <Link href="/"><AiFillBug/></Link>
      <ul className='flex space-x-6'>
        {links.map((link)=>(
          <li key={link.href}>
            <Link href={link.href} className={`${link.href}text-zinc-500 hover:text-zinc-800 transition-colors`}>{link.label}</Link>
          </li>
        ))}
      </ul>
    
    </nav>
  )
}

export default Navbar