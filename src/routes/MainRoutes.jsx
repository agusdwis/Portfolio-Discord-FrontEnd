import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "../pages/HomePage";
import GuildDiscovery from "../pages/GuildDiscovery";

export default function MainRoutes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/guild-discovery'} component={GuildDiscovery} />
            </Switch>
        </BrowserRouter>
    )
}