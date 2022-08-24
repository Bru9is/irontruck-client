import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiService from "../../services/api.service"; 

function Signup(props) {

  const [searchParams] = useSearchParams()

  const [state, setState] = useState({ 
    name: "", 
    password: "", 
    email: "", 
    phone: "", 
    street:"", 
    number:"", 
    city:"", 
    state:"", 
    zip:"", 
    role: searchParams.get('type'), 
    document: "" });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    role: null,
    phone: null,
    street:null, 
    number:null, 
    city:null, 
    state:null, 
    zip:null,
    document: null,
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
      const newUser = {
        name: state.name,
        email: state.email,
        password: state.password,
        phone: state.phone,
        role: state.role,
        address: {
          street: state.street,
          number: state.number,
          city: state.city,
          state: state.state,
          zip: state.zip
        },
        document: state.document
      }
      await apiService.signUp(newUser);
      setErrors({ name: "", password: "", email: "", phone: "", street:"", number:"", city:"", state:"", zip:"", document: "" });
      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{state.role} signup</h1>

      <div>
        <label htmlFor="signupFormName">Name</label>
        <input
          type="text"
          name="name"
          id="signupFormName"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormPassword">Password</label>
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
        <label htmlFor="signupFormPhone">Phone</label>
        <input
          type="text"
          name="phone"
          id="signupFormPhone"
          value={state.phone}
          error={errors.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormStreet">Street</label>
        <input
          type="text"
          name="street"
          id="signupFormStreet"
          value={state.street}
          error={errors.street}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormNumber">Number</label>
        <input
          type="text"
          name="number"
          id="signupFormNumber"
          value={state.number}
          error={errors.number}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormCity">City</label>
        <input
          type="text"
          name="city"
          id="signupFormCity"
          value={state.city}
          error={errors.city}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormCity">State</label>
        <input
          type="text"
          name="state"
          id="signupFormState"
          value={state.state}
          error={errors.state}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormCity">Zipcode</label>
        <input
          type="text"
          name="zip"
          id="signupFormZip"
          /*pattern="	^\d{5}-\d{3}$"*/
          value={state.zip}
          error={errors.zip}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormDocument">{state.role==='user'? "CPF" : "CNPJ"}</label>
        <input
          type="text"
          name="document"
          id="signupFormDocument"
          value={state.document}
          error={errors.document}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Signup!</button>
      </div>
    </form>
  );
}

export default Signup;
