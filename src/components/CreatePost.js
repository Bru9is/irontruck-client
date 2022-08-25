import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../services/api.service.js"; 


const Post = (props) => {

  const [state, setState] = useState({ 
    date: null, 
    origin: "", 
    destination: "", 
    truckType: "", 
    boxing: false, 
    unboxing: false, 
    material: false, 
    comment:""
 });

  const [errors, setErrors] = useState({
    date: null, 
    origin: null, 
    destination: null, 
    truckType: null, 
    boxing: null, 
    unboxing: null, 
    material: null, 
    comment: null
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function handleCheck(event) {
    setState({
        ...state, [event.currentTarget.name]: !state[event.currentTarget.name]
    })
  }

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const newPost = {
            date: state.date, 
            origin: state.origin, 
            destination: state.destination, 
            truckType: state.truckType, 
            boxing: state.boxing, 
            unboxing: state.unboxing, 
            material: state.material, 
            comment: state.comment
          }

          console.log(newPost)

          await apiService.createPost(newPost);

          setErrors({date: "", origin: "", destination: "", truckType: "", boxing:"", unboxing:"", material:"", comment:"" });
          navigate("/success");
        } catch (err) {
          console.error(err);
          setErrors({ ...err.response.data.errors });
        }
      }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create new post</h1>

            <div>
                <label htmlFor="createPostFormDate">Desired date</label>
                <input
                type="date"
                name="date"
                id="createPostFormDate"
                value={state.date}
                error={errors.date}
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="createPostFormOrigin">Origin</label>
                <input
                type="text"
                name="origin"
                id="createPostFormOrigin"
                value={state.origin}
                error={errors.origin}
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="createPostFormDestination">Destination</label>
                <input
                type="text"
                name="destination"
                id="createPostFormDestination"
                value={state.destination}
                error={errors.destination}
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="createPostFormTruckType">Truck type</label>
                <select
                type="text"
                name="truckType"
                id="createPostFormTruckType"
                value={state.truckType}
                error={errors.truckType}
                onChange={handleChange} >

                <option value="small">small</option>
                <option value="middle">middle</option>
                <option value="large">large</option>

                </select>
            </div>

            <div>
                <label htmlFor="createPostFormBoxing">Boxing</label>
                <input
                type="checkbox"
                name="boxing"
                id="createPostFormBoxing"
                value={false}
                checked={state.boxing}
                error={errors.boxing}
                onChange={handleCheck}
                />
            </div>

            <div>
                <label htmlFor="createPostFormUnboxing">Unboxing</label>
                <input
                type="checkbox"
                name="unboxing"
                id="createPostFormUnboxing"
                value={false}
                checked={state.unboxing}
                error={errors.unboxing}
                onChange={handleCheck}
                />
            </div>

            <div>
                <label htmlFor="createPostFormUnboxing">Material</label>
                <input
                type="checkbox"
                name="material"
                id="createPostFormMaterial"
                value={false}
                checked={state.material}
                error={errors.material}
                onChange={handleCheck}
                />
            </div>

            <div>
                <label htmlFor="createPostFormFloor">Floor</label>
                <input
                type="number"
                name="floor"
                id="createPostFormFloor"
                value={state.floor}
                error={errors.floor}
                onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="createPostFormComment">Comment</label>
                <input
                type="text"
                name="comment"
                id="createPostFormComment"
                value={state.comment}
                error={errors.comment}
                onChange={handleChange}
                />
            </div>

            <div>
                <button type="submit">Create post</button>
            </div>
            </form>
    )
}

export default Post