import React, { Component } from 'react';
import { Home } from "./components/home"
import { Switch, Route } from 'react-router-dom';
import {PageNotFound} from "./components/page-not-found";
import {Resources} from "./components/resources";
import {AboutUs} from "./components/about";
import {CircuitBuilding} from "./components/circuilt-building";

class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/circuit-building" component={CircuitBuilding} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/" component={Home} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </>
        )
    }
}

export default Routes;

