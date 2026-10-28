import { useEffect, useState } from 'react'
import { ThemeContext } from './themeContext'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#241b16' : '#a49587',
    )

    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The selected theme still works for this visit when storage is unavailable.
    }
  }, [theme])

  const value = {
    theme,
    toggleTheme: () => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light'),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}