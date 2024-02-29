"use client"
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button,buttonVariants } from "@/components/ui/button"

import { AlignJustify } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const user= useUser();
    const [activeIndex,setActiveIndex]=useState();
    const path= usePathname();
    
  return (
    <>
    <div className='md:flex z-50 md:fixed md:w-screen flex-row hidden items-center gap-4 bg-yellow-500 text-white p-5 px-8 justify-between'>
       <div><Image src="/SFlogo.png" width={200} height={200} alt="logo" className="mt-[-80px] mb-[-90px] mb-0"/></div>
       <div className="flex items-center gap-4 space-x-4">
        <Link onClick={()=>setActiveIndex(1)} className={`hover:text-black ${activeIndex===1 && 'text-black font-bold'}`} href="/">Home</Link>
        <Link onClick={()=>setActiveIndex(2)} className={`hover:text-black ${activeIndex===2 && 'text-black font-bold'}`} href="/">Contact</Link>
        <Link onClick={()=>setActiveIndex(3)} className={`hover:text-black ${activeIndex===3 && 'text-black font-bold'}`} href="/dashboard">Dashboard</Link>
       {path==="/"?(<Link href="/sign-in"><Button >Sign In</Button></Link>):(user?<UserButton/>:<Link href="/sign-in"><Button >Sign In</Button></Link>)}
       </div>
    </div>
    
    <div className='md:hidden fixed w-full p-4 bg-yellow-500 flex items-center justify-between'>
    <div><Image src="/SFlogo.png" width={200} height={200} alt="logo" className="mt-[-80px] mb-[-90px] mb-0"/></div>
    <Drawer direction="left">
  <DrawerTrigger > <AlignJustify /></DrawerTrigger>
  <DrawerContent className="w-1/2 md:hidden h-full bg-yellow-500">
    <DrawerHeader>
      <DrawerTitle><Image src="/SFlogo.png" className='mt-[-90px] mx-auto' alt="logo" width={200} height={200}/></DrawerTitle>
      <DrawerDescription> <p className='text-black mt-[-50px] font-bold text-center'>Elevate Your Presence with SHINE</p></DrawerDescription>
    </DrawerHeader>
    <div className="flex flex-col items-center gap-4 space-y-6 font-bold">
        <Link onClick={()=>setActiveIndex(1)} className={`hover:text-white w-2/4 rounded-lg mx-auto text-center p-1 ${activeIndex===1 && 'text-white bg-black font-bold'}`} href="/">Home</Link>
        <Link onClick={()=>setActiveIndex(2)} className={`hover:text-white w-2/4 rounded-lg mx-auto text-center p-1 ${activeIndex===2 && 'text-white bg-black font-bold'}`} href="/">Contact</Link>
        <Link onClick={()=>setActiveIndex(3)} className={`hover:text-white w-2/4 rounded-lg mx-auto text-center p-1 ${activeIndex===3 && 'text-white bg-black font-bold'}`} href="/dashboard">Dashboard</Link>
        <Link href="/sign-in"><Button >Sign In</Button></Link>
       </div>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="destructive">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>


    </div>
    </>
  )
}

export default Navbar