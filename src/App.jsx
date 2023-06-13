
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutes } from './enum/routes.enum'
import Login from './pages/login/Login'
import Layout from './components/Layout'
import ForgetPwd from './pages/forgetPwd/ForgetPwd'
import Home from './pages/home/Home'
import Register from './pages/register/Register'


const App = () => {
   return <>

      <Routes> 
           
           <Route path={PageRoutes.LOGIN} element={<Login/>}/>
           <Route path={PageRoutes.FORGET} element={<ForgetPwd/>}/>
           <Route path={PageRoutes.REGISTER} element={<Register/>}/>
           <Route path={PageRoutes.HOME} element={<Home/>}/>
         
      </Routes>

  </>
}

export default App
