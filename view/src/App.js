import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BasicGen from "./pages/BasicGen";

const App = () => (

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={BasicGen} />
      </Switch>
    </div>
  </Router>

);

export default App;
