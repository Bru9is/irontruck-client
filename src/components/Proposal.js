import { useState } from "react";
import apiService from "../services/api.service";

function Proposal(props) {
    const [total, setTotal] = useState("")

    async function handleSubmit(event){
        event.preventDefault();
        try { 
            const newProposal = {  postId: props.postId, total} 
            await apiService.createProposal(newProposal)
        }catch(err) {
            console.log(err);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="total"
                    id="total"
                    value={total}
                    onChange= {(e) => {setTotal(e.target.value)}}
                />
                <button className="login-button btn" type="submit">Send Proposal</button>
            </form> 
        
        </>
    )
}
export default Proposal