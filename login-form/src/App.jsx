import React from 'react'
import { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
const App = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [validEmail, setValidEmail] = useState(null)
const [validpassword, setValidpassword] = useState(null)

const emailValidate=(value)=>{
  const isValid=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
  setValidEmail(isValid);
  return isValid;
}

const passwordValidator=(value)=>{
  const isValid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(value);
  setValidpassword(isValid);
  return isValid
}

const submitHandler=(e)=>{
e.preventDefault()

const isEmailOk= emailValidate(email)
const isPasswordOk = passwordValidator(password)
if(!isEmailOk||!isPasswordOk){
  toast.error("Please fix the error before submitting!")
} 
else{
  toast.success("Login success")
}
}
  return (
    <div className='  '>
      <form action=""
      onSubmit={submitHandler}
       className='bg-white  rounded-xl w-[500px] flex flex-col gap-10 shadow-2xl '>
       
        <div className='flex justify-center items-center flex-col'>
           <h1 className='font-bold text-2xl   tracking-wide'>Login</h1>
        <p className='text-[#2c2c2c] '>Wellcome to login form</p>
        </div>

        <div className='w-[100%] flex flex-col '>
          <label className='text-[#2c2c2c] uppercase '  htmlFor="email">Email</label>
          <input className='bg-[#ebebeb] border-none outline-none rounded' 
           type="text" id='email' placeholder='e g john@gmail.com'
           value={email}
           onChange={(e)=>{
            setEmail(e.target.value),
            emailValidate(e.target.value)
           } } />
           {validEmail===false&&email.trim()!==""&&(
             <span className='error'>The email should be not valid</span>
  )}
        
        </div>

        <div className='w-[100%] flex flex-col '>
           <label className='text-[#2c2c2c] uppercase' htmlFor="password">Password</label>
          <input className='bg-[#ebebeb] border-none outline-none rounded' type="password" id='password' placeholder='Enter your password'
          value={password}
          onChange={(e)=>{setPassword(e.target.value),
                         passwordValidator(e.target.value)}
          } />
          {validpassword===false&&password!==""&&(
            <span className='error'>Your password must be at least 8 characters long and include both letters and numbers</span>
          )}
          
        </div>
<button>Login <CiLogin /></button>
      </form>

      <ToastContainer position='top-right' autoClose={3000}/>
    </div>
  )
}

export default App
