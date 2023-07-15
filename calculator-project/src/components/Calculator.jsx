import React, { useState } from "react";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "number1") {
      setNumber1(value);
    } else if (name === "number2") {
      setNumber2(value);
    } else if (name === "operator") {
      setOperator(value);
    }
  };

  const handleCalculation = () => {
    if (isNaN(number1)) {
      alert("The first number is not a valid number.");
      return;
    }

    if (isNaN(number2)) {
      alert("The second number is not a valid number.");
      return;
    }

    let calculatedResult;
    switch (operator) {
      case "+":
        calculatedResult = parseFloat(number1) + parseFloat(number2);
        break;
      case "-":
        calculatedResult = parseFloat(number1) - parseFloat(number2);
        break;
      case "*":
        calculatedResult = parseFloat(number1) * parseFloat(number2);
        break;
      case "/":
        calculatedResult = parseFloat(number1) / parseFloat(number2);
        break;
      default:
        alert("Invalid operator.");
        return;
    }

    setResult(calculatedResult);

    setNumber1("");
    setNumber2("");
    setOperator("");
  };

  const calculatorContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "1em",
    boxShadow: "0 0.125em 0.25em rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
  };

  const inputStyle = {
    padding: "0.625em",
    fontSize: "1em",
    borderRadius: "45em",
    border: "1px solid grey",
    outline: "none",
    width: "100%",
    marginBottom: "1.25em",
    color: "red",
    backgroundColor: "white",
    // border: " 2px solid black",
  };

  const buttonStyle = {
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "0.625em 1.25em",
    fontSize: "1em",
    borderRadius: "45em",
    cursor: "pointer",
    width: "40%",
    boxSizing: "border-box", // Add this property
  };

  const resultStyle = {
    marginTop: "1.25em",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "black",
  };

  const mediaQuery = "@media screen and (max-width: 1024px)";
  // const mediaQuery1 = "@media screen and (max-width: 1400px)";
  const responsiveInputStyle = {
    ...inputStyle,
    fontSize: "0.875em",
    [mediaQuery]: {
      fontSize: "0.75em",
    },
  };

  const responsiveButtonStyle = {
    ...buttonStyle,
    fontSize: "0.875em",

    [mediaQuery]: {
      fontSize: "0.75em",
      borderRadius: "45em", // Add this line to maintain the border radius
    },
  };

  const responsiveResultStyle = {
    ...resultStyle,
    fontSize: "1.25em",
    [mediaQuery]: {
      fontSize: "1em",
    },
  };

  return (
    <div style={calculatorContainerStyle}>
      <h1 style={{ color: "black" }}>Calculator App</h1>
      <div>
        <input
          type="text"
          name="number1"
          value={number1}
          onChange={handleInputChange}
          style={responsiveInputStyle}
          placeholder="Enter number"
        />
        <input
          type="text"
          name="operator"
          value={operator}
          onChange={handleInputChange}
          style={responsiveInputStyle}
          placeholder="Operator"
        />
        <input
          type="text"
          name="number2"
          value={number2}
          onChange={handleInputChange}
          style={responsiveInputStyle}
          placeholder="Enter number"
        />
      </div>
      <button onClick={handleCalculation} style={responsiveButtonStyle}>
        Calculate
      </button>
      {result && <div style={responsiveResultStyle}>Result: {result}</div>}
    </div>
  );
}

export default Calculator;
