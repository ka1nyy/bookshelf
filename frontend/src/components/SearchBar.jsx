import { useState } from "react"

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!query.trim()) return

    onSearch(query.trim())
    setQuery("")
  }

  return (
    <section className="panel">
      <h2 className="subtitle">Search Books</h2>

      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search by title, author or topic..."
          value = {query}
          onChange = {(event) => setQuery(event.target.value)}
          />

        <button type="submit">Search</button>
      </form>
    </section>
  )
}

export default SearchBar