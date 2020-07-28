import React, { useState } from "react";
import "./SingleButton.css";

export const SingleButton = ({keyName, handleButtonClicked}) => {
    const [clicked, setClicked] = useState(false);
    
    return(
        <button 
            type="button"
            className={
                keyName === "" ? "notButton": 
                typeof keyName !== "number" && clicked === false && keyName !== "." ? "keypadButton nonNumber":
                typeof keyName !== "number" && clicked === true ? "keypadButton clicked nonNumber":
                clicked === true ? "keypadButton clicked": 
                clicked === false ? "keypadButton":
                "keypadButton"
            }
            onClick={() => {
                handleButtonClicked(keyName);
            }}
            onPointerDown={() => setClicked(true)}
            onPointerUp={() => setClicked(false)}
        >
            {keyName}
        </button>
    );
};