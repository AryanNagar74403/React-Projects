// import React from 'react'
// import { useState,useCallback ,useEffect,useRef} from 'react'
// const App = () => {

//   const [length, setLength] = useState(8)

//   const [numAllowed, setNumAllowed] = useState(false)

//   const [charAllowed, setCharAllowed] = useState(false)

//   const [password, setPassword] = useState('')

// const passwordGenerator = useCallback(()=>{
//   let pass =''
//   let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

//   if(numAllowed) str+= '0123456789'
//   if(charAllowed) str+= '<>?/.,!@#$%^&*()_+=-":;|'

//   for(let i=1;i<=length;i++){

//     let char = Math.floor(Math.random()*str.length+1)
//     pass += str.charAt(char)
//   }

//   setPassword(pass)

// } ,[length,numAllowed,charAllowed,setPassword])


// useEffect(()=>{
//   passwordGenerator()
// },[length,numAllowed,charAllowed,passwordGenerator])

// const passwordRef = useRef(null)

// const copyPasswordToClipboard = useCallback(()=>{
//   passwordRef.current?.select();
//   // passwordRef.current?.setSelectionRange(0,8)
//   window.navigator.clipboard.writeText(password)
// },[password])

//   return (
//     <div className='w-full bg-gray-700 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500'>
//       <h1 className='text-3xl text-center text-white my-3'>Password Generator</h1>
//       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//           <input type="text" 
//           value={password} 
//           className='bg-white outline-none w-full py-1 px-3'
//            placeholder='password'
//             readOnly
//             ref={passwordRef}
//             />
    
//     <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'
//     onClick={copyPasswordToClipboard}
//     >copy</button>
//       </div>

//       <div className='flex text-sm gap-x-2'>
//         <div className='flex items-center gap-x-1'>
//           <input
//            type="range"
//            max={100} 
//           min={8}
//           value={length}
//           className='cursor-pointer'
//           onChange={(e)=>{setLength(e.target.value)}}
//           />
//           <label>Length : {length}</label>
//         </div>

//        <div className='flex items-center gap-x-1'>
//         <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>{setNumAllowed((prev)=>!prev)}} />
//         <label htmlFor="inputNumbers">Numbers</label>
//         </div>

//        <div className='flex items-center gap-x-1'>
//         <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=>!prev)}} />
      
//       <label htmlFor="charInput">Characters</label>
//       </div>
//         </div>
    
//           </div>
//   )
// }

// export default App




import React from 'react'
 import { useState,useCallback ,useEffect,useRef} from 'react'

const App = () => {
const [length, setlength] = useState('8')
const [charAllowed, setCharAllowed] = useState(false)
const [numAllowed, setNumAllowed] = useState(false)

const [password, setPassword] = useState('')

const passwordGenerator = useCallback(()=>{
  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numAllowed) str+= '123456789'
  if(charAllowed) str+= '<>,./?:;}{[]=+-_*&^%$#@!~`'

  for(let i=1;i<=length;i++){
    let char = Math.floor(Math.random()*str.length+1)
    pass+= str.charAt(char)
  }
  setPassword(pass)
},[numAllowed,charAllowed,length,setPassword])

useEffect(()=>{
passwordGenerator()
},[length,passwordGenerator,charAllowed,numAllowed])

let passwordRef = useRef(null)

const copyToClipBoard = useCallback(()=>{
  
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,8)
  window.navigator.clipboard.writeText(password)

},[password])
  return (
    <div className='w-full bg-gray-700 max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500' >
      <h1 className="text-3xl text-center text-white my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" className='bg-white outline-none w-full py-1 px-3 'value={password} placeholder='Password' readOnly ref={passwordRef} />
        <button className="text-white bg-blue-700 outline-none px-3 py-0.5 shrink-0 hover:bg-blue-900" onClick={copyToClipBoard}>copy</button>

      </div>
      <div className="flex text-sm gap-x-2">

        <div className='flex items-center gap-x-1'>
          <input type="range" min={8} max={100} className='cursor-pointer' value={length} onChange={(e)=>{setlength(e.target.value)}} />
          <label >length: {length} </label>
        </div>
        
        <div className="flex items-center gap-x-1">
          <input type="checkbox" id='numberInput' onChange={()=>{setNumAllowed((prev)=>!prev)}} />
          <label htmlFor="numberInput">Numbers</label>

              </div>

              <div className="flex items-center gap-x-1">
                 <input type="checkbox"id='inputChar' onChange={()=>{setCharAllowed((prev)=>!prev)}} />
          <label htmlFor="inputChar">Characters</label>
              </div>
         
    
      </div>
    </div>
  )
}

export default App
