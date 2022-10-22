//post with username, date, content, comments and likes

import {Card, CardHeader} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const PostTag = ({post, comments, likes, username}) => {

    return(
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                        {username.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={username}
                subheader={post.created_on}
            />
            <Typography>
                {post.text}
            </Typography>

        </Card>
    )

}

export default PostTag;