import React from "react";

const Book = (props) => {
  const { img, title, author } = props;
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h1>{author}</h1>
      <button type="button">Reference</button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
