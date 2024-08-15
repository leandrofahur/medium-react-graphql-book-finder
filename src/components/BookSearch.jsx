import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK_BY_ID } from "../services/queries";

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { searchTerm },
    skip: !searchTerm,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // The query will automatically re-run when searchTerm changes
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for books"
        />
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.allBooks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} ({book.publishedYear})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookSearch;
