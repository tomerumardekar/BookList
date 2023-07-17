import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book children" />
      <h1>{title}</h1>
      <h4>{author} </h4>
    </article>
  );
};

const books = [
  {
    title: "What should Danny do?",
    author: "Adir Levy , Ganit Levy",
    img: "https://m.media-amazon.com/images/I/71zvriRVHrL._AC_UY218_.jpg",
  },

  {
    title: "Kami Koala Makes A Decision",
    author: "Bobbie Hinman",
    img: "https://m.media-amazon.com/images/I/51OgwcPmGBL._AC_UY218_.jpg",
  },

  {
    title: "Space Explorers: Outer Space Coloring and Activity Book for Kids",
    author: "Y. Y. Riverman ",
    img: "https://m.media-amazon.com/images/I/61i0VwvQA9L._AC_UY218_.jpg",
  },

  {
    title: "Where is Home?",
    author: "Natasha Blazic ",
    img: "https://m.media-amazon.com/images/I/619ERQG7rIL._AC_UY218_.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}{" "}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
