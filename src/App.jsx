import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <Switch>
      <Route path='/pizza'>
        <Pizza />
      </Route>
      
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  )
};
export default App;
