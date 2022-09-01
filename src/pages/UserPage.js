
import PostCard from "../components/PostCard"
import CreatePost from "../components/CreatePost"
import apiService from "../services/api.service"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../contexts/authContext";


const UserPage = () => {

    const [posts, setPosts] = useState([])
    const { loggedInUser} = useContext(AuthContext)
    const [refresh, setRefresh] = useState(false)

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
    }, [refresh])


    return (
    <div>
        <Navbar />   
        <div className = 'user-page-container'>
        <CreatePost style = {{width: "50%"}} 
                    setRefresh = {setRefresh} refresh = {refresh} 
        />
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
                        role = {loggedInUser.user.role}
                        setRefresh = {setRefresh} 
                        refresh = {refresh}
                        image = {loggedInUser.user.image}
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

