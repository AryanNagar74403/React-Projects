import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='flex items-center justify-end gap-5 p-10'>
      <button className='px-4 py-2 bg-blue-700 active:scale-95 font-semibold rounded text-white ' onClick={()=>{navigate('/product/men')}}>Men's</button>
      <button className='px-4 py-2 bg-blue-700 active:scale-95 font-semibold rounded text-white 'onClick={()=>{navigate('/product/men')}}>Women's</button>
    </div>
  <div className='flex w-full  min-h-screen justify-center items-center px-4 '>
    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold text-center">this is Product Page</h1>
    </div>
    </>
  )
}

export default Product
