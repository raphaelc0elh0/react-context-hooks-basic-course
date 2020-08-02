import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [book, setBook] = useState({ title: '', author: '' })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book });
    setBook({ title: '', author: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book title..." id="title" required
        value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
      <input type="text" placeholder="Book author..." id="author" required
        value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default BookForm
