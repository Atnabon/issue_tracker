"use client"

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from "react-icons/ai"
import { usePathname } from 'next/navigation'
import classnames from "classnames"


const Navbar = () => {
  const currentPath=usePathname();
  

  const links=[{
    href:"/",label:"Dashboard"
  },
{href:"/issues",label:"Issues"}]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/">
        <AiFillBug/>
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link)=>{
          return (
            <li key={link.href} >
              <Link href={link.href} className={classnames({
                'text-zinc-900':link.href === currentPath,
                'text-zinc-500':link.href !== currentPath,
                'hover:text-zinc-800 transition-colors':true
              })}>{link.label}</Link>
            </li>
          )
        }
       )}
      </ul>
    </nav>
  )
}

export default Navbar