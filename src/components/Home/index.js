// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Header from '../Navbar'

export default function Home() {
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, themeClass} = value
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

        return (
          <div className="app-container">
            <Header />
            <div className={`page-content-container ${themeClass}`}>
              <div className="inner-content-container">
                <img src={imageUrl} alt="home" />
                <h1>Home</h1>
              </div>
            </div>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
