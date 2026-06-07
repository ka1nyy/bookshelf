function SearchBookCard({ book }) {
  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p className="muted">{book.first_publish_year}</p>
      <button type="button">Add to Library</button>
    </article>
  )
}

export default SearchBookCard