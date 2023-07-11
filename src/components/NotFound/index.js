// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Header from '../Navbar'

export default function NotFound() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {themeClass} = value

        return (
          <div className="app-container">
            <Header />
            <div className={`page-content-container ${themeClass}`}>
              <div className="inner-content-container not-found">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1>Lost Your Way?</h1>
                <p>We cannot seem to find the page you are looking for.</p>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
