'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from './Menu'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if(width > 768) {
      setIsOpen(false)
    } 
    return
  }, [width])

  return (
    <>
    {
      isOpen && <Menu isOpen={isOpen}/>
    }
      <div className='bg-apricot h-20 fixed top-0 left-0 w-full text-black grid grid-cols-2 z-10 header text-white'>
        <div className='flex items-center ml-8 relative'>
          <Image src='/file.png' height={80} width={80} className='hidden sm:block' alt='apricot'></Image>
            <Link href='#1' className='cursor-pointer'>
              <h1 className='text-xl '>ApriCoot</h1> 
            </Link>
        </div>
      <div className='text-white flex justify-end items-center mr-8 gap-8'>
        {
          width < 768 
          ?
            <motion.button onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu className='w-8 h-8 cursor-pointer' /> 
            </motion.button>                  
          :  
          <>
            <Link className='cursor-pointer' href='#1'>
              <motion.h6 
                whileHover={{ color:'black' }}
              >Home</motion.h6>
            </Link>
            <Link className='cursor-pointer' href='#2'>
              <motion.h6
                whileHover={{ color:'black' }}          
              >About</motion.h6>
            </Link>
            <Link href='#4'>
              <motion.button 
                className="py-2 px-4 rounded-full bg-green outline-0 text-white w-full input-shadow"
                whileHover={{
                  boxShadow:'0px 0px 5px 0px rgba(0,0,0,0.75)'
                }}
                transition={{ duration:0.3, ease:'easeInOut' }}
              >Join list
              </motion.button>
            </Link>            
          </>            
        }
      </div>
    </div>
  </>
  )
}
