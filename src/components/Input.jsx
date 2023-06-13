import React from 'react'

const Input = ({label,type,placeholder,className,value,name,...props}) => {
  return <>
  <div className='items-center justify-center my-3 mx-auto'>
    <div className='px-3'>
     <label className='text-white'>{label}</label>
    </div>
  <input {...props} className={`${className} relative p-2 text-white bg-black px-5 rounded-2xl border-none shadow-inner...`}
   type={type} placeholder={placeholder} name={name} value={value}/>
  </div>
  </>
}

export default Input
