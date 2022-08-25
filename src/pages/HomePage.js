import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../assets/styles/index.css'
import bgPicture from '../../src/assets/images/irontruck-background.png'

function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <img src = {bgPicture} alt = 'irontruck-background' width='80%'/>
      <div className="d-flex flex-column align-items-center flex-container">
        
          <Link className="btn" to="/auth/signup?type=company">
            Signup as a company
          </Link>

          <Link className="btn" to="/auth/signup?type=user">
            Signup as a user
          </Link>
      </div>

      <div style={{marginTop: '100px'}}>
      <Link to="/auth/login" style={{color: '#9a0414'}}>
          Already have an account? Click here to login
      </Link>
      </div>
    </div>
  );
}

export default Home;
