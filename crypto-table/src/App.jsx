import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios";
import Spiner from './components/Spiner';
const App = () => {
  const [coins, setCoins] = useState([]);
  
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
      const fetchData= async()=>{
  
          try {
             const res= await axios.get('https://api.coingecko.com/api/v3/coins/markets',{
              params:{
                  vs_currency:"usd",
                  order:"market_cap_desc",
                  per_page:10,
                  page:1,
                  sparkline :false,
              }
             }) 
             setCoins(res.data);
  
          } catch (error) {
              console.log('Error fetching data',error);
              
          }
          finally{
              setLoading(false)
          }
      }
      fetchData();
  },[])
  return (
    <div className='bg-gray-900 min-h-screen flex items-center justify-center text-gray-300 px-6 py-10'>
      <div className='w-full  max-w-5xl'>
        <h1 className='uppercase tracking-[3px] text-xl mb-8'>
          <span className='text-5xl'>C</span>ryptocurrencies market
        </h1>
        {loading ? (<Spiner/>):(
          <div className='overflow-x-auto'>

  <table className='min-w-full border border-white/20 rounded-lg overflow-hidden'>
          <thead className='bg-gradient-to-r from-indigo-500 to-pink-500  '>
              <tr>
              <th className='px-4 py-2 text-left'>#</th>
            <th className='px-4 py-2 text-left'>Name</th>
            <th className='px-4 py-2 text-left'>Price (USD)</th>
            <th className='px-4 py-2 text-left'>Market Cap</th>

            <th className='px-4 py-2 text-left'>24h Change</th>

              </tr>
          
          
          </thead>


          <tbody>

            {coins.map((coin ,idx)=>(
                <tr key={coin.id} className='border-t border-gray-600 bg-gray-800 hover:bg-white/10'>
            <td className='py-2 px-4'>{idx+1}</td>
            <td className='py-2 px-4 flex gap-2 items-center'><img src={coin.image} alt={coin.name} 
            className='h-6 w-6'
            />
           {coin.name} ({coin.symbol.toUpperCase()})</td>

            <td className='py-2 px-4'>${coin.current_price.toLocaleString()}</td>
            <td className='py-2 px-4'>${coin.market_cap.toLocaleString()}</td>
            <td className={`py-2 px-4 
              ${coin.price_change_percentage_24h > 0 ?"text-green-400":"text-red-400"}
              `}>{coin.price_change_percentage_24h}</td>

            
            </tr>
            ))}
          
          </tbody>
        
        </table>

</div>
        )}

      

      </div>
    </div>
  )
}

export default App
