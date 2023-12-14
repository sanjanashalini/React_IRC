import React, { useState } from 'react';

const LoginForm = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => {
    // Toggle between login and registration
    setIsLogin((prevIsLogin) => !prevIsLogin);
    // Reset form fields and error message
    setUsername('');
    setPassword('');
    setError('');
  };

  const handleSubmit = async () => {
    try {
      // Perform login or registration logic (not implemented in this example)

      // Simulate a successful operation
      if (isLogin) {
        // Login logic
        history.push('/home');
      } else {
        // Registration logic
        // Redirect to login page after registration
        history.push('/login');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <div>
        <span>{isLogin ? "Don't have an account?" : 'Already have an account?'}</span>
        <button type="button" onClick={handleToggle}>
          {isLogin ? 'Register' : 'Login'}
        </button>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default LoginForm;
