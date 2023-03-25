import React, { createContext, useCallback, useMemo, useState } from 'react'

export const QuizContext = createContext();

export function QuizProvider(props) {
    const [val, setVal] = useState('')
    const [page, setPage] = useState(0)
    const [ans, setAns] = useState(0)
    const resultarray = ["A", "A", "C", "B"]

    const quizzes = [
        {
            question: "What do you call a computer on a network that requests files from another computer?",
            a: "client",
            b: "host",
            c: "router",
            d: "web server",
            correct: "a",
        },
        {
            question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
            a: "Peripheral",
            b: "Clip art",
            c: "Highlight",
            d: "Execute",
            correct: "a"
        },
        {
            question: "www stands for:",
            a: "World Wide Wait",
            b: "World Wide Wares",
            c: "World Wide Web",
            d: "World Wide War",
            correct: "c"
        },
        {
            question: "Another name for a computer chip is:",
            a: "Execute",
            b: "Micro chip",
            c: "Microprocessor",
            d: "Select",
            correct: "b"
        }
    ]


    const activeVal = useCallback(
        (val) => {
            setVal(val)
            // console.log(val);
        },
        [],
    )


    const handlePage = useCallback(
        (v) => {
            if (v <= 3) {
                setPage(v++)
            }
            
        },
        [setPage],
    )



    const handler = () => {

        if (val === resultarray[page]) {
            setAns(ans + 30)
        }
       
        
    }

    const value = useMemo(() => ({
        quizzes,
        val,
        page,
        ans,
        setPage,
        activeVal,
        handlePage,
        setAns,
        handler,
        setVal
    }
    ), [quizzes, val, page, ans, setPage, handler, setVal])
    return (
        <QuizContext.Provider value={value}>
            {props.children}
        </QuizContext.Provider>
    )
}
