import { useEffect, useState } from "react";
import FormulaInput from "./FormulaInput";
import VariableInputs from "./VariableInputs";
import { evaluateFormula } from "../utils/helpeFunctions";
import config from '../config/config'; // Import the config file


function Calculator() {
    const [formula, setFormula] = useState('');
    const [variableValues, setVariableValues] = useState({});
    const [result, setResult] = useState(null);
    const [savedFormulas, setSavedFormulas] = useState(
      JSON.parse(localStorage.getItem('formulas')) || []
    );

    const saveFormula = (formula) => {
        if (!savedFormulas.includes(formula)) {
          const newFormulas = [...savedFormulas, formula];
          setSavedFormulas(newFormulas);
          localStorage.setItem('formulas', JSON.stringify(newFormulas));
          alert("Formula saved!");
        } else {
          alert("Formula already exists!");
        }
      };
      

    const handleVariableChange = (variable, value) => {
        setVariableValues((prevValues) => ({
            ...prevValues,
            [variable]: parseFloat(value),
        }));
    };

    const handleSave = () => {
        if (config.userPermissions.canSaveFormulas && config.enableFormulaSaving) {
          saveFormula(formula);
        } else {
          alert("You don't have permission to save formulas.");
        }
      };

    useEffect(() => {
        setResult(evaluateFormula(formula, variableValues));
    }, [variableValues, formula])

    const handleFormulaChange = (newFormula) => {
        setFormula(newFormula);
        setResult(evaluateFormula(newFormula, variableValues));
    };

    return (
        <div>
            <h2>Formula Calculator</h2>
            <FormulaInput formula={formula} onFormulaChange={handleFormulaChange} />
            <VariableInputs formula={formula} onVariableChange={handleVariableChange} />
            <div>
                <h4>Result: {result}</h4>
            </div>
            <button onClick={() => handleSave()}>Save Formula</button>
            <ul>
                {savedFormulas.map((f, index) => (
                    <li key={index}>{f}</li>
                ))}
            </ul>
        </div>
    );
}

export default Calculator;
