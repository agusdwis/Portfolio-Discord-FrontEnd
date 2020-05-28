import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import ExplorePage from "../pages/ExplorePage";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage"
import Group from "../pages/GroupPage";
import {Provider} from "react-redux";
import store from "../stores";

export default function MainRoutes () {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/guilds-discovery'} component={ExplorePage} />
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/register'} component={Register}/>
                    <Route path={'/channel/:id'} component={Group} />
                    <Route path={'/guilds-discovery/:category'} component={ExplorePage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}