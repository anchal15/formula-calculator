import React from 'react';
import { convertToLatex } from '../utils/helpeFunctions';
  
function FormulaInput({ formula, onFormulaChange }) {
  return (
    <div>
      <div className="formula-display">
        <h3>Formula: {convertToLatex(formula)}</h3>
      </div>
      <input
        type="text"
        value={formula}
        onChange={(e) => onFormulaChange(e.target.value)}
        placeholder="Enter formula"
      />
    </div>
  );
}

export default FormulaInput;
