import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { backendurl, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (state === 'Sign Up') {
        const { data } = await axios.post(backendurl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendurl + '/api/user/login', { password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='felx flex-col gap-5 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
        <p className='text-2xl font-semibold text-gray-900'>{state === 'Sign Up' ? "Create Account" : "Log In"}</p><br />
        <p className='text-lg text-gray-800'>Please {state === 'Sign Up' ? "Sign Up" : "Login"} to Book Appointment </p><br />
        {
          state === "Sign Up" && <div className='w-full'>
            <p className='text-md text-gray-800'>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }
        <br />

        <div className='w-full'>
          <p className='text-md text-gray-800'>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div><br />
        <div className='w-full'>
          <p className='text-md text-gray-800'>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div><br />
        <button type='submit' className='bg-primary text-white w-full py-2 rounded-md text-base'>
          {state === 'Sign Up' ? "Create Account" : "Log In"}
        </button>
        <br /><br />
        {
          state === "Sign Up"
            ? <p className='text-md'>Already have an account? <span onClick={() => setState('Login')} className='text-primary text-md underline cursor-pointer'>Login here</span></p>
            : <p className='text-md'>Create a new account? <span onClick={() => setState('Sign Up')} className='text-primary text-md underline cursor-pointer'> Create Account</span></p>
        }
      </div>
    </form>
  )
}

export default Login