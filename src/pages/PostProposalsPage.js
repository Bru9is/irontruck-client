import Navbar from "../components/Navbar.js"
import ProposalCard from "../components/ProposalCard.js"
import { useParams } from "react-router-dom"
import {useState, useEffect, useContext} from "react"
import apiService from "../services/api.service.js"
import { AuthContext } from "../contexts/authContext.js"
import noProposals from '../assets/images/no-posts-proposals.png'

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

            {proposals.length === 0 && 
            <div className = 'no-proposals'>
            <h4>No proposals for this post created yet 😢 </h4>
                <img alt="no posts" style = {{width: "40%"}} src = {noProposals}/>
            </div>}

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
                        companyImageUrl = {e.company.imageUrl}
                    />
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default PostProposalsPage