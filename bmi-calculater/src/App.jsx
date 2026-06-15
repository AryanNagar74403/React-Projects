import { useState } from "react";

const App = () => {
 
 const [height, setHeight] = useState('')
 const [weight, setWeight] = useState('')
  const [result, setResult] = useState('')

  const calculateBMI=()=>{
        let h = Number(height)
    let w = Number(weight)
    let cateogery = ''
    const hiegthInMeters= h/100;
    let bmi = w/(hiegthInMeters*hiegthInMeters)
    // const bmiRound = bmi.toFixed(1)
    if(!h||!w){
  setResult("Please enter height and weight");
  return
    }
    if(bmi<18.5){cateogery= "underweight";} 
    else if(bmi<25){cateogery= "Normal";} 
    else if(bmi<30){cateogery= "overweight";}
    else{
       cateogery= "Obese"
    }
     setResult(`BMI: ${bmi.toFixed(1)} (${cateogery})`);

    setHeight('')
    setWeight('')
    

  }
  return (

    <div className='bg-[#0f172a] text-[#f1f5f9] flex justify-center items-center h-screen'>

      <div className="container bg-[#1e293b] p-[2rem] rounded-2xl w-full max-w-[400px] text-center">
        <h1 className= 'text-[#3b82f6] text-2xl mb-[1rem]'>BMi Calculater</h1>
        <label className='block m-[1rem_0_0.5rem]' htmlFor="height">Height (cm)</label>
        <input className=' shadow-[inset_0_0_5px_rgba(59,130,246,0.3)] w-full text-[1rem] text-[#f1f5f9] p-[0.75rem] rounded outline-none border-none bg-[#0f172a]' 
        type="number"  id="height" placeholder='e.g 170'
         value={height}
        onChange={(e)=>{setHeight(e.target.value)}} 
        />
        <label className='block m-[1rem_0_0.5rem]' htmlFor="weight">Weight (kg)</label>
        <input className=' shadow-[inset_0_0_5px_rgba(59,130,246,0.3)] w-full text-[#f1f5f9] text-[1rem] p-[0.75rem] bg-[#0f172a] rounded border-none outline-none' type="number"  id="weight" placeholder='e.g 65' 
           value={weight}
        onChange={(e)=>{setWeight(e.target.value)}}
     
        />
        <button className='mt-[1.5rem] p-[0.50rem] text-[#f1f5f9] rounded border-none outline-none text-md font-semibold cursor-pointer hover:bg-[#60a5fa] bg-[#3b82f6]' onClick={calculateBMI}>Calculate</button>
        <div className='mt-[1.5rem] text-[1.2rem] font-semibold text-[#3b82f6]'>
          {result}</div>
      </div>
      
    </div>
  )
}

export default App
