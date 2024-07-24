import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='flex justify-center items-center bg-apricot h-20 bottom-0 left-0 w-full text-white text-center'>
        <Image src='/file.png' height={80} width={80}></Image>
        <a href="https://www.freepik.com/free-photo/plant-fertilizer-eco-friendly-packaging-bag_17229471
            .htm#query=seed%20packets&position=20&from_view=keyword&track=ais_user&uuid=6d1898eb-30c1-4526-a9b7-67f0d96dce75">
            Image by rawpixel.com
        </a>
    </div>
  )
}
