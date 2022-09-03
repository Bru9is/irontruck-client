import { useState } from "react";
import apiService from "../services/api.service";
import { useNavigate } from "react-router-dom";

function Proposal(props) {
    const [total, setTotal] = useState("")
    const navigate = useNavigate()
    
    async function handleSubmit(event){
        event.preventDefault();
        try { 
            const newProposal = {  postId: props.postId, total} 
            await apiService.createProposal(newProposal)
            alert('Your proposal has been successfully sent!')
            navigate("/company/proposals")
        }catch(err) {
            alert('You cannot send more than 1 proposal')
            console.log(err);
        }
    }

    return(
        <>
            <form className = 'form-group' onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input
                    className="form-control" 
                    type="text"
                    name="total"
                    id="total"
                    placeholder="Enter total amount"
                    value={total}
                    onChange= {(e) => {setTotal(e.target.value)}}
                />
                </div>

                <button className="btn btn-primary btn-block" type="submit">Send proposal</button>
            </form> 
        
        </>
    )
}
export default Proposal