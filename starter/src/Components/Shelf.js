import Book from "./Book";

const Shelf = (props) => {
  /* recieve data as props in books */
  const books = props.books;
  /**
   * @description filter shelf book equal props book
   * @param {*} book 
   * @returns boolen(true or false)
   */
  const filter = (book) => {
    return book.shelf == props.Shelf;
  };

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title"> {props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.filter(filter).map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} fetchBooks={props.fetchBooks} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Shelf;
