import React from "react";
import {SingleButton} from "./SingleButton";
import "./ConverterKeypad.css";
import {keypadClicked} from "./keypadSlice";
import {useDispatch} from "react-redux";

export const ConverterKeypad = () => {
    const dispatch = useDispatch();

    const handleButtonClicked = keyName => {
        dispatch(keypadClicked(keyName))
    };

    const keyCollection = [7, 8, 9, "<=", 4, 5, 6, "C", 1, 2, 3, "", "", 0, "."];

    const renderedNumbers = keyCollection
        .map((key, index) => {
        return <SingleButton key={`${key}${index}`} keyName={key} handleButtonClicked={handleButtonClicked}/>
    });

    return(
        <section className="keypad">
            {renderedNumbers}
        </section>
    );
};