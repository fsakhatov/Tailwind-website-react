import React from 'react';
import { AiFillMessage } from "react-icons/ai";
import Image from '../assets/brooke-cagle-uWVWQ8gF8PE-unsplash 1mainphoto.jpg'

const Header = () => {
  return (
    <header>
        <nav className='flex m-8 align-middle justify-evenly'>
    <div className='font-sans'>
      <h3 className='flex gap-1 align-middle justify-start text-black'>
        <AiFillMessage className='text-blue-600 w-6 h-6'/>
      <span className='text-blue-600'>Talk</span>
      <p className='ml-3'>Business</p></h3>
    </div>
    <ul className='flex gap-5 align-middle'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Systems</li>
    <button className='mt-[-10px] w-32 h-10 text-center border rounded-lg  p-2 text-blue-600'>Contact us</button>
    </ul>
    </nav>
       <div className="p-3 mt-64 flex-col align-middle justify-center">
       <h2 className='m-auto max-w-[620px] leading-[70px] text-center text-[64px] font-bold'>Become a better business with us.</h2>
       <p className='m-auto my-5 text-xl leading-[30px] text-center max-w-[500px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Nullam turpis tortor, ultricies ut justo eu.</p>
         <button className='rounded-3xl w-56 text-center justify-center m-auto bg-blue-600 text-white p-3 flex'>Our Business</button>
       </div>
       <img className='w-full my-32 h-full' src={Image} alt="Rasm" />
    </header>
  )
}

export default Header
