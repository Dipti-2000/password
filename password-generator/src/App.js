import React, { useState } from 'react';
import './App.css';

function generatePassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function App() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordLength);
    setGeneratedPassword(newPassword);
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="password-container">
        <div className="input-group">
          <label>Password Length:</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            min="6"
            max="50"
          />
        </div>
        <button onClick={handleGeneratePassword}>Generate Password</button>
        {generatedPassword && (
          <div className="generated-password">
            <p>Your Generated Password:</p>
            <textarea value={generatedPassword} readOnly />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;