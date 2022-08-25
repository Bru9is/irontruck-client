import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../services/api.service";
import Navbar from "../../components/Navbar";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await apiService.login(state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });

      if (response.data.user.role === "user") navigate('/user-page')
      else if (response.data.user.role === 'company') navigate("/company-page"); 

    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
    <Navbar />
    <div className="login-container">
      
    <form onSubmit={handleSubmit}>
      <div className = "login-form-container">
          <label htmlFor="signupFormEmail">What's your e-mail address?</label>

        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div className = "login-form-container">
        <label htmlFor="signupFormPassword">Enter your password</label>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button className="login-button btn" type="submit">Login!</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Login;
