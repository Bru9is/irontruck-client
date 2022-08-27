
import PostCard from "../components/PostCard"
import CreatePost from "../components/CreatePost"
import apiService from "../services/api.service"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"


const UserPage = () => {

    const navigate = useNavigate()

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
        <CreatePost />
        {posts.map((e) => {
            return(
                <div>
                    <PostCard 
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
                    <Link className="btn" to={`/${e._id}/all-proposals`}>
                        See company proposals
                    </Link>
                </div>
            )
        })}
    </div>
    )
}

export default UserPage

