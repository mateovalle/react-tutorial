import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from "react-router-dom";
import {Chip} from "@mui/material";

const PostMUI = ({post}) => {
    const navigate = useNavigate()
    return (
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar alt={post.owner.lastName}  src={post.owner.picture}/>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={post.owner.firstName + " " + post.owner.lastName}
                    subheader={new Date(post.publishDate).toDateString()}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={post.image}
                    alt={post.owner.lastName}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.text}
                    </Typography>
                    {post.tags.map((tag) => {
                        return (<Chip label={tag} key={tag} onClick={(i) => navigate('/tag/'+tag) } />)
                    })}
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> {post.likes}
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
    );
}
export default PostMUI