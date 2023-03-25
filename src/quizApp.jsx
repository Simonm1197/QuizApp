import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Pages/Footer'
import Header from './Pages/Header'

function QuizApp() {
  return (
    <div className='w-full h-screen flex flex-col bg-orange-100 '>
      <Outlet />
    </div>
  )
}

export default QuizApp
