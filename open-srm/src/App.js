import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./containers/Home"
function App() {
  return (
    <div>
        <Router>
            <div>
        <Switch>
            <Route exact component={Home} path="/"/>
        </Switch>
            </div>
        </Router>
    </div>
  );
}
export default App;
