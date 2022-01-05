import React from "react";
import ReactDom from "react-dom";

//Files Import
import "./index.css";
import { books } from "./books";
import Book from "./Book";



//Code
function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
}



// Important render code
ReactDom.render(<BookList />, document.getElementById("root"));
