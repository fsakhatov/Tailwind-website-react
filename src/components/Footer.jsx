import React from 'react';
import { AiFillMessage } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='relative p-3 w-[100%] flex flex-col bg-[#160530] text-white pb-[100px]'>
      <h1 className='text-[58px] text-center'>Let’s start working to build a brighter future.</h1>
      <span className='absolute top-[190px] right-10 flex border align-middle h-16 w-[400px] justify-between p-4 text-center'>
        <p>Join our mailing list</p>
        <p>Submit</p>
      </span>
      <span className='mt-[150px] px-7'>
      <p className='w-[460px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum posuere eget
     elementum vulputate elementum viverra sapien tellus aenean.</p>
     <ul className='flex gap-5 my-10'>
        <li>Fb</li>
        <li>In</li>
        <li>Tw</li>
        <li>Ln</li>
     </ul>
      </span>
      <span className='flex justify-between px-7'>
        <h6 className='flex align-middle justify-center text-2xl font-bold gap-1'><AiFillMessage className='text-2xl mt-1'/>New Business</h6>
        <p>Copyright 2021. All rights reserved.</p>
      </span>
    </div>
  )
}

export default Footer
