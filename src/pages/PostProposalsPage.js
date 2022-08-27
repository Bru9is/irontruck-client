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
            {proposals.map((e) => {
            return(
                <div>
                    <ProposalCard 
                        key = {e._id}
                        date = {e.createdAt}
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
    )
}

export default PostProposalsPage