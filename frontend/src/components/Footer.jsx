import React from 'react'
import { assets } from '../assets/assets'
import mediqueue_logo1 from '../assets/mediqueuelogo.svg';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
            {/* -----------Left Section----------*/}
            <a href=""><img onClick={()=>navigate('/')}  className='mb-5 w-40 cursor-pointer' src={mediqueue_logo1} alt="" /></a>
            <p className='w-full md:w-4/5 text-gray-800 leading-5'>
                MediQueue is a smart healthcare platform designed to simplify appointment scheduling and health record management. Our mission is to make healthcare more accessible, efficient, and user-friendly by connecting patients with trusted medical professionals—all in one place. With a focus on innovation and reliability, MediQueue is redefining how you manage your health.
            </p>            
            </div>
            <div>
            {/* -----------Center Section----------*/}
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='felx flex-col gap-2 text-gray-700'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div>
            {/* -----------Left Section----------*/}
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul className='felx flex-col gap-2 text-gray-700'>
                <li>Phone: +91-7488819884</li>
                <li>sumantkumar11112004@gmail.com</li>
            </ul>            
            </div>
        </div>
        <hr className='border border-gray-300' />            
                 {/*---------------Copyright Text---------------------- */}
            <div> 
                <p className='flex flex-col items-center py-3 text-sm text-left' >Copyright 2025 @MediQueue - All Rights Reserved</p>
            </div>
        
    </div>
  )
}

export default Footer