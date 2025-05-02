import React, { useEffect, useState } from "react";


const Practice = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");
  const [input, setInput] = useState("");

  const generatingNumber = () => {
    const number = Math.floor(Math.random() * 10);
    setRandomNumber(number);
    setSuccessMessage("");
    setFailureMessage("");
    setInput("");
  };

  const check = () => {
    if (parseInt(randomNumber) === parseInt(input)) {
      setSuccessMessage("🎉 Congratulations!! You have won!");
      setFailureMessage("");
    } else if (input > randomNumber) {
      setSuccessMessage("");
      setFailureMessage("📈 High! Try Again.");
    } else {
      setSuccessMessage("");
      setFailureMessage("📉 Low! Try Again.");
    }
  };

  useEffect(() => {
    generatingNumber();
  }, []);
console.log(randomNumber)
  return (
    <div className="practice-container">
      <div className="practice-box">
        <h1 className="practice-title">🎲 Number Guessing Game</h1>
        
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="practice-input"
          placeholder="Enter your guess from 1 to 10"
        />
        
        <button onClick={check} className="practice-button">
          Check Guess
        </button>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {failureMessage && !successMessage && (
          <div className="failure-message">{failureMessage}</div>
        )}

        <button onClick={generatingNumber} className="practice-button reset-button">
          🔄 Reset
        </button>
      </div>
    </div>
  );
};

export default Practice;

