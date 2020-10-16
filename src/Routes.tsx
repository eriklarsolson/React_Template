import React, { Component } from 'react';
import { Home } from "./components/home"
import { Switch, Route } from 'react-router-dom';
import {PageNotFound} from "./components/page-not-found";

class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </>
        )
    }
}

export default Routes;

