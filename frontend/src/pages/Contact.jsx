import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div  className='text-center text-2xl pt-10 text-gray-800'>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-900'>Our Office</p>
          <p className='text-lg text-gray-700'>Bansal Institue of Research & Technology <br />Kokta, Bhopal, Madhya Pradesh Pin: 462021</p>
          <p className='text-lg text-gray-700'>Phone: +91-7488819884 <br />Email: sumantkumar11112004@gmail.com</p>
          <p className='font-semibold text-xl text-gray-900' >Careers at MediQueue</p>
          <p className='text-lg text-gray-700'> Learn more about our teams and job opening.</p>
          <button className='border border-black py-3 px-6 text-lg hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>
        </div>
      </div>      
    </div>
  )
}

export default Contact