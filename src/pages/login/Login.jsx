
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import {React, useState} from 'react'
import { PageRoutes } from '../../enum/routes.enum'

const Login = () => {
   const navigate = useNavigate()
   const currentPath = window.location.pathname
   const [userInput, setUserInput] = useState({
      username : '',
      password : ''
   })

   const changeInput = (e) =>{
      const name = e.target.name
      const value = e.target.value

      console.log(name, value)
      setUserInput({...userInput, [name] : value})
   }

  return <>
  
    <section className='w-full h-[100vh] mx-auto flex justify-center items-center'>
        <img src='img.webp' alt='/' className='object-fill w-full h-[100vh] absolute -z-10'/>

        <form  className='rounded-2xl h-[500px] w-[350px] bg-blue-800 bg-opacity-30 flex justify-center items-center'>
            
            <div className='z-10 px-auto'>
             <div className='h-[150px] w-[160px] ml-[80px] mt-[-140px]'>
              <div className=' h-[100px] w-[100px] ml-4 rounded-[50%] overflow-hidden'>
              <img src='hamro.png' className='object-cover'/>
              </div>
              <h1 className='text-white py-2 font-bold font-sans'><span className='text-2xl text-green-600'>H</span>amro<span className='text-2xl text-green-600'> S</span>upervisor</h1>
              </div>
            <div className='mt-3'>
             <div className='flex justify-between bg-[#222] rounded-2xl'>
                <Link to={PageRoutes.LOGIN}>
                <Button className={currentPath=='/login'?'bg-green-400 text-black':'text-white'} label='LogIn'/>
                </Link>
                <Link to={PageRoutes.REGISTER}>
                <Button className={currentPath=='/register'?'bg-green-400 text-black':'text-white'} label='Register'/>
                </Link>
             </div>
                <Input label='username or email' autoComplete='off' type={'text'} name='username' value={userInput.username} onChange={changeInput} placeholder={'username or email'} className={'my-2'}/>
                <Input label='password' autoComplete='off' type='text' name='password' value={userInput.password} onChange={changeInput} placeholder='password' className={'my-2'}/>
                <Link to={PageRoutes.FORGET} className='text-white ml-36 text-[15px] mb-[10px] font-bold absolute top-[67%]'>Forget Password?</Link>
                <Link to={PageRoutes.HOME}>
                <Button label='login' className={'bg-green-400 absolute top-[74%] ml-20'}/>
                </Link>
             </div>
             </div>
        </form>
    </section>
  
  </>
}

export default Login
