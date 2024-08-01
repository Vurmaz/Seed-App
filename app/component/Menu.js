'use client'
import { animate, motion } from "framer-motion"
import Link from "next/link"
import { useEffect } from "react"

export default function Menu({ isOpen }) {

  useEffect(() => {
    animate('.zk', {y : [-100, 0]}, { duration:0.5,ease:'easeInOut' })
  }, [isOpen])
  
  return (
    <>      
      <motion.div 
        className='top-20 bg-apricot w-full h-16 text-white fixed z-10 p-8 px-16 flex justify-center items-center gap-8 zk header'
      >
        <Link className='cursor-pointer' href='#1'>
          <motion.h1 whileHover={{ color:'var(--black)' }}>Home</motion.h1>
        </Link>
        <Link className='cursor-pointer' href='#2'>
          <motion.h1 whileHover={{ color:'var(--black)' }}>About</motion.h1>
        </Link>
        <Link className='cursor-pointer' href='#4'>
          <motion.h1 whileHover={{ color:'var(--black)' }}>Join</motion.h1> 
        </Link>
      </motion.div>      
    </>

  )
}
