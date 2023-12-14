
import React, { useState } from 'react';

const RegistrationForm = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      
      history.push('/login');
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {/* ... (form inputs) */}
      <button onClick={handleRegistration}>Register</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default RegistrationForm;
