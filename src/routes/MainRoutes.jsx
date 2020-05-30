import React from 'react';
import { Provider } from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import store from "../stores";

import ExplorePage from "../pages/ExplorePage";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage"
import Group from "../pages/GroupPage";

export default function MainRoutes () {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/register'} component={Register}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route exact path={'/guilds-discovery'} component={ExplorePage} />
                    <Route path={'/guilds-discovery/:category'} component={ExplorePage} />
                    <Route path={'/channel/:id'} component={Group} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}