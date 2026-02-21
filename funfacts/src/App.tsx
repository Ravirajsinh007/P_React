import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random'

  const [count, setCount] = useState(0)
  const [fact, setFact] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        setFact(typeof data === 'object' && data !== null && 'text' in data ? String((data as any).text) : JSON.stringify(data))
      })
      .catch((err) => {
        if (!mounted) return
        setError(String(err?.message ?? err))
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  const displayedFact = fact ? fact.toUpperCase() : null

  return (
    <div className="app-root">
      <main className="fact-card">
        <h2 className="fact-title">Random Fact</h2>

        {loading && <p className="muted">Loading...</p>}
        {error && <p className="error">Error: {error}</p>}

        {displayedFact && (
          <blockquote className="fact-text">{displayedFact}</blockquote>
        )}

        {!loading && !displayedFact && !error && (
          <p className="muted">No data yet.</p>
        )}
      </main>

      <aside className="counter-card">
        <h3 className="counter-title">Counter</h3>
        <div className="counter-row">
          <button className="btn" onClick={() => setCount((c) => c - 1)}>-</button>
          <div className="count-value">{count}</div>
          <button className="btn" onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </aside>
    </div>
  )
}

export default App
