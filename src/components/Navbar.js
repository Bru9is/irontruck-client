import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import logo from '../assets/images/irontruck-logo.png'

const Navbar = () => {
    const { isLoading, loggedInUser, logout } = useContext(AuthContext)
    console.log(loggedInUser)
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#000000'}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div>
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                 <img width = '150' id = 'irontruck-logo' src = {logo} alt = 'irontruck logo'/>
                </Link>
                </li>
                    <li className="nav-item">
                      { (!isLoading && loggedInUser.token === '') && 
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                    }
                </li>
              

              { (!isLoading && loggedInUser.token !== '') ? (
                <>
                  {(loggedInUser.user.role === 'user') ? 
                  <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/user-page">
                      New post
                    </Link>
                  </li>

                    <li className="nav-item active">
                      <Link className="nav-link" to="/user-page">
                        See posts
                      </Link>
                    </li> 
                  </>:   
                  <>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/company/proposals">
                        See your proposals
                      </Link>
                    </li> 
                    <li className="nav-item active">
                      <Link className="nav-link" to="/company/search">
                        Search user posts
                      </Link>
                    </li> 
                  </>}
                </>
              ) : (
                <li className="nav-item active">
                    <Link className="nav-link" to="/auth/login">
                      Login
                    </Link>
                </li>
              )}
            </ul>
          </div>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/help">
                  Need help?
                </Link>
              </li>
              { (!isLoading && loggedInUser.token !== '') &&
              <>
              <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/edit-profile"> 
                      <div className='circular-image sm-profile-pic'>
                        <img alt="No Content" src = {loggedInUser.user.imageUrl}/>
                      </div>
                      My profile
                    </Link>
                  </li>
                  <li className="nav-item">
                      <Link onClick={() => {
                        logout()
                        }} className="nav-link" to="/">Logout</Link>
                  </li> </>}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;