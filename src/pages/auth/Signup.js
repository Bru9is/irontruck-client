import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiService from "../../services/api.service"; 
import Navbar from "../../components/Navbar";

function Signup(props) {

  const [searchParams] = useSearchParams()
  const [imageUrl, setImageUrl] = useState('')
  
  const handleFileUpload = async (e) => {
        
    const uploadData = new FormData()

    uploadData.append('imageUrl', e.target.files[0])
    const response = await apiService.uploadFile(uploadData)

    setImageUrl(response.filePath)
  }

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
    imageUrl: "",
    role: searchParams.get('type'), 
    document: "" });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    role: null,
    phone: null,
    street: null, 
    number: null, 
    city: null, 
    state: null, 
    zip: null,
    document: null,
    imageUrl: null,
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
        document: state.document,
        imageUrl: imageUrl,
      }
      
      await apiService.signUp(newUser);
      setErrors({ name: "", password: "", email: "", phone: "", street:"", number:"", city:"", state:"", zip:"", document: "", image:"" });
      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
      <Navbar />

    <div className = 'signup-container'>

    <form onSubmit={handleSubmit}>
    <h1>{state.role.toUpperCase()} SIGNUP</h1>
    <div className="form-group">
    <label for="inputName">{state.role==='user'? "Name" : "Company name"}</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Enter your name"
      name="name"
      id="signupFormName"
      value={state.name}
      error={errors.name}
      onChange={handleChange}
      />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input 
        type="email" 
        className="form-control" 
        placeholder="Enter your email address"
        name="email"
        id="signupFormEmail"
        value={state.email}
        error={errors.email}
        onChange={handleChange}/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input 
        type="password" 
        className="form-control" 
        placeholder="Enter your password"
        name="password"
        id="signupFormPassword"
        value={state.password}
        error={errors.password}
        onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputPhone">Phone</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Enter your phone number"
      name="phone"
      id="signupFormPhone"
      value={state.phone}
      error={errors.phone}
      onChange={handleChange}/>
  </div>
  
  <div className="form-row">
  <div className="form-group col-md-6">
    <label for="inputStreet">Street</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Enter your street"
      name="street"
      id="signupFormStreet"
      value={state.street}
      error={errors.street}
      onChange={handleChange}/>
  </div>
  <div className="form-group col-md-6">
    <label for="inputNumber">Number</label>
    <input 
      type="number" 
      placeholder="Enter your house number"
      className="form-control" 
      name="number"
      id="signupFormNumber"
      value={state.number}
      error={errors.number}
      onChange={handleChange}/>
  </div>
</div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Enter your city"
        name="city"
        id="signupFormCity"
        value={state.city}
        error={errors.city}
        onChange={handleChange}/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Enter your state"
        name="state"
        id="signupFormState"
        value={state.state}
        error={errors.state}
        onChange={handleChange}/>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input 
        type="text" 
        className="form-control" 
        name="zip"
        id="signupFormZip"
        value={state.zip}
        error={errors.zip}
        onChange={handleChange}/>
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="signupFormDocument">{state.role==='user'? "CPF" : "CNPJ"}</label>
      <input
        className='form-control'
        type="text"
        name="document"
        id="signupFormDocument"
        value={state.document}
        error={errors.document}
        onChange={handleChange}
     />
  </div>

  <div className="form-group">
    <label for="inputImage">Image upload</label>
      <input 
        type="file" 
        name="imageUrl" 
        onChange={ handleFileUpload } 
        />  
  </div>

  <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={imageUrl === ''}>Sign up</button>
</form>


    </div>
    </div>
  );
}

export default Signup;
