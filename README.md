# Calculator Application /Users/sindhu/Git/calculator-app/src

This is a simple calculator application built with React and TypeScript. The application allows users to perform basic mathematical operations such as addition, subtraction, multiplication, and division. Each operation is handled on a separate page, providing a clean and organized user experience.

## Features

- **Atomic Design**: The application is structured using atomic design principles, with reusable components categorized into atoms, molecules, and organisms.
- **TypeScript**: The project is developed using TypeScript, ensuring type safety and better development experience.
- **Responsive Design**: The application is styled with eye-catching CSS to provide a visually appealing interface.
- **Testing**: Each component and utility function is accompanied by test cases to ensure reliability and correctness.

## Project Structure

```
calculator-app
├── src
│   ├── assets
│   │   └── styles
│   │       └── global.css
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.spec.tsx
│   │   │   │   └── Button.css
│   │   │   └── Input
│   │   │       ├── Input.tsx
│   │   │       ├── Input.spec.tsx
│   │   │       └── Input.css
│   │   ├── molecules
│   │   │   └── CalculatorDisplay
│   │   │       ├── CalculatorDisplay.tsx
│   │   │       ├── CalculatorDisplay.spec.tsx
│   │   │       └── CalculatorDisplay.css
│   │   └── organisms
│   │       └── CalculatorKeypad
│   │           ├── CalculatorKeypad.tsx
│   │           ├── CalculatorKeypad.spec.tsx
│   │           └── CalculatorKeypad.css
│   ├── pages
│   │   ├── Addition
│   │   │   ├── Addition.tsx
│   │   │   ├── Addition.spec.tsx
│   │   │   └── Addition.css
│   │   ├── Subtraction
│   │   │   ├── Subtraction.tsx
│   │   │   ├── Subtraction.spec.tsx
│   │   │   └── Subtraction.css
│   │   ├── Multiplication
│   │   │   ├── Multiplication.tsx
│   │   │   ├── Multiplication.spec.tsx
│   │   │   └── Multiplication.css
│   │   └── Division
│   │       ├── Division.tsx
│   │       ├── Division.spec.tsx
│   │       └── Division.css
│   ├── hooks
│   │   └── useCalculator.ts
│   ├── utils
│   │   ├── calculations.ts
│   │   └── calculations.spec.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.spec.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/calculator-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd calculator-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To start the application, run the following command:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to use the calculator.

## Running Tests

To run the test suite, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License.