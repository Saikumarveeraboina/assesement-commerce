import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const userPass = "123";
    const adminPass = "admin123";

    if (email === "user@gmail.com" && password === userPass) {
      localStorage.setItem("role", "user");
      localStorage.setItem("email", email);
      navigate("/user");
    }
    else if (email === "admin@gmail.com" && password === adminPass) {
      localStorage.setItem("role", "admin");
      localStorage.setItem("email", email);
      navigate("/vendor");
    }
    else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <h1>Welcome to the Login Page</h1>
      <p>Please fill in the details to log in.</p>

      <form onSubmit={onSubmit}>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <br />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
