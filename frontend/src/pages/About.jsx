import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-700'>
        <p>
          About <span className='text-gray-800 font-medium'>Us</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className=' w-full sm:max-w-[360px] rounded-lg' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/3 text-md text-gray-600'>
          <p>Welcome to MediQueue – your reliable partner in streamlining your healthcare journey.
            At MediQueue, we understand the everyday challenges of booking doctor appointments and keeping track of medical records. That's why we're committed to making healthcare access simple, convenient, and efficient—so you can focus on your well-being while we handle the logistics.</p>
          <p>MediQueue is committed to excellence in healthcare technology.
            We continuously strive to enhance our platform by integrating the latest innovations to improve your experience and deliver exceptional service. Whether you're booking your first appointment or managing ongoing care, MediQueue is here to support you every step of the way.</p>
          <b className='text-gray-800 font-semibold text-xl'>Our Vision</b>
          <p className='font-semibold'>At MediQueue, our vision is to revolutionize the way people connect with healthcare.
            We strive to create a seamless, user-centered experience that bridges the gap between patients and healthcare providers. By simplifying appointment scheduling and health record management, MediQueue empowers individuals to take control of their well-being—anytime, anywhere.</p>
        </div>
      </div>
      <br />
      <br />
      <div className='text-xl my-4'>
        <p>Why to <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer '>
          <b>Efficiency</b>
          <p>Smart, streamlined appointment scheduling that adapts to your busy lifestyle—so you can focus on what matters most.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer '>
          <b>Convenience</b>
          <p>Easily connect with a reliable network of trusted healthcare professionals near you—so quality care is always within reach</p>
        </div>
        <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer '>
          <b>Personalization</b>
          <p>Get personalized health recommendations and timely reminders—designed to keep you informed, proactive, and in control of your well-being.</p>
        </div>
      </div>
    </div>
  )
}

export default About