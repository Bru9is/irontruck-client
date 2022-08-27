import Navbar from "../components/Navbar.js"
import ProposalCard from "../components/ProposalCard.js"
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
        <p>Proposal has been successfully accepted!</p>
        <p>Please contact the company using the details below:</p>
        <div>
            <p>Name: {company.name}</p>
            <p>Phone: {company.phone}</p>
            <p>Email: {company.email}</p>
        </div>

        <Link to="/user-page" style={{color: '#9a0414'}}>
            Back to the main page
        </Link>
        
        </>
    )
}

export default ProposalAcceptedPage