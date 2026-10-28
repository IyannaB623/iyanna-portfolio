import { useTheme } from './themeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === 'light' ? (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20.1 15.4A8.4 8.4 0 0 1 8.6 3.9 8.4 8.4 0 1 0 20.1 15.4Z" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      )}
      <span className="visually-hidden">{nextTheme} theme</span>
    </button>
  )
}