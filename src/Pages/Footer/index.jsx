import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { QuizContext } from '../../context/quizContext';

function Footer() {
    const { page, handlePage, handler, val, setVal } = useContext(QuizContext)
    const nav = useNavigate()
    console.log(page);
    return (
        <div className=' flex w-full items-center justify-center' >
            {page < 4 && (<div className='flex'>
                <div className='mr-10 flex items-center'>
                    <div className='bg-slate-300 h-3 w-60 rounded-lg'>
                        <div className='bg-green-400 h-3 w-0 rounded-lg' style={{
                            width: (page + 1) * 60
                        }} />
                    </div>
                    <span>{page + 1}/4</span>

                </div>
            </div>
            )
            
            }
            <div>
                <button type='button' className='bg-green-400 text-white w-full px-5 py-2 rounded-md disabled:bg-slate-300 text-white'
                    onClick={() => {
                        page === 3 ?
                        nav('result') :
                        (handlePage(page + 1)); handler();
                        setVal("");
                    }
                    } disabled={!val}>{page === 4 ? 'OKAY' : (page === 3 ? 'FINISH' : 'continue')}</button>
            </div>


        </div>
    )
}

export default Footer
