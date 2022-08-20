import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import '../assets/styles/index.css'

function Home() {
  return (
    <div className="text-center">
      <Navbar />
      <h1>IronTruck</h1>
      <div className="d-flex flex-column align-items-center flex-container">
        <div>
          <div className = 'signup-container'>
            Signup as a company
          </div>
          <Link className="btn btn-lg btn-primary" to="/auth/signup?type=company">
            Signup
          </Link>
        </div>

        <div>
          <div className = 'signup-container'>
            Signup as a user
          </div>
          <Link className="btn btn-lg btn-primary" to="/auth/signup?type=user">
            Signup
          </Link>
        </div>
      </div>

      <Link to="/auth/login">
          Already have an account? Click here to login.
      </Link>
    </div>
  );
}

export default Home;
