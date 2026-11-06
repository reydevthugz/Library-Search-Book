import { useState } from 'react'
import greatGatsbyCover from './assets/great-gatsby.png'
import book1984Cover from './assets/1984.png'
import './App.css'

interface Book {
  id: number
  title: string
  author: string
  status: 'Available' | 'Borrowed'
  cover?: string
}
function App() {
  const [search, setSearch] = useState('')

  const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    status: 'Available',
    cover: greatGatsbyCover,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    status: 'Borrowed',
    cover: book1984Cover,
  },
]

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="library-container">
      <div className="library-card">

        <header className="library-header">
          <span className="library-label">LIBRARY CATALOG</span>
          <h1>Find a Book</h1>
          <p>Discover books and check their availability.</p>
        </header>

        <div className="search-container">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search by book title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search books by title or author"
          />
          {search && (
            <button
              className="clear-button"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="results-header">
          <h2>Library Books</h2>
          <span>{filteredBooks.length} books found</span>
        </div>

        <section className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <article className="book-item" key={book.id}>
                <div className="book-cover">
                  {book.cover ? (
                    <img src={book.cover} alt={`${book.title} book cover`} />
                   ) : (
                     <span>📖</span>
                  )}
                </div>

                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p>By {book.author}</p>
                </div>

                <span
                  className={`status ${
                    book.status === 'Available'
                      ? 'available'
                      : 'borrowed'
                  }`}
                >
                  <span className="status-dot"></span>
                  {book.status}
                </span>
              </article>
            ))
          ) : (
            <div className="no-results">
              <span>🔎</span>
              <h3>No books found</h3>
              <p>Try searching for another book title or author.</p>
            </div>
          )}
        </section>

        <footer className="library-footer">
          <span>Library Book Search</span>
          <span>Lesson 12 • Activity 11</span>
        </footer>

      </div>
    </main>
  )
}

export default App
