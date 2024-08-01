'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeroInput from './HeroInput'

export default function HeroSection() {
  return (
    <>
        <motion.div 
            className="flex flex-col justify-center items-center gap-8 mt-8 md:mt-0 "        
        >
            <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-20 md:mt-0 font-bold text-justify text-green"
                initial={{ opacity:0 }}
                whileInView={{ opacity:1 }}
                viewport={{ once: true }}
                transition={{
                    ease:'easeInOut',
                    duration:0.5
                }}                    
            > From Our Garden to Yours</motion.h2>
            <motion.p 
                className="w-5/6  md:w-3/4 px-2 text-justify text-xs sm:text-base"
                initial={{ opacity:0 }}
                whileInView={{ opacity:1 }}
                viewport={{ once: true }}
                transition={{
                    ease:'easeInOut',
                    duration:1
                }}                    
            >
                Apricot seeds are nutrient-rich, offering vitamin B17, 
                antioxidants, and essential fatty acids. Known for their potential health benefits, 
                they’re perfect for adding a natural boost to your diet and wellness.
            </motion.p>
            <HeroInput />
        </motion.div>        
    </>

  )
}
