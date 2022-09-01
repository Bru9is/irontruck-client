import Navbar from "../components/Navbar.js"
import ProposalCard from "../components/ProposalCard.js"
import { useParams } from "react-router-dom"
import {useState, useEffect, useContext} from "react"
import apiService from "../services/api.service.js"
import { AuthContext } from "../contexts/authContext.js"

const PostProposalsPage = () => {

    const { loggedInUser } = useContext(AuthContext)

    const { postId } = useParams()

    const [proposals, setProposals] = useState([])
    
    useEffect(() => {
        async function getProposals(){
            try {
                const result = await apiService.getAllProposals(postId)
                setProposals(result.data) 
            } catch(err) {
                console.log(err)
            }
        }
        getProposals()
    }, [postId])

    return (
        <div>
            <Navbar />
            <div className = 'proposals-container'>
            {proposals.map((e) => {
            return(
                <div className = 'proposal-card'>
                    <ProposalCard 
                        key = {e._id}
                        date = {e.createdAt}
                        origin = {e.post.origin}
                        destination = {e.post.destination}
                        status = {e.status}
                        companyName = {e.company.name}
                        total = {e.total}
                        proposalId = {e._id}
                        role = {loggedInUser.user.role}
                    />
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default PostProposalsPage