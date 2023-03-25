
import clsx from 'clsx';
import React, { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'
import Footer from '../Footer';
import Header from '../Header';

function Quiz() {
    const {page, quizzes, activeVal, val } = useContext(QuizContext);

     if(page <= 3 ){
        return (
            <div className='flex flex-col h-screen'> 
            <Header />
            <div className='flex w-full flex-col flex-1 justify-around items-center'>
                <p className='text-center text-2xl font-bold w-[80%]'>{quizzes[page].question}</p>
                <div className='flex flex-col w-full flex-1 justify-evenly items-center'>
                    <button type='button' className={clsx(' bg-white w-1/4 font-bold flex items-center px-1 py-3 rounded-xl pl-5 hover:bg-green-400', {
                        'bg-green-400' : val === 'A'
                    })} onClick={() => activeVal('A')
}
                    >
                        
                        {val === 'A' ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='w-10 h-10 mr-5 bg-slate-50 rounded-full'
                                fill='green'
                                viewBox='0 0 48 48'><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
                        ) : <p className='bg-orange-100 px-3 py-2 mr-5 w-10 h-10  rounded-full'>A</p>}
                        {quizzes[page].a}</button>


                    <button type='button' className={clsx('w-1/4 bg-white font-bold flex items-center px-1 py-3 rounded-xl pl-5 hover:bg-green-400', {
                        'bg-green-400': val === 'B'
                    })} onClick={() => activeVal('B')}>
                        {val === 'B' ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='w-10 h-10 mr-5 bg-slate-100 rounded-full'
                                fill='green'
                                viewBox='0 0 48 48'><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
                        ) : <p className='bg-orange-100 px-3 py-2 mr-5 w-10 h-10 rounded-full'>B</p>}{quizzes[page].b}</button>


                    <button type='button' className={clsx('w-1/4 bg-white font-bold flex items-center px-1 py-3 rounded-xl pl-5 hover:bg-green-400', {
                        'bg-green-400': val === 'C'
                    })} onClick={() => activeVal('C')}>
                        {val === 'C' ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='w-10 h-10 mr-5 bg-slate-100 rounded-full '
                                fill='green'
                                viewBox='0 0 48 48'><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
                        ) : <p className='bg-orange-100 px-3 py-2 mr-5 w-10 h-10  rounded-full'>C</p>}{quizzes[page].c}</button>


                    <button type='button' className={clsx('w-1/4 bg-white font-bold flex items-center px-1 py-3 rounded-xl pl-5 hover:bg-green-400', {
                        'bg-green-400': val === 'D'
                    })} onClick={() => activeVal('D')}>
                        {val === 'D' ? (
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className='w-10 h-10 mr-5 bg-slate-100 rounded-full'
                                fill='green'
                                viewBox='0 0 48 48'><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
                        ) : <p className='bg-orange-100 px-3 py-2 mr-5 w-10 h-10 rounded-full'>D</p>}{quizzes[page].d}</button>
                </div>
            </div> 
            <Footer />
            </div>
             
        )

     }
   
}

export default Quiz
