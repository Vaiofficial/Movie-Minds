import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai"
import { BsFillInfoCircleFill } from "react-icons/bs"
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl py-6 sm:mx-auto items-center'>

      {/* LEFT SIDE OF THE NAVBAR */}

      <div className='flex'>
        <MenuItem title="HOME" address="/" Icon={AiFillHome}></MenuItem>
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill }></MenuItem>
      </div>

      {/* RIGHT SIDE OF NAVBAR */}

      <div className='flex items-center space-x-5'>
        <DarkModeSwitch/>
        <Link href="/">
            <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>Movie</span><span className='text-xl hidden sm:inline'>Minds</span>
            </h2>
        </Link>
      </div>
       

    </div>
  )
}
