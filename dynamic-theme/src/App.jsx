import React from 'react'
import { useState } from 'react';
import { Share2 ,ThumbsUp,Bookmark} from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('yellow')
  const themes={
    blue:{
      text:'text-blue-500',
      border:'border-blue-400'},

      yellow:{
      text:'text-yellow-300',
      border:'border-yellow-300'},

       green:{
      text:'text-green-400',
      border:'border-green-400' },

       orange:{
      text:'text-orange-400',
      border:'border-orange-400'},

      purple:{
      text:'text-purple-400',
      border:'border-purple-400'},

       red:{
      text:'text-red-400',
      border:'border-red-400'},

       pink:{
      text:'text-pink-400',
      border:'border-pink-400'},

         cyan:{
      text:'text-cyan-400',
      border:'border-cyan-400'},

      gray:{
      text:'text-gray-400',
      border:'border-gray-400'},
          


    }
 
  return (
    <div className='bg-gray-900 flex flex-col md:flex-row min-h-screen justify-center items-center gap-6 p-4 md:p-6'>


      <div className='bg-gray-800 w-fit flex gap-4 flex-row flex-row md:flex-col p-5 rounded-2xl'>


        <button className='bg-blue-500 h-[20px]  w-[20px] rounded-full'
        onClick={()=>setTheme('blue')}></button>
        <button className='bg-green-400 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('green')}></button>
        <button className='bg-orange-400 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('orange')}></button>
        <button className='bg-yellow-300 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('yellow')}></button>
        <button className='bg-purple-400 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('purple')}></button>
        <button className='bg-red-400 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('red')}></button>
        <button className='bg-pink-400 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('pink')}></button>
        <button className='bg-cyan-400 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('cyan')}></button>
        <button className='bg-gray-300 h-[20px]  w-[20px] rounded-full cursor-pointer ' onClick={()=>setTheme('gray')}></button> 

      </div>

      <div className={`bg-gray-800 text-gray-100 p-5 md:p-10 w-full md:max-w-4xl   border-r-2  ${themes[theme].border} `}>



        <h1 className={`${themes[theme].text} font-semibold text-2xl md:text-4xl mb-2`}>Welcome to dynamic theme</h1>
        <h2 className='mb-3 '>choose your fav color</h2>
        <p className={`${themes[theme].text} border-l-2 ${themes[theme].border} md:p-5 p-4 bg-gray-700`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium repudiandae, possimus corporis odit numquam nam natus alias odio ea voluptatibus facilis. Ipsa numquam, cupiditate doloribus eos dolorem eum dignissimos molestias, consequatur cumque soluta deleniti voluptatem impedit libero sunt dolores?</p>

        <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi aspernatur explicabo alias pariatur, libero, veritatis minima repellat nulla officiis quod quae exercitationem? Quae placeat repudiandae ea dolorum omnis iure quaerat temporibus modi delectus obcaecati, aliquid quam aperiam eum rerum incidunt doloribus id recusandae tenetur totam quo assumenda architecto harum. Repudiandae provident aliquam ipsa adipisci! Aliquam maxime et earum quisquam labore quibusdam qui dicta nesciunt dolor alias. Esse, eligendi, aliquid dolorem placeat similique voluptatem reprehenderit tempora consectetur maxime ex nostrum, qui tenetur? Similique dicta veritatis aspernatur. Repudiandae, nesciunt optio </p>
        <div className={`flex items-center gap-4 md:gap-5 mt-5 ${themes[theme].text}`}>
          <button className=''><Share2 size={20} /></button>
          <button><ThumbsUp size={20} /></button>
          <button><Bookmark  size={20}/></button>
        </div>
      </div>
      
    </div>
  )
}

export default App
