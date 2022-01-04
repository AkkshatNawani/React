import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const firstBook = {
  author: "Héctor García",
  title : "Ikigai",
  img:'https://images-na.ssl-images-amazon.com/images/I/41SG4SO4T9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
}

const secondBook = {
  author: "Morgan Housel",
  title: "The Psychology of Money",
  img: "https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
};
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
      <h1>{props.author}</h1>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
