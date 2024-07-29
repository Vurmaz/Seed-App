import React from 'react'

export default function Card({ Icon, title, text }) {
    
  return (
    <div className='flex flex-col items-center gap-8'>
        <Icon className='h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 color-apri ' />
        <h1 className='text-lg md:text-2xl lg:text-3xl  font-extrabold'>{title}</h1>
        <p className='text-center text-xs md:text-sm lg:text-base'>{text}</p>
    </div>
  )
}
