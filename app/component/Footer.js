import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='flex justify-center items-center bg-apricot h-20 bottom-0 left-0 w-full text-white text-center'>
        <Image src='/file.png' height={80} width={80} alt='apricot'></Image>
<a className='text-xs' href="https://www.freepik.com/free-photo/fresh-yellow-apricots-isolated-white_9333571.htm#fromView=search&page=1&position=1&uuid=fd412f9b-9cce-489f-9d87-15f3e7ea34a9">Image by azerbaijan_stockers on Freepik</a>
    </div>
  )
}
