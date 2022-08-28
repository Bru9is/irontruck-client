import Navbar from "../components/Navbar.js"
import ProposalCard from "../components/ProposalCard.js"
import {useState, useEffect} from "react"
import apiService from "../services/api.service.js"

const CompanyProposalsPage = () => {

    const [proposals, setProposals] = useState([])
    
    useEffect(() => {
        async function getProposals(){
            try {
                const result = await apiService.getCompanyProposals()
                setProposals(result.data) 
            } catch(err) {
                console.log(err)
            }
        }
        getProposals()
    }, [])

    return (
        <div>
            <Navbar />
            {proposals.map((e) => {
            return(
                <div>
                    <ProposalCard 
                        key = {e._id}
                        date = {e.createdAt}
                        origin = {e.post.origin}
                        destination = {e.post.destination}
                        total = {e.total}
                        status = {e.status}
                        proposalId = {e._id}
                    />
                </div>
            )
        })}

        </div>
    )
}
export default CompanyProposalsPage