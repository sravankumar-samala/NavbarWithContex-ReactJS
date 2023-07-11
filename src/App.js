import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import ThemeContext from './context/ThemeContext'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme, themeClass} = this.state
    console.log(themeClass, isDarkTheme)

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.onChangeTheme,
          themeClass: isDarkTheme ? 'theme-dark' : 'theme-light',
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
