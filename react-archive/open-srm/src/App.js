import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./containers/Home"
function App() {
  return (
        <Router>
        <Switch>
            <Route exact component={Home} path="/"/>
        </Switch>  
        </Router>
  );
}
export default App;
