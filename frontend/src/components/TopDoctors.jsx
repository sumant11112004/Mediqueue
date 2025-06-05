import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

const navigate=useNavigate()
const {doctors} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book </h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Doctors.</p>
        <div className='w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blur rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500  ' key={index}>
                    <img className='bg-blue-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-gray-700 ' : 'text-red-700'} `}>
                            <input type="checkbox" className={`w-3 h-3 ${item.available ? 'bg-green-500' : 'bg-gray-500'}  rounded-full`} checked={item.available} />
                            <p >{item.available ? 'Available' : 'Not Available'}</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-900 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate(`/doctors`); scrollTo(0,0)}} className='bg-blue-100 text-gray-900 px-12 py-3 rounded-full  mt-10'>More</button>
    </div>
  )
}

export default TopDoctors