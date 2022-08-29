import Proposal from "../components/Proposal"
import PostCard from "../components/PostCard"
import apiService from "../services/api.service"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"

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
        <div className='search-post-container'> 

        {posts.map((e) => {
            
            return(
                <div className = 'search-post-card gradient-border'>
                    <PostCard
                        date = {new Date(e.date).toLocaleDateString('pt-br')}
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
    </div>
    )
}

export default SearchPage

