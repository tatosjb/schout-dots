import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Ranking from './components/Ranking/index';

const App = (props) => (
  <Router>
    <div>
      <Route exact path='/' component={Ranking} />
    </div>
  </Router>
)

export default App;