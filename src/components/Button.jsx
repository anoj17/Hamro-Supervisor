import React, { useState } from 'react'

const Button = ({label,className,...props}) => {
   
  return <>

   <button {...props} className={`${className} px-12 block rounded-xl py-2`} >{label}</button>

  </>
  
}

export default Button
