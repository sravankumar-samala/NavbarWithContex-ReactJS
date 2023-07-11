// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Header from '../Navbar'

export default function About() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, themeClass} = value
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

        return (
          <div className="app-container">
            <Header />
            <div className={`page-content-container ${themeClass}`}>
              <div className="inner-content-container">
                <img src={imageUrl} alt="about" />
                <h1>About</h1>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
