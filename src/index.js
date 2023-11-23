import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

const books = [
  {
    author: 'Matthew Perry',
    title: 'Friends, Lovers and the Big Terrible Thing',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Rebecca Yarros',
    title: 'Fourth Wing',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];



function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img}
        alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);