import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { PageRoutes } from '../../enum/routes.enum'

const Home = () => {
  return (
    <div className='bg-black flex justify-center items-center h-100vh w-100%'>
      <h1 className='text-white text-4xl'>HOME</h1>
      <Link to={PageRoutes.LOGIN}>
      <Button className={'text-blue-600'} label={'click'}/>
      </Link>
    </div>
  )
}

export default Home
