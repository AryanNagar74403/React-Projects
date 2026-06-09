import React, { useState } from 'react'
import InputBox from './components/Input'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
// import { useState } from 'react'
const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertAmount, setConvertAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

 const options = Object.keys(currencyInfo)
  
  //swap method from to se to ko from se
  const swap = ()=>{
    setFrom(to)
    setTo(from)
     setConvertAmount(amount)
  setAmount(convertAmount)
  }

  const convert = ()=>{
    setConvertAmount(amount*currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
    style={{backgroundImage:'url("https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30  ">
        
        <form onSubmit={(e)=>{e.preventDefault(); convert()}} >
          <div className="w-full mb-1">
          <InputBox 
          label='From' amount={amount} currencyOptions={options}
          onCurrencyChange={(currency)=>{setFrom(currency)}}
          selectCurrency={from}
          onAmountChange={(amount)=>setAmount(amount)}
          />
          </div>
          <div className="relative w-full h-0.5">
            <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 '
            onClick={swap}>Swap</button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox label='To' amount={convertAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>{setTo(currency)}}
            selectCurrency={to}
            amountDisable
            />
          </div>
          <button className="w-full rounded-lg bg-blue-600 text-white px-4 py-3 " type='submit' >
            Convert {from.toUpperCase()} to {to.toUpperCase()} 
          </button>
        </form>

        </div>
      </div>
      
    </div>
  )
}

export default App
