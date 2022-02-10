import {useParams} from "react-router-dom";
import axios from "axios";
import Post from "../components/Post/Post";
import {useState, useEffect} from "react";

const TagPage = () => {
    const [posts, setPosts] = useState([]);
    const params = useParams();


    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/tag/' + params.tag + '/post', {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response) {
                setPosts(response.data.data)
                console.log(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log(params.id)
            });
    }, [params])

    return(
        <div>
            <h3>#{params.tag}</h3>
            {posts.map((post)=> {
                return <Post post={post}/>
            })}
        </div>
    )
}

export default TagPage;