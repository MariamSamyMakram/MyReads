import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import Shelf from "./Shelf";

const ListBook = () => {
  const [books, setBooks] = useState([]);
  /**
   * @description fetch all books and set all books to state of books
   */
  const fetchBooks = () => {
    getAll().then((data) => {
      setBooks(data);
    });
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            books={books}
            fetchBooks={fetchBooks}
            Shelf={"currentlyReading"}
            title={"Currently Reading"}
          />
          <Shelf
            books={books}
            fetchBooks={fetchBooks}
            Shelf={"wantToRead"}
            title={"Want To Read"}
          />
          <Shelf
            books={books}
            fetchBooks={fetchBooks}
            Shelf={"read"}
            title={"Read"}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default ListBook;
