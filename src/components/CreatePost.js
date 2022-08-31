import { useState } from "react";
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
    floors: "", 
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
    floors: null,
    comment: null
  });

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
            floors: state.floors, 
            comment: state.comment
          }

          console.log(newPost)

          await apiService.createPost(newPost);

          setErrors({date: "", origin: "", destination: "", truckType: "", boxing:"", unboxing:"", material:"", comment:"", floors: ""});
          alert('Your post has been succesffully created')
          props.setRefresh(!props.refresh)
        } catch (err) {
          alert('Something went wrong')
          console.error(err);
          setErrors({ ...err.response.data.errors });
        }
      }

    return (
      <div id ='create-post-form'>
        <h1>Create a new post</h1>
        <form className = "gradient-border" onSubmit={handleSubmit}>
            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormDate">Desired date</label>
                <input className = 'form-control'
                type="date"
                name="date"
                id="createPostFormDate"
                value={state.date}
                error={errors.date}
                onChange={handleChange}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormOrigin">Origin</label>
                <input className = 'form-control'
                type="text"
                name="origin"
                id="createPostFormOrigin"
                value={state.origin}
                error={errors.origin}
                onChange={handleChange}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormDestination">Destination</label>
                <input className = 'form-control'
                type="text"
                name="destination"
                id="createPostFormDestination"
                value={state.destination}
                error={errors.destination}
                onChange={handleChange}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormTruckType">Select a truck type</label>
                <select className = 'form-control'
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

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormBoxing">Need boxing?</label>
                <input className = 'form-check-input'
                type="checkbox"
                name="boxing"
                id="createPostFormBoxing"
                value={false}
                checked={state.boxing}
                error={errors.boxing}
                onChange={handleCheck}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormUnboxing">Need unboxing?</label>
                <input className = 'form-check-input'
                type="checkbox"
                name="unboxing"
                id="createPostFormUnboxing"
                value={false}
                checked={state.unboxing}
                error={errors.unboxing}
                onChange={handleCheck}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormMaterial">Need material?</label>
                <input className = 'form-check-input'
                type="checkbox"
                name="material"
                id="createPostFormMaterial"
                value={false}
                checked={state.material}
                error={errors.material}
                onChange={handleCheck}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormFloor">Floors</label>
                <input className = 'form-control'
                type="number"
                name="floors"
                id="createPostFormFloor"
                value={state.floors}
                error={errors.floors}
                onChange={handleChange}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormComment">Comment</label>
                <input className = 'form-control'
                type="text"
                name="comment"
                id="createPostFormComment"
                value={state.comment}
                error={errors.comment}
                onChange={handleChange}
                />
            </div>

            <div>
                <button className = 'btn btn-primary btn-lg btn-block' id = 'create-post-btn' type="submit">Create post</button>
            </div>
            </form>
            </div>
    )
}

export default Post