import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import mediqueue_logo1 from '../assets/mediqueuelogo.svg';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const navigate = useNavigate()
    const { token, setToken, userData } = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <a href=""><img onClick={() => navigate('/')} className='w-40 cursor-pointer' src={mediqueue_logo1} alt="" /></a>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1' >DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex item-center gap-4'>
                {
                    token && userData
                        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={userData.image} alt="" />
                            <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-40  group-hover:block hidden'>
                                <div className=' min-w-40 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                                    <p onClick={() => navigate('/myprofile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/myappointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
                }
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                {/*------------Mobile Menu-------*/}
                <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={mediqueue_logo1} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>Home</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded full inline-block'>Doctors</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded full inline-block'>About</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded full inline-block'>Contact</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/myprofile'><p className='px-4 py-2 rounded full inline-block'>My Profile</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/myappointment'><p className='px-4 py-2 rounded full inline-block'>My Appointment</p></NavLink>
                        
                        {
                           token && userData
                           ? <NavLink onClick={() => setShowMenu(false)} to='/'><p onClick={logout} className='px-4 py-2 rounded full inline-block'>Logout</p></NavLink>
                           : <NavLink onClick={() => setShowMenu(false)} to='/login'><p onClick={() => navigate('/login')} className='bg-primary text-white px-6 py-2 rounded-full font-light'>Create Account</p></NavLink>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar