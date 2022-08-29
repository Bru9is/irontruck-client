import { useState } from "react";
import apiService from "../services/api.service";

function Proposal(props) {
    const [total, setTotal] = useState("")

    async function handleSubmit(event){
        event.preventDefault();
        try { 
            const newProposal = {  postId: props.postId, total} 
            await apiService.createProposal(newProposal)
            alert('Your proposal has been successfully sent!')
        }catch(err) {
            alert('You cannot send more than 1 proposal')
            console.log(err);
        }
    }

    return(
        <>
            <form className = 'form-group' onSubmit={handleSubmit}>
                <input
                    className="form-control" 
                    type="text"
                    name="total"
                    id="total"
                    placeholder="Enter total amount"
                    value={total}
                    onChange= {(e) => {setTotal(e.target.value)}}
                />
                <button className="btn btn-primary btn-block" type="submit">Send proposal</button>
            </form> 
        
        </>
    )
}
export default Proposal