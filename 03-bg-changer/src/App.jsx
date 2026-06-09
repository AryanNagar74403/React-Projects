import React from 'react'
import { useState } from 'react'
const App = () => {
    const [bgChange, setBgChange] = useState("gray")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: bgChange}}>
      

      <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
       <div className='flex flex-wrap gap-3 bg-gray-200 justify-center shadow-lg px-3 py-2 rounded-3xl'>
         <button className='bg-red-600 outline-none px-4 py-2 rounded-full text-white shadow-lg'
         onClick={()=>{setBgChange("red")}}>Red</button>
        <button className='bg-green-600 outline-none px-4 py-2 rounded-full text-white shadow-lg'
        onClick={()=> setBgChange("green")}>Green</button>
        <button className='bg-blue-600 outline-none px-4 py-2 rounded-full text-white shadow-lg'
        onClick={() =>setBgChange("blue") }>Blue</button>
        <button className='bg-yellow-400 outline-none px-4 py-2 rounded-full text-white shadow-lg'
        onClick={() => setBgChange("yellow")}>Yellow</button>
         <button className='bg-purple-600 outline-none px-4 py-2 rounded-full text-white shadow-lg'
         onClick={()=> setBgChange("purple")}>Purple</button>
        <button className='bg-black outline-none px-4 py-2 rounded-full text-white shadow-lg'
        onClick={()=>{setBgChange("black")}}>Black</button>
        <button className='bg-olive-400 outline-none px-4 py-2 rounded-full text-white shadow-lg'
        onClick={()=> setBgChange("olive")}>Olive</button> 
        <button className='bg-white outline-none px-4 py-2 rounded-full text-black shadow-lg'
        onClick={()=> setBgChange("white")}>White</button>
         <button className='bg-lime-500 outline-none px-4 py-2 rounded-full text-white shadow-lg'
        onClick={()=> setBgChange("lime")}>Lime</button>
       </div>
      </div>
    </div>
  )
}

export default App
