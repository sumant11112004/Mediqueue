import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {

  const { dToken, getDashData, setDashData, dashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { currencySymbol, slotDateFormate } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-full border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.patients}</p>
            <p className='text-gray-600'>Patients</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-full border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.appointment}</p>
            <p className='text-gray-600'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded-full border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={assets.earning_icon} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-700'>{currencySymbol} {dashData.earnings}</p>
            <p className='text-gray-600'>Earning</p>
          </div>
        </div>
      </div>
      <div className='bg-white '>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-gray-200'>
          <img src={assets.list_icon} alt="" />
          <p className='font-semibold'>Latsest Appointments</p>
        </div>
        <div className='pt-4 border border-gray-200 border-t-0'>
          {
            dashData.latestAppointment.map((item, index) => (
              <div className='flex items-center px-6 py-3 gap-3 ' key={index}>
                <img className='rounded-full w-10 ' src={item.userData.image} alt="" />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                  <p className='text-gray-600'>{slotDateFormate(item.slotDate)}</p>
                </div>
                <div>
                  {
                    item.cancelled
                      ? <p className='text-red-500 text-xs font-medium'>Cancelled</p>
                      : item.isCompleted
                        ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                        : <div className='flex'>
                          <img onClick={() => cancelAppointment(item._id)} className='w-10 cuesor-pointer' src={assets.cancel_icon} alt="" />
                          <img onClick={() => completeAppointment(item._id)} className='w-10 cuesor-pointer' src={assets.tick_icon} alt="" />
                        </div>
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
