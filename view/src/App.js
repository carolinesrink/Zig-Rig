import React from 'react';
// import {withAuthenticator} from 'aws-amplify-react';
// import Amplify from 'aws-amplify';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
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
// export default withAuthenticator(app);

// withAuthenticator creates the pre-built user Authentication.
// we can create our own UI for it but I want to test if it works 
// before playing with creating our own UI.
