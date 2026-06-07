import SearchBookCard from "./SearchBookCard"

function SearchResults({ books }) {
  return (
    <section className="panel">
      <h2>Search Results</h2>

      {books.length === 0 ? (
        <p className="muted">Search results will appear here.</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <SearchBookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  )
}

export default SearchResults