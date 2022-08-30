import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import HomePage from "../pages/HomePage";
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import PrivateRoute from '../pages/auth/PrivateRoute'
import PrivatePage from "../pages/PrivatePage";
import UserPage from "../pages/UserPage";
import ErrorPage from "../pages/ErrorPage";
import EditProfilePage from "../pages/EditProfilePage";
import HelpPage from "../pages/HelpPage";
import SearchPage from "../pages/SearchPage";
import PostProposalsPage from "../pages/PostProposalsPage";
import { AuthContextComponent } from "../contexts/authContext";
import CompanyProposalsPage from "../pages/CompanyProposalsPage";
import ProposalAcceptedPage from "../pages/ProposalAcceptedPage";
import EditPostPage from "../pages/EditPostPage.js"


function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/company/proposals" element={<CompanyProposalsPage />} />
          <Route path="/:postId/all-proposals" element={<PostProposalsPage />} />
          <Route path="/:postId/edit-post" element={<EditPostPage />} />
          <Route path="/:proposalId/accept" element={<ProposalAcceptedPage />} />
          <Route path="/auth">
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route>
            <Route path='/user-page' element={<UserPage />} />
            <Route path='/company/search' element={<SearchPage />} />
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
