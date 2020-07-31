import React from "react";
import { NavLink } from "react-router-dom";
import "./ConverterHeader.css";

export const ConverterHeader = () => {
    return (
        <header>
            <h1>Unit Converter</h1>
            <nav>
                <NavLink to="/SI-Unit-Converter" activeClassName="active">Area</NavLink>
                <NavLink to="/length">Length</NavLink>
                <NavLink to="/data">Data</NavLink>
                <NavLink to="/volume">Volume</NavLink>
                <NavLink to="/mass">Mass</NavLink>
            </nav>
        </header>
    );
};