

import React from 'react'
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './app'
import { QuizProvider } from './context/quizContext';
import '/src/style.scss'

const container = document.getElementById("root");
const root = createRoot(container);



root.render(
    <QuizProvider>
        <App />
    </QuizProvider>

)






