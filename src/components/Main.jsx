import React from 'react';
import image1 from '../assets/bench-accounting-C3V88BOoRoM-unsplash 1rasm1.jpg';
import image2 from '../assets/andrew-neel-cckf4TsHAuw-unsplashrasm2.jpg';
import image3 from '../assets/jonathan-francisca-YHbcum51JB0-unsplashrasm3.jpg';

const Main = () => {
  return (
    <div className='flex flex-col align-middle justify-center gap-12 mb-52'>
      <h2 className='font-bold w-[800px] m-auto flex text-center text-6xl'>Here is what’s happening in the world
         of talk business.</h2>
         <span className='flex mt-[200px] align-middle justify-center gap-5'>
            <div className='flex flex-col gap-5 max-w-[40%]'>
                <p className='text-blue-600 font-bold'>MAY 2021</p>
                <h5 className='text-lg font-bold w-64'>Agile focused business services and more.</h5>
            </div>
            <img className='max-w-[50%]' src={image1} alt="rasm-1" />
         </span>

         <span className='flex align-middle justify-center gap-5'>
            <div className='flex flex-col gap-5 max-w-[40%]'>
                <p className='text-blue-600 font-bold'>MAY 2021</p>
                <h5 className='text-lg font-bold w-64'>Agile focused business services and more.</h5>
            </div>
            <img className='max-w-[50%]' src={image2} alt="rasm-1" />
         </span>

         <span className='flex align-middle justify-center gap-5'>
            <div className='flex flex-col gap-5 max-w-[40%]'>
                <p className='text-blue-600 font-bold'>MAY 2021</p>
                <h5 className='text-lg font-bold w-64'>Agile focused business services and more.</h5>
            </div>
            <img className='max-w-[50%]  object-center' src={image3} alt="rasm-1" />
         </span>
         <ul className='flex m-auto'>
            <li className='cursor-pointer p-3 border opacity-40'>Prev</li>
            <li className='cursor-pointer p-3 text-center w-16 bg-blue-700 text-white'>1</li>
            <li className='cursor-pointer p-3 text-blue-600/100 text-center w-16 border'>2</li>
            <li className='cursor-pointer p-3 text-blue-600/100 text-center w-16 border'>3</li>
            <li className='cursor-pointer p-3 text-blue-600/100 text-center w-16 border'>Next</li>
         </ul>
    </div>
  )
}

export default Main
