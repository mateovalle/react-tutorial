import './Comment.css'

const Comment = (props) => {


    return(
        <div className={"commentContainer"}>
            <span className={"commentData"}><b>{props.comment.owner.firstName + props.comment.owner.lastName}</b> {props.comment.message}</span>
        </div>
    )
}

export default Comment;