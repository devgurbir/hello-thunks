import React from 'react'
import {Register} from '../Pages/Register'
import {Login} from '../Pages/Login'
import {Dashboard} from '../Pages/Dashboard'
import {Switch, Route} from 'react-router-dom'
import GithubUser from '../Pages/GithubUser'

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/github/:login">
                <GithubUser />
            </Route>
            <Route>
                <div>
                    Nothing defined
                </div>
            </Route>
        </Switch>
    )
}

export default AllRoutes