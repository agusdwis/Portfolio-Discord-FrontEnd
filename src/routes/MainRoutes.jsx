import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import ExplorePage from "../pages/ExplorePage";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage"

export default function MainRoutes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/guild-discovery'} component={ExplorePage} />
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/register'} component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}