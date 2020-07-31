import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: [],
    keyboardStatus: "idle"
};

const keypadSlice = createSlice({
    name: "keypad",
    initialState,
    reducers: {
        keypadClicked: {
            reducer(state, action) {
                const {keyValue} = action.payload;
                if (state.keyboardStatus === "idle") {
                    return
                }
                if (keyValue === "") {
                    return;
                } else if (keyValue === "<=") {
                    state.value.pop();
                } else if (keyValue === "C") {
                    state.value.length = 0;
                } else if (keyValue !== "C" && keyValue !== "<=") {
                    state.value.push(keyValue);
                }
            },
            prepare(keyValue) {
                return {
                    payload: {
                        keyValue
                    }
                }
            }
        },
        scaleChanged: {
            reducer(state) {

                state.value=[];
            }
        },
        initialiseKeyBoard: {
            reducer(state, action) {
                state.keyboardStatus = action.payload;
            },
            prepare(status) {
                return {
                    payload: status
                }
            }
        }
    }
})

export default keypadSlice.reducer;

export const {keypadClicked, scaleChanged, initialiseKeyBoard} = keypadSlice.actions;