function SearchBar() {
  return (
    <section className="panel">
      <h2 className="subtitle">Search Books</h2>
      <form action="" className="search-form">
        <input type="text" placeholder="Search by title, author or topic..."/>
        <button type="submit">Search</button>
      </form>
    </section>
  )
}

export default SearchBar