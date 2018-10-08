import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { config } from './config';
import UserInfo from './UserProfile/UserInfo';

const App = () => (
    <Router>
       <Switch>
           <Route exact path='/' render={() => <Redirect to={'/' + config.defaultUserLogin}/>}/>
           <Route exact path="/:userLogin" render={({match}) => <UserInfo userLogin={match.params.userLogin}/>}/>
       </Switch>
    </Router>
);

export default App;
