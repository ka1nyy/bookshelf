import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Library from "./components/Library"

function App() {
  function handleSearch(query) {
    console.log("Search query:", query)
  }

  return (
    <main className="app">
      <Header />
      <SearchBar onSearch={handleSearch}/>
      <SearchResults />
      <Library />
    </main>
  )
}

export default App