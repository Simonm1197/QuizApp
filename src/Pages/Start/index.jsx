import React from 'react'
import { useNavigate } from 'react-router-dom'

function StartPage() {

  const nav = useNavigate()
  return (
    <div className='flex h-screen bg-gradient-to-br from-pink-500  to-blue-200'>

      <hr className='w-4 h-full bg-green-400 ' />

      <div className='w-full'>
        <div className='flex mt-20 ml-10 '>
          <button type='button' onClick={() => nav('quiz')}
            className=' bg-green-400 h-10 w-20 rounded-lg text-white text-xl font-extrabold'
          >
            QUIZ</button>
          <p className='ml-4 text-white text-2xl font-extrabold'>FLOW</p>
        </div>
        <hr className='w-auto h-1 mt-5 ml-10 bg-gradient-to-r from-green-400 to-white' />
      </div>

    </div>


  )
}

export default StartPage