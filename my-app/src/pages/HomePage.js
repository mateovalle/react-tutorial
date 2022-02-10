import axios from "axios";
import Post from "../components/Post/Post";
import {useState, useEffect} from "react";

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response) {
                setPosts(response.data.data)
                console.log(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return(
        <div>
            {posts.map((post)=> {
                return <Post post={post}/>
            })}
        </div>
    )
}

export default HomePage;