# Formula Calculator

## Overview

The **Formula Calculator** is a React-based web application that allows users to input mathematical formulas, view them in a LaTeX-like format, and save their formulas for later use. This project demonstrates dynamic input handling, syntax highlighting, and basic formula evaluation, making it an excellent tool for students, engineers, and anyone needing a simple calculator.

## Features

- **Formula Input**: Users can input formulas using basic math operations: addition, subtraction, multiplication, division, and exponentiation.
- **LaTeX-like Display**: The entered formula is displayed in a LaTeX-like format above the input box in real-time.
- **Syntax Highlighting**: The input formula is highlighted, distinguishing between numbers, variables, and operators.
- **Real-time Evaluation**: The calculator evaluates the formula in real-time as users enter variable values.
- **Formula Saving**: Users can save their formulas in local storage and retrieve them upon revisiting the application.
- **Configurable Features**: Feature flags allow for easy enablement or disablement of functionalities like formula saving.

## Tools Used

- **React**: A JavaScript library for building user interfaces, which provides a component-based architecture for the app.
- **CSS**: For styling the components and ensuring a responsive layout.
- **HTML**: The basic structure for rendering the application.
- **Local Storage**: For saving and retrieving user formulas without requiring a backend.

## Design Decisions

1. **Component-Based Architecture**: 
   - The application is structured using React components. This promotes reusability and separation of concerns.
   - The main components are:
     - `Calculator`: The main component that manages state and integrates all other components.
     - `FormulaInput`: Handles user input, displays the LaTeX-like format, and provides syntax highlighting.

2. **State Management**:
   - The application uses React's built-in state management (`useState`) to manage the formula input and result display.
   - This makes the app simple and straightforward, without the need for external state management libraries.

3. **Real-time Evaluation**:
   - The formula is evaluated using JavaScript's `Function` constructor, which allows for safe evaluation of the expression after replacing operators like `^` with `**` for exponentiation.
   - This design choice avoids the use of `eval()`, making the application more secure.

4. **Feature Flags**:
   - A configuration file (`config.js`) is used to manage feature flags and permissions. This allows for easy toggling of features, making the application more maintainable and scalable.


## Installation

To run the Formula Calculator locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/formula-calculator.git
   cd formula-calculator
2. **Install Dependencies**:
   ```bash 
   npm install
3. **Run the Application**:
   ```bash
   npm start
