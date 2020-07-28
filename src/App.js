import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AreaConverter } from "./features/units/area/AreaConverter";
import {LengthConverter} from "./features/units/length/LengthConverter";
import {VolumeConverter} from "./features/units/volume/VolumeConverter";
import {DataConverter} from "./features/units/data/DataConverter";
import {MassConverter} from "./features/units/mass/MassConverter";
import {ConverterHeader} from "./features/ConverterHeader";

export const App = () => {

    return (
        <Router>
            <ConverterHeader/>
            <Switch>
                <Route exact path="/"><AreaConverter/></Route>
                <Route path="/length"><LengthConverter/></Route>
                <Route path="/volume"><VolumeConverter/></Route>
                <Route path="/data"><DataConverter/></Route>
                <Route path="/mass"><MassConverter/></Route>
            </Switch>
        </Router>
    );
};