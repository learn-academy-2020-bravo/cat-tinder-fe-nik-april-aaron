import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import CatIndex from './pages/CatIndex'

const App = () => {
    return(
      <React.Fragment>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={ CatIndex } />
          </Switch>
        </Router>
      </React.Fragment>
    )
}
export default App
