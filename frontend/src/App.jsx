function App() {
  return (
    <main className="app">
      
      <section className="hero">
        <p className="eyebrow">Mini Library</p>
        <h1 className="title">BookShelf</h1>
        <p className="hero-text">
          Search books and build your personal reading library.
        </p>
      </section>

      <section className="panel">
        <h2 className="subtitle">Search Books</h2>
        <form action="" className="search-form">
          <input type="text" placeholder="Search by title, author or topic..."/>
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="panel">
        <h2 className="subtitle">Search Results</h2>
        <p className="muted">Saved books will appear here.</p>
      </section>

    </main>
  )
}

export default App