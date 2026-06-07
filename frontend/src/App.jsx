import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Library from "./components/Library"

import { useState } from "react"

const mockBooks = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    first_publish_year: 2008,
  },
  {
    id: 2,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    first_publish_year: 2008,
  },
  {
    id: 3,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    first_publish_year: 1990,
  },
];

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleSearch(query) {
    setLoading(true)
    setError("")

    setTimeout(() => {
      console.log("Search query:", query)
      setBooks(mockBooks)
      setLoading(false)
    }, 500);
  }

  return (
    <main className="app">
      <Header />
      <SearchBar onSearch={handleSearch}/>
      <SearchResults books={books} loading={loading} error={error} />
      <Library />
    </main>
  )
}

export default App