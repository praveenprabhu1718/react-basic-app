import React from "react";
import ReactDOM from "react-dom/client";
import { books } from "./books";
import Book from "./Book";

import "./index.css";

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="book-list">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index + 1} />;
        })}
      </section>
    </>
  );
};

const App = ReactDOM.createRoot(document.querySelector("#root"));

App.render(<BookList />);
