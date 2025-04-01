import React, { useState } from 'react';
const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      setMessage('Please enter valid height and weight');
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
    setMessage('');
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      
      <form onSubmit={calculateBMI} className="form-container">
        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g., 175"
            required
          />
        </div>
        
        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g., 70"
            required
          />
        </div>
        
        <button type="submit" className="calculate-btn">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="result-container">
          <p className="bmi-value">Your BMI: {bmi}</p>
          <p className="bmi-message">{message}</p>
          <button onClick={resetForm} className="reset-btn">Reset</button>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
