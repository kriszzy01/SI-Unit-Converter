import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const massAdapter = createEntityAdapter();
const initialState = massAdapter.getInitialState({
    ids: ["tons", "pounds", "ounces", "kilogrammes", "grams"],
    entities: {
        tons: {
            id: "tons",
            formulas: {
                tons: {operator: "*", constant: 1},
                pounds: {operator: "*", constant: 2204.6225732452},
                ounces: {operator: "*", constant: 35273.960860859},
                kilogrammes: {operator: "*", constant: 1000},
                grams: {operator: "*", constant: 1000000},
            },
        },
        pounds: {
            id: "pounds",
            formulas: {
                pounds: {operator: "*", constant: 1},
                tons: {operator: "/", constant: 2204.6225732452},
                ounces: {operator: "*", constant: 15.9999998589},
                kilogrammes: {operator: "/", constant: 2.2046225732},
                grams: {operator: "*", constant: 453.59238},
            },
        },
        ounces: {
            id: "ounces",
            formulas: {
                ounces: {operator: "*", constant: 1},
                tons: {operator: "/", constant: 35273.960860859},
                pounds: {operator: "/", constant: 15.9999998589},
                kilogrammes: {operator: "/", constant: 35.2739608609},
                grams: {operator: "*", constant: 28.349524},
            },
        },
        kilogrammes: {
            id: "kilogrammes",
            formulas: {
                kilogrammes: {operator: "*", constant: 1},
                tons: {operator: "/", constant: 1000},
                pounds: {operator: "*", constant: 2.2046225732},
                ounces: {operator: "*", constant: 35.2739608609},
                grams: {operator: "*", constant: 1000},
            },
        },
        grams: {
            id: "grams",
            formulas: {
                grams: {operator: "*", constant: 1},
                tons: {operator: "/", constant: 1000000},
                pounds: {operator: "/", constant: 453.59238},
                ounces: {operator: "/", constant: 28.349524},
                kilogrammes: {operator: "/", constant: 1000},
            },
        },
    }
});

export const massSlice = createSlice({
    name: "mass",
    initialState,
    reducers: {}
});

export default massSlice.reducer;

export const {
    selectById: selectUnitById,
    selectAll: selectAllUnits
} = massAdapter.getSelectors(state => state.mass);