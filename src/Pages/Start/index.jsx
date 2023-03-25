import React from 'react'
import { useNavigate } from 'react-router-dom'

function StartPage() {

  const nav = useNavigate()
  return (
    <div className='flex flex-row h-screen bg-gradient-to-br w-full items-center justify-between from-pink-500  to-blue-200'>

    <div className='w-[3%] h-full bg-green-400 ' />

    <div className='flex flex-col w-[90%] justify-start items-center'>
        <div className='flex w-full'>
          <button type='button' onClick={() => nav('quiz')}
            className=' bg-green-400 h-10 w-20 rounded-lg text-white text-xl font-extrabold'
          >
            QUIZ</button>
          <p className='ml-4 text-white text-2xl font-extrabold'>FLOW</p>
        </div>
        <div className='w-full h-1 bg-gradient-to-r from-green-500 to-transparent mt-[1%]'></div>
      </div>

    </div>


  )
}

export default StartPage