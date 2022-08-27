import apiService from "../services/api.service";
import { useNavigate } from 'react-router-dom'

const ProposalCard = ({date, origin, destination, companyName, total, proposalId, status}) => {

    const navigate = useNavigate()

        async function handleClick(event){
            event.preventDefault();
            try { 
                await apiService.acceptProposal(proposalId)
                navigate(`/${proposalId}/accept`)
            }catch(err) {
                console.log(err);
            }
        }
    
    return (
        <div>
            <p>Date: {date}</p>
            <p>Origin: {origin}</p>
            <p>Destination: {destination}</p>
            {companyName && <p>Company name: {companyName}</p>}
            <p>Total: {total}</p>
            <p>Status: {status}</p>
            {(companyName && status === 'pending') && (
              <>
                <button onClick = {handleClick}>Accept proposal</button>
                <button>Reject proposal</button>
              </>)}
    </div>
    )
}

export default ProposalCard