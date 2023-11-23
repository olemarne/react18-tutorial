import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/81tdvyI0MeL._AC_UL600_SR600,400_.jpg"
  alt="Matthew Perry Book" />
const Title = () => {
  return <h2>Friends, Lovers and the Big Terrible Thing</h2>;
};
const Author = () => <h4>Matthew Perry</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />);