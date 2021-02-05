// import { render } from '@testing-library/react';
import React from 'react'
import {Route, Switch,Redirect, BrowserRouter  as Router} from 'react-router-dom';
import Clubs from '../clubs/Clubs';
import Error from '../common/Error';
import Dashboard from '../dashboard/Dashboard';
import Login from '../login/Login';
//  import ProtectedRoute from './ProtectedRoute';
export default class AppRouter extends React.Component{
render(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/clubs" component={Clubs}/>
                    <Route exact path="/error" component={Error}/>                                  
                </Switch>
            </Router>
        </div>
    )
}
}