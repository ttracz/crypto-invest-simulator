import React from 'react';
import './styles/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/dashboard/Dashboard";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} render={()=><Dashboard/>}/>
            </Switch>
        </Router>
    );
}

export default App;
