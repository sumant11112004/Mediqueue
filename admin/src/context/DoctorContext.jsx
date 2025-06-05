import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const DoctorContext = createContext()

const DoctorContextProvider = (props)=>{
    const backendurl = import.meta.env.VITE_BACKEND_URL
    const[dToken, setDToken]=useState(localStorage.getItem('dToken')?localStorage.getItem('dToken'):'')
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData]= useState(false)
    const [profileData, setProfileData] = useState(false)
    //API TO GET APPOINTMENTS FOR DOCTOR
    const getAppointments = async()=>{
        try {
            const {data} = await axios.get(backendurl+'/api/doctor/appointments',{headers:{dToken}})
            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments.reverse());                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);        
        }
    }

    const completeAppointment = async(appointmentId)=>{
        try {
            const {data} = await axios.post(backendurl+'/api/doctor/complete-appointment',{appointmentId},{headers:{dToken}})
            if (data.success) {
                toast.success(data.success)
                getAppointments()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const cancelAppointment = async(appointmentId)=>{
        try {
            const {data} = await axios.post(backendurl+'/api/doctor/cancel-appointment',{appointmentId},{headers:{dToken}})
            if (data.success) {
                toast.success(data.success)
                getAppointments()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const getDashData = async()=>{
        try {
            const {data} = await axios.get(backendurl+'/api/doctor/dashboard',{headers:{dToken}})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData);
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const getProfileData = async()=>{
        try {
            const {data} = await axios.get(backendurl+'/api/doctor/profile',{headers:{dToken}})
            if (data.success) {
                setProfileData(data.profileData)
                console.log(data.profileData);               
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const value = {
        dToken, setDToken,
        backendurl, appointments, setAppointments,
        getAppointments, completeAppointment, 
        cancelAppointment, getDashData,
        setDashData, dashData, profileData,
        setProfileData, getProfileData        
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider