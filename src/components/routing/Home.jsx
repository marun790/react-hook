import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import Reports from './Reports';


export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Router>
                <div>
                    <ul>
                        {/* <li>
                            <Link to="/">Home</Link>
                        </li> */}
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/reports">Reports</Link>
                        </li>
                    </ul>
                    <hr />

                    {/*
                    A <Switch> looks through all its children <Route>
                    elements and renders the first one whose path
                    matches the current URL. Use a <Switch> any time
                    you have multiple routes, but you want only one
                    of them to render at a time
                    */}

                    <Switch>
                        {/* <Route exact path="/"> <Home /></Route> */}
                        <Route path="/about"> <About /></Route>
                        <Route path="/dashboard"><Dashboard /></Route>
                        <Switch path="/reports"><Reports/></Switch>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}