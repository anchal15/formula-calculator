
export const convertToLatex = (formula) => {
    // Replace power (^) with superscript notation for both numbers and variables
    let latex = formula.replace(/(\d+|\w+|\(.+?\))\^(\d+)/g, (_, base, exp) => {
        return `${base}^{${exp}}`;
    });

    // Replace division symbol
    latex = latex.replace(/\//g, '÷');

    return latex;
}

export const detectVariables = (formula) => {
    const regex = /[a-zA-Z]/g;
    const variables = [...new Set(formula.match(regex))]; // Extract unique variables
    return variables;
}


export const evaluateFormula = (formula, variableValues) => {
    let modifiedFormula = formula;

    // Replace variables with their corresponding values
    for (const variable in variableValues) {
        const value = variableValues[variable] || 0;
        modifiedFormula = modifiedFormula.replace(new RegExp(`\\b${variable}\\b`, 'g'), value);
    }

    // Replace `^` with `**` for proper exponentiation
    modifiedFormula = modifiedFormula.replace(/\^/g, '**');

    try {
        const result = new Function(`return ${modifiedFormula}`)();  // Safely evaluate
        return isNaN(result) ? 'Invalid expression' : result;
    } catch (error) {
        return 'Error in formula';
    }
}