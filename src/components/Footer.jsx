import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-600 p-16 mb-0 flex flex-col md:flex-row items-center justify-between text-white font-bold'>
      <Image src="/SFlogo.png" alt="logo" width={300} height={300} className='mt-[-100px] md:mt-[-80px]'/>
      <p className="mt-[-60px]">&copy; All Rights Reserved.2024</p>
      <p className="mt-[-60px]">+251988745721 |+251941218038</p>
    </div>
  )
}

export default Footer