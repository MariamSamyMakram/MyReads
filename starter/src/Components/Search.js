import { Link } from "react-router-dom";
import { useState } from "react";
import { search } from "../BooksAPI";
import Book from "./Book";
const Search = () => {
  const [books, setBooks] = useState([]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              search(e.target.value, 10).then((data) => {
                setBooks(!data.error ? data : []);
              });
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <li key={book.id}>
                <Book book={book} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default Search;
