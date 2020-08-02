import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { books } = useContext(BookContext);
  const list = books.length !== 0
    ?
    <div className="book-list">
      <ul>
        {books.map(book => <BookDetails key={book.id} book={book} />)}
      </ul>
    </div>
    :
    <div className="empty">
      No books to read, hello freetime!
    </div>

  return (
    list
  )
}

export default BookList
