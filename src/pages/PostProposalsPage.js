import Navbar from "../components/Navbar.js"
import ProposalCard from "../components/ProposalCard.js"
import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import apiService from "../services/api.service.js"

const PostProposalsPage = () => {

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
                        date = {new Date(e.createdAt).toLocaleDateString('pt-br')}
                        origin = {e.post.origin}
                        destination = {e.post.destination}
                        status = {e.status}
                        companyName = {e.company.name}
                        total = {e.total}
                        proposalId = {e._id}
                    />
                </div>
            )
        })}
        </div>
        </div>
    )
}

export default PostProposalsPage