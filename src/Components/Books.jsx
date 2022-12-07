import React, { useState } from 'react'
import data from './BooksData'
const Book = () => {
  const [search,setSearch]=useState('')
  const changeHandler=(e)=>{
      setSearch(e.target.value)
  }
  return (
    <>
    <h3>Books App</h3>

      <input type='text' value={search} onChange={changeHandler} style={{"width":"200px"}} placeholder='search books'/>
      {
        data.filter(book=>book.name.toLowerCase().includes(search.toLowerCase())).map((book)=>{
          return <div>
            <p>{book.id}:- {book.name}</p>
          </div>
        })
      }


    </>
  )
}

export default Book
