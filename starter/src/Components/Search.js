import { Link } from "react-router-dom";
import { useState } from "react";
import { search } from "../BooksAPI";
import Book from "./Book";
const Search = () => {
  const [books, setBooks] = useState([]);
  /**
   * @description Handle submit search form by loading books with query.
   * @param {*} e 
   */
  const handleLoadBooks = (e) => {
    if (e.target.value) {
      search(e.target.value, 10).then((data) => {
        setBooks(data && !data.error ? data : []);
      });
    }else{
      setBooks([])
    }
  };
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
            onChange={handleLoadBooks}
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
