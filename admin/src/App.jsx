
import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import { Route, Routes } from 'react-router-dom';
import AddDoctor from './pages/Admin/AddDoctor';
import AllAppointment from './pages/Admin/AllAppointment';
import DoctorLists from './pages/Admin/DoctorLists';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorProfile from './pages/Doctor/DoctorProfile';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className='bg-[#F8F9FD]'>      
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          {/*       ADMIN ROUTE       */}
          <Route path='/' element={<></>}   / >
          <Route path='/admin-dashboard' element={<Dashboard/>}   / >
          <Route path='/admin-all-appointment' element={<AllAppointment/>}   / >
          <Route path='/admin-add-doctor' element={<AddDoctor/>}   / >
          <Route path='/admin-doctor-list' element={<DoctorLists/>}   / >

          {/*       DOCTOR ROUTE       */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard/>}   / >
          <Route path='/doctor-profile' element={<DoctorProfile/>}   / >
          <Route path='/doctor-appointment' element={<DoctorAppointment/>}   / >
          
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>)  
}

export default App