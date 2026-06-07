function BookCard({ book }) {
  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Status: {book.status}</p>
    </article>
  )
}

export default BookCard