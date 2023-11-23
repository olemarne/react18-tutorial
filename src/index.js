import React from "react";
import ReactDOM from "react-dom/client";

import Book from './Book';
import { books } from './books';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);