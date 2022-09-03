import Navbar from "../components/Navbar.js"
import {useState, useEffect} from "react"
import apiService from "../services/api.service.js"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


const ProposalAcceptedPage = (name, phone, email) => {

    const {proposalId} = useParams()

    const [company, setCompany] = useState()

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function getCompany(){
            try {
                const result = await apiService.getCompanyWhoAcceptedProposal(proposalId)
                setCompany(result.data.company) 
                setLoading(false)
            } catch(err) {
                console.log(err)
            }
        }
        getCompany()
    }, [proposalId]) 

    if (loading) return (<p>Loading...</p>)

    return (
        <>
        <Navbar />

        <div className = 'accepted-container'>
        <h4 style = {{color:'green'}}>Proposal has been successfully accepted!🎉</h4>
        <p style = {{textAlign: 'center'}}>Please contact the company to discuss the next steps using the details below:</p>
            <div className = 'form-shadow company-details'>
            <p> <span style = {{color: '#9a0414'}}> Name: </span><span>{company.name}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Phone: </span><span>{company.phone}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Email: </span><span>{company.email}</span> </p>
            </div>
        </div>
        <div className="text-center">
            <Link to="/user-page" style={{color: '#9a0414', textAlign:'center'}}>
                Back to the main page
            </Link>
        </div>
        </>
    )
}

export default ProposalAcceptedPage