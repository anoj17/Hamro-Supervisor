import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import React, { useState } from 'react'
import { PageRoutes } from '../../enum/routes.enum'

const ForgetPwd = () => {

  return <>
  
  <section className='w-full h-[100vh] flex justify-center items-center'>
        <img src='img.webp' alt='/' className='object-fill w-full h-[100vh] absolute -z-10'/>
        <form  className='rounded-2xl h-[500px] w-[350px] bg-blue-800 bg-opacity-20 flex justify-center items-center'>
            
            <div className='z-10'>
             <div className=' h-[150px] w-[160px] ml-[80px] mt-[30px]'>
              <div className=' h-[100px] w-[100px] ml-4 rounded-[50%] overflow-hidden mt-[-135px]'>
              <img src='hamro.png' className='object-cover'/>
              </div>
              <h1 className='text-white py-2 font-bold font-sans'><span className='text-2xl text-green-600'>H</span>amro<span className='text-2xl text-green-600'> S</span>upervisor</h1>
              </div>
            
            <div>
                <Input label='username or email' type={'text'} placeholder={'username or email'} className={'my-2'}/>
                <Input label='new password' type='text' placeholder='new-password' className={'my-2'}/>
                <Link to={PageRoutes.HOME}>
                    <Button label={'continue'} className={'bg-green-400 ml-16 mt-[20px]'}/>
                </Link>
                <Link to={PageRoutes.LOGIN}>
                <div className='text-white px-20 font-bold font-sans mt-3' >Login to account?</div>
                </Link>
            </div>
             </div>
        </form>
    </section>
  

  


  </>
}

export default ForgetPwd
