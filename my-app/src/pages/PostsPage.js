import {useParams} from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import Post from "../components/Post/Post";


const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const params = useParams();


    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/user/'+params.id+'/post/', {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response) {
                setPosts(response.data.data)
                console.log(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log(params.id)
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

export default PostsPage;