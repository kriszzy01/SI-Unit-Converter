import {configureStore} from "@reduxjs/toolkit";
import areaReducer from "./features/units/area/areaSlice";
import lengthReducer from "./features/units/length/lengthSlice";
import volumeReducer from "./features/units/volume/volumeSlice";
import dataReducer from "./features/units/data/dataSlice";
import massReducer from "./features/units/mass/massSlice";
import keypadReducer from "./features/keypad/keypadSlice";


const reducer = {
    area: areaReducer,
    length: lengthReducer,
    keypad: keypadReducer,
    volume: volumeReducer,
    data: dataReducer,
    mass: massReducer,
};

export const store = configureStore({
    reducer,
})