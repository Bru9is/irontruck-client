import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import PrivateRoute from '../pages/auth/PrivateRoute'
import PrivatePage from "../pages/PrivatePage";
import SuccessPage from "../pages/SuccessPage";
import UserPage from "../pages/UserPage";
import { AuthContextComponent } from "../contexts/authContext";


function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route path="/auth">
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route>
            <Route path='/success' element={<SuccessPage />} />
            <Route path='/user-page' element={<UserPage />} />
          <Route path='/test' element={
            <PrivateRoute>
              <PrivatePage />
            </PrivateRoute>
          } />
        </Routes>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
