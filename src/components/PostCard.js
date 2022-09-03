import {Link} from 'react-router-dom'
import apiService from '../services/api.service';
import {useEffect} from 'react'
import {FaRegTrashAlt } from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'



function PostCard(props) {


    const postId = props.postId

    async function handleDelete(e){
        e.preventDefault();
        try {
            await apiService.deletePost(postId);
            alert("Post successfully deleted!")
            props.setRefresh(!props.refresh)

          } catch (err) {
            console.error(err);
          }
    }

    return (
        <div className = 'post-proposal-card'>
            <p> <span style = {{color: '#9a0414'}}> Date: </span><span> {props.date}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Origin: </span><span>{props.origin}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Destination: </span><span>{props.destination}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Truck Type: </span><span>{props.truckType}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Boxing: </span><span>{ props.boxing ? "✅": "❌"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Unboxing: </span><span>{props.unboxing ? "✅": "❌"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Material: </span><span>{props.material ? "✅": "❌"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Floor: </span><span>{props.floors}</span> </p>
            { props.role === "user" && <Link to={`/${props.postId}/edit-post`}><button className = 'btn btn-primary btn-sm edit-delete'><FiEdit size={20} style={{ cursor: "pointer" }} /></button></Link> }
            { props.role === "user" && <button onClick = {handleDelete} className='btn btn-danger btn-sm edit-delete'><FaRegTrashAlt size={20} style={{ cursor: "pointer" }} /></button>} 
        </div>
    )
}
export default PostCard;