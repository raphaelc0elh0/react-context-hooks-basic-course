import React, { createContext, useState } from 'react'

export const BookContext = createContext();


const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { id: 1, title: 'stupid idiot' },
    { id: 2, title: 'stupid morom' },
    { id: 3, title: 'stupid shit' }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
