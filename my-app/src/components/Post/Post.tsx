import './Post.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const Post = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    return (<button className={"tag"} key={tag} onClick={(i) => navigate('/tag/'+tag) }>{tag}</button>)
                })}
            </div>
        </div>
    )
}

export default Post;