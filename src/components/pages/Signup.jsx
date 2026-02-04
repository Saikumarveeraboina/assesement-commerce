import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful!");
  };

  return (
    <>
      <h1>Welcome to the Signup Page</h1>
      <p>Please fill in the details to sign up.</p>

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

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
