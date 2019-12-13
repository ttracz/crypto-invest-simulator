import React from 'react';
import './styles/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/dashboard/Dashboard";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}
                       render={() => (sessionStorage.getItem('loggedIn') !== null && sessionStorage.getItem('loggedIn') !== undefined) ?
                           <Dashboard/> : <Redirect to={'/login'}/>
                       }/>
                <Route exact path={'/register'} render={() => <Register/>}/>
                <Route exact path={'/login'} render={() => <Login/>}/>
            </Switch>
        </Router>
    );
}

export default App;
