import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quiz from './Pages/Quiz'
import ResultPage from './Pages/Result'
import Result from './Pages/Result'
import Start from './Pages/Start'
import QuizApp from './quizApp'

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Start />
        },
          {
            path:'quiz',
            element: <QuizApp />,
            children: [
                {
                    index: true,
                    element: <Quiz />
                },
                {
                    path: 'result',
                    element: <ResultPage />

                }
            ]
          }
    ])
  return (
    <RouterProvider router = {router} />

     
  )
}

export default App