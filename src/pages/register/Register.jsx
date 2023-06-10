import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { PageRoutes } from '../../enum/routes.enum'

const Register = () => {
    const navigate = useNavigate()
    const currentPath = window.location.pathname
  return  <>

<section className='w-full h-[100vh] flex justify-center items-center'>
        <img src='img.webp' alt='/' className='object-fill w-full h-[100vh] absolute -z-10'/>
        
        <form  className='rounded-2xl h-[520px] w-[360px] bg-blue-800 bg-opacity-20 flex justify-center items-center'>
            
            <div className='z-10'>
             <div className='absolute h-[150px] w-[160px] ml-[80px] top-12'>
              <div className=' h-[100px] w-[100px] ml-4 rounded-[50%] overflow-hidden'>
              <img src='hamro.png' className='object-cover'/>
              </div>
              <h1 className='text-white py-2 font-bold font-sans'><span className='text-2xl text-green-600'>H</span>amro<span className='text-2xl text-green-600'> S</span>upervisor</h1>
              </div>
            <div className=' mt-[40px]'>
                <Input label='first name' type='text' placeholder='firstname'/>
                <Input label='last name' type={'text'} placeholder={'lastname'}/>
                <Input label='email' type='text' placeholder='email'/>
                <Input label='password' type='text' placeholder='password'/>
               
             </div>
             <div className='ml-[70px] absolute top-[520px]'>
             <Link to={PageRoutes.HOME}>
                <Button className='bg-green-400 text-black' label='submit'/>
            </Link>
             </div>
             </div>
        </form>
    </section>

  </>
}

export default Register
