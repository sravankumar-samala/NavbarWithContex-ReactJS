// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

export default function Navbar() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const navbarThemeClass = isDarkTheme ? 'navbar-dark' : 'navbar-light'
        const logoImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        const themeToggleImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

        return (
          <nav className={`navbar ${navbarThemeClass}`}>
            <div className="logo-img-container">
              <img src={logoImageUrl} alt="website logo" />
            </div>
            <ul className="nav-list">
              <Link to="/" className="nav-link-item">
                <li>Home</li>
              </Link>
              <Link to="/about" className="nav-link-item">
                <li>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-btn"
              data-testid="theme"
              onClick={toggleTheme}
            >
              <img src={themeToggleImageUrl} alt="theme" />
            </button>
          </nav>
        )
      }}
    </ThemeContext.Consumer>
  )
}
