import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResults from "./components/SearchResults"
import Library from "./components/Library"

function App() {
  return (
    <main className="app">
      <Header />
      <SearchBar />
      <SearchResults />
      <Library />
    </main>
  )
}

export default App