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
        <div className = 'gradient-border proposal-card'>
            <p><span style = {{color: '#9a0414'}}>Date: </span><span>{new Date(date).toLocaleDateString('pt-br')}</span></p>
            <p><span style = {{color: '#9a0414'}}>Origin: </span><span>{origin}</span></p>
            <p><span style = {{color: '#9a0414'}}>Destination: </span><span>{destination}</span></p>
            {companyName && <p><span style = {{color: '#9a0414'}}>Company name: </span><span>{companyName}</span></p>}
            <p><span style = {{color: '#9a0414'}}>Total: </span><span>{total}</span></p>
            {status ==='accepted' && <p><span style = {{color: '#9a0414'}}>Status: </span><span style = {{backgroundColor: 'green', color: 'white'}}>{status}</span></p>}
            {status ==='rejected' && <p><span style = {{color: '#9a0414'}}>Status: </span><span style = {{backgroundColor: 'red', color: 'white'}}>{status}</span></p>}
            {status ==='pending' && <p><span style = {{color: '#9a0414'}}>Status: </span><span style = {{backgroundColor: 'blue', color: 'white'}}>{status}</span></p>}
            {(companyName && status === 'pending') && (
              <>
                <button className = 'btn btn-primary btn-sm' onClick = {handleClick}>Accept proposal</button>
                <button className = 'btn btn-danger btn-sm'>Reject proposal</button>
              </>)}
    </div>
    )
}

export default ProposalCard