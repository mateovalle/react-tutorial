import './Post.css';
import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import Comment from "../Comment/Comment";


const Post = (props) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/post/' +props.post.id + '/comment', {headers: {'app-id': "6203cac620dca44319e5e397"}})
            .then(function (response) {
                console.log(response)
                setComments(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const navigate = useNavigate();

    const goToPosts = (tagName) => {
        navigate('/tag/' + tagName)
    }
    const date = new Date(props.post.publishDate);

    return(
        <div className={"postContainer"}>
            <div className={"profileData"}>
                <img src={props.post.owner.picture} />
                <div className={"topInfo"}>
                    <span className={"username"}><b>{props.post.owner.firstName + " " + props.post.owner.lastName}</b></span>
                    <span className={"date"}>{date.toDateString()}</span>
                </div>
            </div>
            <div className={"imageContainer"}>
                <img src={props.post.image}/>
            </div>
            <span className={"description"}>{props.post.text}</span>
            <span className={"likes"}>&#9829; {props.post.likes}  </span>

            <div className={"tagsContainer"}>
                {props.post.tags.map((tag)=> {
                    return (<button className={"tag"} onClick={(i) => goToPosts(tag) }>{tag}</button>)
                })}
            </div>
            <div className={"comments"}>
                {comments.map((comment) => {
                    return <Comment comment={comment}/>
                })}
            </div>
        </div>
    )
}

export default Post;