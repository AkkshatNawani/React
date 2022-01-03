import React from "react";
import ReactDom from "react-dom";
import './index.css'

function BookList() {
  return (
    <section class='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/41SG4SO4T9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt=""
  />
);

const Author = () => <h1>Héctor García</h1>;

const Title = () => <h2>Ikigai</h2>;

ReactDom.render(<BookList />, document.getElementById("root"));
