
import PostCard from "../components/PostCard"
import CreatePost from "../components/CreatePost"
import apiService from "../services/api.service"
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios"

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
        <CreatePost />
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
                </div>
            )
        })}
    </div>
    )
}

export default UserPage

