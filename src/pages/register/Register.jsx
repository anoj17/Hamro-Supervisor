import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { PageRoutes } from '../../enum/routes.enum'

const Register = () => {
  const [useRegister,setUseRegister] = useState({
    firstname : '',
    lastname : '',
    email : '',
    password : ''
   });
    const changeHandle = (e) =>{
        const name = e.target.name
        const value = e.target.value
  
        console.log(name,value)
  
        setUseRegister({...useRegister, [name] : value})
    }
  return  <>

<section className='w-full h-[100vh] flex justify-center items-center'>
        <img src='img.webp' alt='/' className='object-fill w-full h-[100vh] absolute -z-10'/>
        
        <form action='' className='rounded-2xl h-[520px] w-[360px] bg-blue-800 bg-opacity-20 flex justify-center items-center'>
            
            <div>
             <div className='h-[150px] w-[160px] ml-[80px] mt-[-50px]'>
              <div className=' h-[100px] w-[100px] ml-4 rounded-[50%] overflow-hidden'>
              <img src='hamro.png' className='object-cover'/>
              </div>
              <h1 className='text-white py-2 font-bold font-sans'><span className='text-2xl text-green-600'>H</span>amro<span className='text-2xl text-green-600'> S</span>upervisor</h1>
              </div>
            <div className=' mt-[10px]'>
                <Input label='first name' name='firstname' value={useRegister.firstname} onChange={changeHandle} placeholder='firstname'/>
                <Input label='last name' name='lastname' value={useRegister.lastname} onChange={changeHandle} type='text' placeholder={'lastname'}/>
                <Input label='email' name='email' value={useRegister.email} onChange={changeHandle} type='text' placeholder='email'/>
                <Input label='password' name='password' value={useRegister.password} onChange={changeHandle}  type='text' placeholder='password'/>
               
             </div>
             <div className='ml-[70px]'>
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
