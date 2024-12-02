import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="Login">
      <h2>Login Page</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
