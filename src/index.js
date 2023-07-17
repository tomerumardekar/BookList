import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Book = (props) => {
  const { img, title, author } = props;
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
    id: 1,
    title: "What should Danny do?",
    author: "Adir Levy , Ganit Levy",
    img: "https://m.media-amazon.com/images/I/71zvriRVHrL._AC_UY218_.jpg",
  },

  {
    id: 2,
    title: "Kami Koala Makes A Decision",
    author: "Bobbie Hinman",
    img: "https://m.media-amazon.com/images/I/51OgwcPmGBL._AC_UY218_.jpg",
  },

  {
    id: 3,
    title: "Space Explorers: Outer Space Coloring and Activity Book for Kids",
    author: "Y. Y. Riverman ",
    img: "https://m.media-amazon.com/images/I/61i0VwvQA9L._AC_UY218_.jpg",
  },

  {
    id: 4,
    title: "Where is Home?",
    author: "Natasha Blazic ",
    img: "https://m.media-amazon.com/images/I/619ERQG7rIL._AC_UY218_.jpg",
  },
  {
    id: 5,
    title: "The Big Book of Silly Jokes for Kids",
    author: "Natasha Blazic ",
    img: "https://m.media-amazon.com/images/I/81AgoOPzO6L._AC_UL400_.jpg",
  },
  {
    id: 6,
    title: "Taylor Swift: A Little Golden Book Biography",
    author: "Little Golden Book ",
    img: "https://m.media-amazon.com/images/I/81X1plzH9DL._AC_UL400_.jpg",
  },
  {
    id: 7,
    title: "The Big Money Squeeze: Adventures in Fourth Grade Money Making",
    author: "Rymer Strauss ",
    img: "https://m.media-amazon.com/images/I/81ZSYSsVbTL._AC_UL400_.jpg",
  },
  {
    id: 8,
    title: "How to Catch a Mermaid",
    author: "How to Catch ",
    img: "https://m.media-amazon.com/images/I/81jxiT9FNOL._AC_UL400_.jpg",
  },
  {
    id: 9,
    title: "Wiggly the Worm: Fun Short Stories for Kids ",
    author: "Early Bird Reader",
    img: "https://m.media-amazon.com/images/I/81OOJ9ds3-L._AC_UL400_.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}{" "}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
