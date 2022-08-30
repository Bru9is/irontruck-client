
import PostCard from "../components/PostCard"
import CreatePost from "../components/CreatePost"
import apiService from "../services/api.service"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const UserPage = () => {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function getPosts(){
            try {
                const result = await apiService.getPosts()
                setPosts(result.data) 
            } catch(err) {
                console.log(err)
            }
        }
        getPosts()
    }, [])


    return (
    <div>
        <Navbar />   
        <div className = 'user-page-container'>
        <CreatePost style = {{width: "50%"}}/>
        <div className = 'post-container'>
        <h1>Your posts</h1>
        {posts.map((e) => {
            return(
                
                <div className = 'post-card gradient-border'>
                    
                    <PostCard
                        postId={e._id} 
                        key = {e._id}
                        date = {new Date(e.date).toLocaleDateString('pt-br')}
                        origin = {e.origin}
                        destination = {e.destination}
                        truckType = {e.truckType}
                        boxing = {e.boxing}
                        unboxing = {e.unboxing}
                        material = {e.material}
                        floors = {e.floors}
                    />
                    <Link className="btn btn-primary btn-sm" to={`/${e._id}/all-proposals`}>
                        See company proposals
                    </Link>
                </div>
            )
        })}
        </div>
    </div>
    </div> 
    )
}


export default UserPage

