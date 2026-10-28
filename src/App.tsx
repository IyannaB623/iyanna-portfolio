import { Navigation } from './components/Navigation'
import { ThemeProvider } from './components/ThemeProvider'
import { HomeSection } from './sections/HomeSection'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation />
      <main id="main-content" className="page-shell">
        <HomeSection />
      </main>
      <footer className="site-footer">
        <p>Iyanna Blackburn <span aria-hidden="true">·</span> Where data meets creativity.</p>
      </footer>
    </ThemeProvider>
  )
}

export default App