import Navbar from "../components/Navbar"
import pageNotFound from '../assets/images/page-not-found.png'
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <img className = 'page-not-found-img' src = {pageNotFound} alt = 'page not found'/>
            
            <div className = "text-center">
                <Link to="/" style={{color: '#9a0414'}}>
                    Back to the homepage
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage