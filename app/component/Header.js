import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='bg-apricot h-20 fixed top-0 left-0 w-full text-white grid grid-cols-2 header'>
    <div className='flex items-center ml-8'>
      <Image src='/file.png' height={80} width={80} className='hidden sm:block' alt='apricot'></Image>
        <h1 className='text-lg'>APRI-SEED</h1>
    </div>
    <div className='text-white flex justify-end items-center mr-8 gap-8 cursor-pointer'>
      <Link href='#1'><h6>Home</h6></Link>
      <Link href='#2'><h6>About</h6></Link>
    </div>
    </div>
  )
}
