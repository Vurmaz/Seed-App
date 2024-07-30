'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroImage() {
  return (
    <motion.div 
        className="w-5/6 sm:w-1/2 md:w-full"
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        viewport={{ once: true }}
        transition={{
            ease:'easeInOut',
            duration:1
        }}         
    >
        <Image 
        className="image-must mt-8 md:mt-0"
            src='/product.png'
            fill
            alt="apricot seed"
        ></Image>          
    </motion.div>        
  )
}
