import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const volumeAdapter = createEntityAdapter();
const initialState = volumeAdapter.getInitialState({
    ids: ["gallons(UK)", "gallons(US)", "litres", "millilitres", "cubic centimetres", "cubic metres", "cubic inches"],
    entities: {
        "gallons(UK)": {
            id: "gallons(UK)",
            formulas: {
                "gallons(UK)": {operator: "*", constant: 1},
                "gallons(US)": {operator: "*", constant: 1.2009499255},
                "litres": {operator: "*", constant: 4.54609},
                "millilitres": {operator: "*", constant: 4546.09},
                "cubic centimetres": {operator: "*", constant: 4546.09},
                "cubic metres": {operator: "/", constant: 219.9692482991},
                "cubic inches": {operator: "*", constant: 277.4194327916}
            },
        },
        "gallons(US)": {
            id: "gallons(US)",
            formulas: {
                "gallons(US)": {operator: "*", constant: 1},
                "gallons(UK)": {operator: "/", constant: 1.2009499255},
                "litres": {operator: "*", constant: 3785.411784},
                "millilitres": {operator: "*", constant: 3.785411784},
                "cubic centimetres": {operator: "*", constant: 3785.411784},
                "cubic metres": {operator: "/", constant: 264.1720523581},
                "cubic inches": {operator: "*", constant: 231}
            },
        },
        "litres": {
            id: "litres",
            formulas: {
                "litres": {operator: "*", constant: 1},
                "gallons(US)": {operator: "/", constant: 3.785411784},
                "gallons(UK)": {operator: "/", constant: 4.54609},
                "millilitres": {operator: "*", constant: 1000},
                "cubic centimetres": {operator: "*", constant: 1000},
                "cubic metres": {operator: "/", constant: 1000},
                "cubic inches": {operator: "*", constant: 61.0237440947}
            },
        },
        "millilitres": {
            id: "millilitres",
            formulas: {
                "millilitres": {operator: "*", constant: 1},
                "gallons(UK)": {operator: "/", constant: 4546.09},
                "litres": {operator: "/", constant: 1000},
                "gallons(US)": {operator: "/", constant: 3785.411784},
                "cubic centimetres": {operator: "*", constant: 1},
                "cubic metres": {operator: "/", constant: 1000000},
                "cubic inches": {operator: "*", constant: 16.387064}
            },
        },
        "cubic centimetres": {
            id: "cubic centimetres",
            formulas: {
                "cubic centimetres": {operator: "*", constant: 1},
                "gallons(UK)": {operator: "/", constant: 4546.09},
                "litres": {operator: "/", constant: 1000},
                "gallons(US)": {operator: "/", constant: 3785.411784},
                "millilitres": {operator: "*", constant: 1},
                "cubic metres": {operator: "/", constant: 1000000},
                "cubic inches": {operator: "/", constant: 16.387064}
            },
        },
        "cubic metres": {
            id: "cubic metres",
            formulas: {
                "cubic metres": {operator: "*", constant: 1},
                "gallons(UK)": {operator: "*", constant: 219.9692482991},
                "litres": {operator: "*", constant: 1000},
                "gallons(US)": {operator: "*", constant: 264.1720523581},
                "millilitres": {operator: "*", constant: 1000000},
                "cubic centimetres": {operator: "*", constant: 1000000},
                "cubic inches": {operator: "*", constant: 61023.744094732}
            },
        },
        "cubic inches": {
            id: "cubic inches",
            formulas: {
                "cubic inches": {operator: "*", constant: 1},
                "gallons(UK)": {operator: "/", constant: 277.4194327916},
                "litres": {operator: "/", constant: 61.0237440947},
                "gallons(US)": {operator: "/", constant: 231},
                "millilitres": {operator: "/", constant: 16.387064},
                "cubic centimetres": {operator: "*", constant: 16.387064},
                "cubic metres": {operator: "/", constant: 61023.744094732}
            },
        },
    }
});

export const volumeSlice = createSlice({
    name: "volume",
    initialState,
    reducers: {}
});

export default volumeSlice.reducer;

export const {
    selectById: selectUnitById,
    selectAll: selectAllUnits
} = volumeAdapter.getSelectors(state => state.volume);