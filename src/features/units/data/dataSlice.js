import {createSlice, createEntityAdapter} from "@reduxjs/toolkit";

const dataAdapter = createEntityAdapter();
const initialState = dataAdapter.getInitialState({
    ids: ["bits", "bytes", "kilobytes", "megabytes", "gigabytes"],
    entities: {
        bits: {
            id: "bits",
            formulas: {
                bits: {operator: "*", constant: 1},
                bytes: {operator: "/", constant: 8},
                kilobytes: {operator: "/", constant: 8192},
                megabytes: {operator: "/", constant: 8388608},
                gigabytes: {operator: "/", constant: 8589934592},
            },
        },
        bytes: {
            id: "bytes",
            formulas: {
                bytes: {operator: "*", constant: 1},
                bits: {operator: "*", constant: 8},
                kilobytes: {operator: "/", constant: 1024},
                megabytes: {operator: "/", constant: 1048576},
                gigabytes: {operator: "/", constant: 1073741824},
            },
        },
        kilobytes: {
            id: "kilobytes",
            formulas: {
                kilobytes: {operator: "*", constant: 1},
                bits: {operator: "*", constant: 8192},
                bytes: {operator: "*", constant: 1024},
                megabytes: {operator: "/", constant: 1024},
                gigabytes: {operator: "/", constant: 1048576},
            },
        },
        megabytes: {
            id: "megabytes",
            formulas: {
                megabytes: {operator: "*", constant: 1},
                bits: {operator: "*", constant: 8388608},
                bytes: {operator: "*", constant: 1048576},
                kilobytes: {operator: "*", constant: 1024},
                gigabytes: {operator: "/", constant: 1024},
            },
        },
        gigabytes: {
            id: "gigabytes",
            formulas: {
                gigabytes: {operator: "*", constant: 1},
                bits: {operator: "*", constant: 8589934592},
                bytes: {operator: "*", constant: 1073741824},
                kilobytes: {operator: "*", constant: 1048576},
                megabytes: {operator: "*", constant: 1024},
            },
        }
    }
});

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {}
});

export default dataSlice.reducer;

export const {
    selectById: selectUnitById,
    selectAll: selectAllUnits
} = dataAdapter.getSelectors(state => state.data);