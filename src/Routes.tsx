import React, { Component } from 'react';
import { Home } from "./components/home"
import { Switch, Route } from 'react-router-dom';
import {PageNotFound} from "./components/page-not-found";
import {Resources} from "./components/resources";
import {AboutUs} from "./components/about";
import {CircuitBuilding} from "./components/circuilt-building";
import {MetalEngraving} from "./components/metal-engraving";
import {TelescopeActivity} from "./components/telescope-activity";
import {StellarCycle} from "./components/stellar-cycle";
import {RatePage} from "./components/rate";
import ObjectPage from "./components/rate/RatePage";

class Routes extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/circuit-building" component={CircuitBuilding} />
                    <Route path="/metal-engraving" component={MetalEngraving} />
                    <Route path="/telescope-activity" component={TelescopeActivity} />
                    <Route path="/stellar-cycle" component={StellarCycle} />
                    <Route path="/object-page/:title" component={ObjectPage} />
                    <Route path="/rate" component={RatePage} />
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

