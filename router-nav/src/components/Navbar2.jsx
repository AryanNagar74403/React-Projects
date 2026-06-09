// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Navbar2 = () => {
//   const navigate = useNavigate()
//   return (
//     <div className='flex gap-5 mt-10'>
//        <button className='py-2 px-5 bg-blue-700 shadow-sm text-lg rounded active:scale-95' onClick={()=>{navigate('/')}}>return to home page</button>
//         <button className='py-2 px-5 bg-blue-700 shadow-sm text-lg rounded active:scale-95' onClick={()=>{
//           navigate(-1)
//         }}>Prev</button>
//       <button className='py-2 px-5 bg-blue-700 shadow-sm text-lg rounded active:scale-95' onClick={()=>{
//         navigate(+1)
//       }}>Next</button>
//     </div>
//   )
// }

// export default Navbar2
 


import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <div className="flex gap-5 mt-10">
      <button
        className="py-2 px-5 bg-blue-700 text-white shadow-sm rounded active:scale-95"
        onClick={() => navigate('/')}
      >
        Return to Home
      </button>

      <button
        className="py-2 px-5 bg-blue-700 text-white shadow-sm rounded active:scale-95"
        onClick={() => navigate(-1)}
      >
        Prev
      </button>

      <button
        className="py-2 px-5 bg-blue-700 text-white shadow-sm rounded active:scale-95"
        onClick={() => navigate(1)}
      >
        Next
      </button>
    </div>
  )
}

export default Navbar2