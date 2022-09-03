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
      
      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });

      if (response.data.user.role === "user") navigate('/user-page')
      else if (response.data.user.role === 'company') navigate("/company/proposals"); 

    } catch (err) {
      alert('Your email or password is incorrect, please try again')
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
    <Navbar />
    <div className="login-container">
      
    <form className = 'form-shadow' onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="signupFormEmail">What's your e-mail address?</label>        
        <input 
          type="email" 
          className="form-control" 
          placeholder="Enter your email address"
          name="email"
          id="loginFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}/>
      </div>

      <div className = "form-group">
        <label htmlFor="signupFormPassword">What's your password?</label>
        <input 
          className = 'form-control'
          type="password"
          name="password"
          placeholder="Enter your password"
          id="loginFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button className="btn btn-primary btn-block" type="submit" >Login</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Login;
