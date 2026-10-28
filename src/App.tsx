import { Navigation } from './components/Navigation'
import { ThemeProvider } from './components/ThemeProvider'
import { HomeSection } from './sections/HomeSection'
import { PortfolioSections } from './sections/PortfolioSections'
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
        <PortfolioSections />
      </main>
      <footer className="site-footer">
        <p>Portfolio foundation · More details coming soon</p>
      </footer>
    </ThemeProvider>
  )
}

export default App