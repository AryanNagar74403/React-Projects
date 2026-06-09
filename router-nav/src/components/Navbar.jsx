// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center p-5 py-4 font-semibold  bg-gray-300 text-lg'>
//       <h1>ARYAN</h1>
      
//       <div className='flex gap-10 '>
//         <Link to='/' >Home</Link>
//         <Link to='/about' >About</Link>
//         <Link to='/contact' >Contact</Link>
//         <Link to='/product' >Product</Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar



// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="bg-gray-300 p-5 py-4 font-semibold text-lg">
//       <div className="flex justify-between items-center">
//         <h1>ARYAN</h1>

//         {/* Hamburger Button */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-10">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/product">Product</Link>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="flex flex-col gap-4 mt-4 md:hidden">
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             Home
//           </Link>
//           <Link to="/about" onClick={() => setIsOpen(false)}>
//             About
//           </Link>
//           <Link to="/contact" onClick={() => setIsOpen(false)}>
//             Contact
//           </Link>
//           <Link to="/product" onClick={() => setIsOpen(false)}>
//             Product
//           </Link>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen]= useState(false)
  return (
    <nav className='bg-gray-300 p-5 py-4 font-semibold text-lg'>
      <div className='flex justify-between items-center'>
        <h1>Aryan</h1>
        <button className='md:hidden text-2xl' onClick={()=>{setIsOpen(!isOpen)}}>☰</button>

        <div className="hidden md:flex gap-10 ">
          <Link to='/'>Home</Link>
         
          <Link to='/about'>About</Link>
           <Link to='/contact'>Contact</Link>
          <Link to='/product'>Product</Link>
           
        </div>
      </div>
      {isOpen&& (<div className='flex flex-col gap-4 mt-4 md:hidden '>
        <Link to='/'onClick={()=>setIsOpen(false)}>Home</Link>
        <Link to='/about'onClick={()=>setIsOpen(false)}>About</Link>
        <Link to='/contact'onClick={()=>setIsOpen(false)}>Contact</Link>
        <Link to='/product'onClick={()=>setIsOpen(false)}>Product</Link>
        </div>)}
    </nav>
  )
}

export default Navbar
