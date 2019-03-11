import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SideMenu from "./components/SideMenu";
import RegisterForm from "./components/RegisterForm/RegisterForm";


function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function AppRouter() {
    return (
        <Router>
            <div className="app-container">
                {/* <SideMenu/> */}
                <Switch>
                    <Route path="/" exact component={Index}/>
                    <Route path="/about/" component={About}/>
                    <Route path="/users/" component={Users}/>
                    <Route path="/register/" component={RegisterForm}/>
                </Switch>
            </div>
        </Router>
    )
}


class App extends Component {
    render() {
        return (
            <div className="App">
                <AppRouter/>
            </div>
        );
    }
}

export default App;
