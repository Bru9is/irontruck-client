import Navbar from "../components/Navbar.js"
import brunoAvatar from "../assets/images/avatar_Bruno.jpeg"
import kseniaAvatar from "../assets/images/avatar_Ksenia.jpeg"
import {FaLinkedin } from 'react-icons/fa'
import {FaGithub } from 'react-icons/fa'
import {FaPhone } from 'react-icons/fa'
import {FaEnvelope } from 'react-icons/fa'
import { Link } from "react-router-dom";


const HelpPage = () => {
    return (
        <div>
            <Navbar />
            <h1 className = 'help-heading'>We've got your back.</h1>
            <h4 className = 'need-help'>Need help? Get in touch with us!</h4>

            <div className = 'flex-image-container'>
                    <img className="circular-image" src = {brunoAvatar} alt = 'avatar Bruno'/>
                    <p>
                        <span style={{color: "#ff3131"}}>Bruno Novis</span> - engineer with more than 10 years of experience 
                        in the technology area. <p>At the moment in career transition to Software Development. </p>
                        
                            <a href = 'https://www.linkedin.com/in/brunonovis/'>
                                <FaLinkedin size={25} style={{ fill: '#ff3131' }}/> 
                            </a>

                            <a href = 'https://github.com/Bru9is'>
                                <FaGithub size={25} style={{ fill: '#ff3131' }}/>
                            </a>
                    </p>    
                </div>

                <div className = 'flex-image-container'>
                <img className="circular-image" src = {kseniaAvatar} alt = 'avatar Ksenia'/>
                    <p>
                        <span style={{color: "#ff3131"}}>Ksenia Busquet</span> - customer-oriented specialist with excellent
                         communication and interpersonal skills.<p>Passionate about helping people solve complex issues. 
                         Rich intercultural and hospitality background. Twice an expat. </p>
                         
                         <a href = 'https://www.linkedin.com/in/kseniabusquet/'>
                                <FaLinkedin size={25} style={{ fill: '#ff3131' }}/> 
                            </a>

                            <a href = 'https://github.com/kseniabusquet'>
                                <FaGithub size={25} style={{ fill: '#ff3131' }}/>
                            </a>

                    </p>
                </div>

                <div className = 'contacts-container'>
                    <p><FaPhone/>+55 (11) 12345678</p>
                    <p><FaEnvelope/>contact@irontruck.com</p>
                </div>

                <div className="text-center">
                    <Link to="/" style={{color: '#9a0414', textAlign:'center'}}>
                        Back to the homepage
                    </Link>
                </div>

            </div>
    )
}

export default HelpPage