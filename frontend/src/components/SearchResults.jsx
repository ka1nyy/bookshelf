import SearchBookCard from "./SearchBookCard"

function SearchResults({ books, loading, error }) {
  return (
    <section className="panel">
      <h2>Search Results</h2>

      {loading && <p className="muted">Loading books...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && books.length === 0 & (
        <p className="muted">Search results will appear here.</p>
      )}

      {!loading && !error && books.length > 0 && (
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