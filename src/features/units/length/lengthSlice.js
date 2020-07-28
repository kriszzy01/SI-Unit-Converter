import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const lengthAdapter = createEntityAdapter();
const initialState = lengthAdapter.getInitialState({
    ids: ["millimetres", "centimetres", "metres", "kilometres", "inches", "feet", "yards"],
    entities: {
        millimetres: {
            id: "millimetres",
            formulas: {
                millimetres: {operator: "*", constant: 1},
                centimetres: {operator: "/", constant: 10},
                metres: {operator: "/", constant: 1000},
                kilometres: {operator: "/", constant: 1000000},
                feet: {operator: "/", constant: 304.8},
                inches: {operator: "/", constant: 25.4},
                yards: {operator: "/", constant: 914.4}
            },
        },
        centimetres: {
            id: "centimetres",
            formulas: {
                centimetres: {operator: "*", constant: 1},
                millimetres: {operator: "*", constant: 10},
                metres: {operator: "/", constant: 100},
                kilometres: {operator: "/", constant: 100000},
                feet: {operator: "/", constant: 30.48},
                inches: {operator: "/", constant: 2.54},
                yards: {operator: "/", constant: 91.44}
            },
        },
        metres: {
            id: "metres",
            formulas: {
                metres: {operator: "*", constant: 1},
                centimetres: {operator: "*", constant: 100},
                millimetres: {operator: "*", constant: 1000},
                kilometres: {operator: "/", constant: 1000},
                feet: {operator: "*", constant: 3.280839895},
                inches: {operator: "*", constant: 39.3700787402},
                yards: {operator: "*", constant: 1.0936132983}
            },
        },
        kilometres: {
            id: "kilometres",
            formulas: {
                kilometres: {operator: "*", constant: 1},
                centimetres: {operator: "*", constant: 100000},
                metres: {operator: "*", constant: 1000},
                millimetres: {operator: "*", constant: 1000000},
                feet: {operator: "*", constant: 3280.8398950131},
                inches: {operator: "*", constant: 39370.078740157},
                yards: {operator: "*", constant: 1093.6132983377}
            },
        },
        feet: {
            id: "feet",
            formulas: {
                feet: {operator: "*", constant: 1},
                centimetres: {operator: "*", constant: 30.48},
                metres: {operator: "/", constant: 3.280839895},
                kilometres: {operator: "/", constant: 3280.8398950131},
                millimetres: {operator: "*", constant: 304.8},
                inches: {operator: "*", constant: 12},
                yards: {operator: "/", constant: 3}
            },
        },
        inches: {
            id: "inches",
            formulas: {
                inches: {operator: "*", constant: 1},
                centimetres: {operator: "*", constant: 2.54},
                metres: {operator: "/", constant: 39.3700787402},
                kilometres: {operator: "/", constant: 39370.078740157},
                feet: {operator: "/", constant: 12},
                millimetres: {operator: "*", constant: 25.4},
                yards: {operator: "/", constant: 36}
            },
        },
        yards: {
            id: "yards",
            formulas: {
                yards: {operator: "*", constant: 1},
                centimetres: {operator: "*", constant: 91.44},
                metres: {operator: "*/", constant: 1.0936132983},
                kilometres: {operator: "/", constant: 1093.6132983377},
                feet: {operator: "*", constant: 3},
                inches: {operator: "*", constant: 36},
                millimetres: {operator: "*", constant: 914.4}
            },
        },
    }
});

export const lengthSlice = createSlice({
    name: "length",
    initialState,
    reducers: {}
});

export default lengthSlice.reducer;

export const {
    selectById: selectUnitById,
    selectAll: selectAllUnits
} = lengthAdapter.getSelectors(state => state.length);