import Proposal from "../components/Proposal"
import PostCard from "../components/PostCard"
import apiService from "../services/api.service"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios"

const SearchPage = () => {

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        async function getPosts(){
            try {
                const result = await apiService.getActivePosts()
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
        {posts.map((e) => {
            return(
                <div>
                    <PostCard
                        date = {e.date}
                        origin = {e.origin}
                        destination = {e.destination}
                        truckType = {e.truckType}
                        boxing = {e.boxing}
                        unboxing = {e.unboxing}
                        material = {e.material}
                        floors = {e.floors}
                    />
                    <Proposal 
                        postId = {e._id}
                    />
                </div>
            )
        })}
    </div>
    )
}

export default SearchPage

