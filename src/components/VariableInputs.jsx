import React, { useState, useEffect } from 'react';
import { detectVariables } from "../utils/helpeFunctions";

function VariableInputs({ formula, onVariableChange }) {
    const variables = detectVariables(formula);
    const [values, setValues] = useState({});

    // Initialize variable values with default
    useEffect(() => {
        const initialValues = variables.reduce((acc, variable) => {
            acc[variable] = 0; // Default value for each variable
            return acc;
        }, {});
        setValues(initialValues);
    }, [formula]);

    const handleSliderChange = (variable, value) => {
        const updatedValues = { ...values, [variable]: Number(value) };
        setValues(updatedValues);
        onVariableChange(variable, updatedValues[variable]);
    };

    return (
        <div>
            {variables.map((variable) => (
                <div key={variable} style={{ marginBottom: '10px' }}>
                    <label>{`${variable} = ${values[variable]}`}</label>
                    <input
                        type="range"
                        min="-10"
                        max="10"
                        step="1"
                        value={values[variable]}
                        onChange={(e) => handleSliderChange(variable, e.target.value)}
                        style={{ width: '100%' }}
                    />
                </div>
            ))}
        </div>
    );
}

export default VariableInputs;
