import { useParams, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import apiService from '../services/api.service';
import Navbar from '../components/Navbar';

const EditPostPage = () => {

    const navigate = useNavigate()

    const [post, setPost] = useState({ 
        date: null, 
        origin: "", 
        destination: "", 
        truckType: "", 
        boxing: false, 
        unboxing: false, 
        material: false, 
        floors: "", 
        comment:"" });

        const { postId } = useParams()
    
    useEffect(() => {
        async function getPostById(postId){
            try {
                const result = await apiService.getPostById(postId)
                setPost(result.data) 
            } catch(err) {
                console.log(err)
            }
        }
        getPostById()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
          const newPost = {
            date: post.date, 
            origin: post.origin, 
            destination: post.destination, 
            truckType: post.truckType, 
            boxing: post.boxing, 
            unboxing: post.unboxing, 
            material: post.material,
            floors: post.floors, 
            comment: post.comment
          }

          await apiService.editPost(newPost, postId);

          alert('Your post has been succesffully updated')
          navigate('/user-page')
        } catch (err) {
          alert('Something went wrong')
          console.error(err);
        }
      }

    return (
        <>
        <Navbar />
        <h1 id = 'edit-post'>Edit post</h1>
        <div className = 'signup-container'>
        <form className = "gradient-border" onSubmit={handleSubmit}>
            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormDate">Desired date</label>
                <input className = 'form-control'
                type="date"
                name={post.date}
                id="createPostFormDate"
                value={post.date}
                onChange={(e) => setPost({ ...post, date: e.target.value})}                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormOrigin">Origin</label>
                <input className = 'form-control'
                type="text"
                name={post.origin}
                id="createPostFormOrigin"
                value={post.origin}
                onChange={(e) => setPost({ ...post, origin: e.target.value})}                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormDestination">Destination</label>
                <input className = 'form-control'
                type="text"
                name={post.destination}
                id="createPostFormDestination"
                value={post.destination}
                onChange={(e) => setPost({ ...post, destination: e.target.value})}                  />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormTruckType">Select a truck type</label>
                <select className = 'form-control'
                type="text"
                name={post.truckType}
                id="createPostFormTruckType"
                value={post.truckType}
                onChange={(e) => setPost({ ...post, truckType: e.target.value})}   >

                <option value="small">small</option>
                <option value="middle">middle</option>
                <option value="large">large</option>

                </select>
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormBoxing">Need boxing?</label>
                <input className = 'form-check-input'
                type="checkbox"
                name={post.boxing}
                id="createPostFormBoxing"
                value={post.boxing}
                checked={post.boxing}
                onChange={(e) => setPost({ ...post, boxing: e.target.value})}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormUnboxing">Need unboxing?</label>
                <input className = 'form-check-input'
                type="checkbox"
                name={post.unboxing}
                id="createPostFormUnboxing"
                value={post.unboxing}
                checked={post.unboxing}
                onChange={(e) => setPost({ ...post, unboxing: e.target.value})}                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormMaterial">Need material?</label>
                <input className = 'form-check-input'
                type="checkbox"
                name={post.material}
                id="createPostFormMaterial"
                value={post.material}
                checked={post.material}
                onChange={(e) => setPost({ ...post, material: e.target.value})}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormFloor">Floors</label>
                <input className = 'form-control'
                type="number"
                name={post.floors}
                id="createPostFormFloor"
                value={post.floors}
                onChange={(e) => setPost({ ...post, floors: e.target.value})}
                />
            </div>

            <div className = 'form-item'>
                <label className = 'post-label' htmlFor="createPostFormComment">Comment</label>
                <input className = 'form-control'
                type="text"
                name={post.comment}
                id="createPostFormComment"
                value={post.comment}
                onChange={(e) => setPost({ ...post, comment: e.target.value})}
                />
            </div>

            <div>
                <button className = 'btn btn-primary btn-lg btn-block' id = 'create-post-btn' type="submit">Save changes</button>
            </div>
            </form>
            </div>
        </>
    )
}

export default EditPostPage