import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const areaAdapter = createEntityAdapter();
const initialState = areaAdapter.getInitialState({
    ids: ["ares", "hectares", "acres", "square centimeters", "square feet", "square inches", "square metres"],
    entities: {
        ares: {
            id: "ares",
            formulas: {
                ares: {operator: "*", constant: 1},
                acres: {operator: "/", constant: 40.468564},
                hectares: {operator: "/", constant: 100},
                "square centimeters": {operator: "*", constant: 1000000},
                "square feet": {operator: "*", constant: 1076.391041671},
                "square inches": {operator: "*", constant: 155000.31000062},
                "square metres": {operator: "*", constant: 100}
            },
        },
        hectares: {
            id: "hectares",
            formulas: {
                hectares: {operator: "*", constant: 1},
                ares: {operator: "*", constant: 100},
                acres:{operator: "*", constant: 2.4710538283},
                "square centimeters": {operator: "*", constant: 100000000},
                "square feet": {operator: "*", constant: 107639.10416709},
                "square inches": {operator: "*", constant: 15500031.000062},
                "square metres": {operator: "*", constant: 10000},
            },
        },
        acres: {
            id: "acres",
            formulas: {
                acres: {operator: "*", constant: 1},
                ares: {operator: "*", constant: 40.468564},
                hectares: {operator: "/", constant: 2.4710538283},
                "square centimeters": {operator: "*", constant: 40468564},
                "square feet": {operator: "*", constant: 43559.999758888},
                "square inches": {operator: "*", constant: 6272639.9652799},
                "square metres": {operator: "*", constant: 4046.8564},
            },
        },
        "square centimeters": {
            id: "square centimeters",
            formulas: {
                "square centimeters": {operator: "*", constant: 1},
                acres: {operator: "/", constant: 40468564},
                hectares: {operator: "/", constant: 100000000},
                ares: {operator: "/", constant: 1000000},
                "square feet": {operator: "/", constant: 929.0304},
                "square inches": {operator: "/", constant: 6.4516},
                "square metres": {operator: "/", constant: 10000},
            },
        },
        "square feet": {
            id: "square feet",
            formulas: {
                "square feet": {operator: "*", constant: 1},
                acres: {operator: "/", constant: 43559.999758888},
                hectares: {operator: "/", constant: 107639.10416709},
                ares: {operator: "/", constant: 1076.391041671},
                "square centimeters": {operator: "*", constant: 929.0304},
                "square inches":{operator: "*", constant: 144},
                "square metres": {operator: "/", constant: 10.7639104167},
            },
        },
        "square inches": {
            id: "square inches",
            formulas: {
                "square inches": {operator: "*", constant: 1},
                acres: {operator: "/", constant: 6272639.9652799},
                hectares: {operator: "/", constant: 15500031.000062},
                ares: {operator: "/", constant: 155000.31000062},
                "square centimeters": {operator: "*", constant: 6.4516},
                "square feet": {operator: "/", constant: 144},
                "square metres":{operator: "/", constant: 1550.0031000062},
            },
        },
        "square metres": {
            id: "square metres",
            formulas: {
                "square metres": {operator: "*", constant: 1},
                acres: {operator: "/", constant: 4046.8564},
                hectares: {operator: "/", constant: 10000},
                ares: {operator: "/", constant: 100},
                "square centimeters": {operator: "*", constant: 10000},
                "square inches": {operator: "*", constant: 1550.0031000062},
                "square feet": {operator: "*", constant: 10.7639104167},
            },
        },
    }
});

export const areaSlice = createSlice({
    name: "area",
    initialState,
    reducers: {}
});

export default areaSlice.reducer;

export const {
    selectById: selectUnitById,
    selectAll: selectAllUnits
} = areaAdapter.getSelectors(state => state.area);