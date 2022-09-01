import {Link} from 'react-router-dom'
import apiService from '../services/api.service';
import {useEffect} from 'react'


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
            <p> <span style = {{color: '#9a0414'}}> Boxing: </span><span>{ props.boxing ? "Yes": "No"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Unboxing: </span><span>{props.unboxing ? "Yes": "No"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Material: </span><span>{props.material ? "Yes": "No"}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Floor: </span><span>{props.floors}</span> </p>
            <p> <span style = {{color: '#9a0414'}}> Image: </span><span>{props.image}</span> </p>
            { props.role === "user" && <Link to={`/${props.postId}/edit-post`}><button className = 'btn btn-primary btn-sm edit-delete'>Edit post</button></Link> }
            { props.role === "user" && <button onClick = {handleDelete} className='btn btn-danger btn-sm edit-delete'>Delete post</button>} 
        </div>
    )
}
export default PostCard;