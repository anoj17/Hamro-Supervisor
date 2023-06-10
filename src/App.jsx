
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from './enum/routes.enum'
import Login from './pages/login/Login'
import Layout from './components/Layout'
import ForgetPwd from './pages/forgetPwd/ForgetPwd'
import Home from './pages/home/Home'
import Register from './pages/register/Register'


const App = () => {
  //  (
  //   <div>
  //     <Routes> 
  //       <Route path={''} element={<Layout/>}> <Route path={PageRoutes.LOGIN} element={<Login/>}/> </Route>
  //     </Routes>

  //     <h1 className='text-yellow-400'>hello world</h1>
  //     <Button className='text-yellow-500' btnType={'primary'} label='submit'/>
  //     <Input type='text'/>
  //     <Input type='date'/>
      
  //   </div>
  // )
   return <>

      <Routes> 
           
           <Route path={PageRoutes.FORGET} element={<ForgetPwd/>}/>
           <Route path={PageRoutes.REGISTER} element={<Register/>}/>
           <Route path={PageRoutes.HOME} element={<Home/>}/>
           <Route path={PageRoutes.LOGIN} element={<Login/>}/>
         
      </Routes>

  </>
}

export default App
