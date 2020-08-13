import React, { useState } from "react";
import { selectUnitById, selectAllUnits } from "./areaSlice";
import { scaleChanged, initialiseKeyBoard } from "../../keypad/keypadSlice";
import { useSelector, useDispatch } from "react-redux";
import { ConverterKeypad } from "../../keypad/ConverterKeypad";
import "../converters.css";

export const AreaConverter = () => {
    const value = useSelector(state => state.keypad.value).join("");

    const [isInput1, setIsInput1] = useState("");
    const [scale1, setScale1] = useState("ares");
    const [scale2, setScale2] = useState("ares");
    const [toScale, setToScale] = useState("ares");

    const dispatch = useDispatch();

    const handleToScale1 = () => {
        dispatch(scaleChanged());
        dispatch(initialiseKeyBoard("active"));
        setIsInput1(true);
        setToScale(scale2);
    };

    const handleToScale2 = () => {
        dispatch(scaleChanged());
        dispatch(initialiseKeyBoard("active"));
        setIsInput1(false);
        setToScale(scale1);
    };

    let firstFormula = useSelector(state => selectUnitById(state, scale1)).formulas[toScale];

    let secondFormula = useSelector(state => selectUnitById(state, scale2)).formulas[toScale];

    const submitFormula1 = event => {
        dispatch(scaleChanged());
        dispatch(initialiseKeyBoard("idle"));
        setScale1(event.target.value);
    };

    const submitFormula2 = event => {
        dispatch(scaleChanged());
        dispatch(initialiseKeyBoard("idle"));
        setScale2(event.target.value);
    };

    const tryConvert = (number, operator, constant) => {
        let input = parseFloat(+number);

        if (Number.isNaN(input)) return "";

        return operator === "*" ? number * constant : number / constant;
    };

    const value2 = isInput1 === false ? value : tryConvert(value, firstFormula.operator, firstFormula.constant);

    const value1 = isInput1 === true ? value : tryConvert(value, secondFormula.operator, secondFormula.constant);

    const allUnits = useSelector(selectAllUnits);

    const units = allUnits.map(unit => {
        const { id } = unit;

        return <option value={id} key={id}>{id.replace(id.charAt(0), id.charAt(0).toUpperCase())}</option>;
    });

    const keypadStatus = useSelector(state => state.keypad.keyboardStatus);

    return (

        <main>
            <section className={keypadStatus === "active" && isInput1 === true ? "firstInput selected":"firstInput"}>
                <select onChange={submitFormula1}> {units} </select>

                <textarea
                    type="text"
                    readOnly
                    value={value2 <= 0 ? "" : value1}
                    placeholder={keypadStatus === "active" && isInput1 === true ?
                        `I'm ready! Use the keypad ` :
                        `Click me to Enter Value in ${scale1.replace(scale1.charAt(0), scale1.charAt(0).toUpperCase())}`}

                    onClick={handleToScale1}
                />
            </section>

            <section className={keypadStatus === "active" && isInput1 === false ? "secondInput selected":"secondInput"}>
                <select onChange={submitFormula2}> {units} </select>

                <textarea
                    type="text"
                    readOnly
                    value={value1 <= 0 ? "" : value2}
                    placeholder={keypadStatus === "active" && isInput1 === false?
                        `I'm ready! Use the keypad ` :
                        `Click me to Enter Value in ${scale2.replace(scale2.charAt(0), scale2.charAt(0).toUpperCase())}`}

                    onClick={handleToScale2}
                />
            </section>

            <ConverterKeypad />
        </main>
    );
};