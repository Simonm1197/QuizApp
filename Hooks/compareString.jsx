import React, { useState } from 'react'

const CompareString = () => {
    const [text,setText] = useState(['anitha','sachin','simon','shivanad','swami','akshay'])
    const [searchitem,setSearchItem] = useState('')
    const [value,setValue] = useState('')

    const searchText = (e) => {
        e.preventDefault()
        const val = text.find((x) => {
            if(x === searchitem){
                return searchitem
            }
        })
        {

            val!==undefined ? (setValue('Name is found')) : (setValue('Name is not found'))
        }
    }
    const setItem = (e) => {
        setSearchItem(e.target.value)
    }
  return (
    <>
    <form onSubmit={searchText}>
        <input type="text" value={searchitem} onChange={(e) => setItem(e)} />
        <button type='submit'>Search</button>
        <h1>Name: {value}</h1>
    </form>
    </>
  )
}

export default CompareString