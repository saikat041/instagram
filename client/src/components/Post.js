import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


import { join } from '../utils'

const useStyles = makeStyles({
    container: {
        padding: "1px, 1px 0px, 1px",
        border: "solid 1px #dbdbdb",
        borderRadius: 3,
        background: "white",
        marginBottom: 10
    },
    header: {
        padding: 10,
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30
    },
    img: {
        objectFit: 'cover',
        maxWidth: '100%'
    },
    userName: {
        color: 'black',
        fontWeight: 500,
        marginLeft: 15
    },
    link: {
        textDecoration: 'none',
        color: 'black'
    },
    bold: {
        fontWeight: 500
    },
    comments: {
        maxHeight: 100,
        overflowY: 'auto'
    },
    timestamp: {
        fontSize: 10,
        color: "#8E8E8E",
        marginTop: 10
    },
    line: {
        borderTop: "1px solid #ccc",
        marginTop: "10px"
    },
    input: {
        outline: "none",
        border: "0px",
        borderRadius: 4,
        padding: "12px 12px",
        width: "100%"
    },
    postButton: {
        fontWeight: 600,
        float: "right",
        textTransform: "none"
    }
});


export default function Post(props) {
    const classes = useStyles();
    const { post } = props;

    const [liked, setLiked] = useState(post.liked);
    const [comments, setComments] = useState(post.comments);
    const [newComment, setNewComment] = useState("");

    function handleLike() {
        setLiked(!liked)
    }

    function handleCommentPost(e) {
        setNewComment(e.target.value)
    }

    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <Link to={`/${post.userName}`} className={classes.link}>
                    <Avatar alt="Profile Image" src={post.user.profileImage} className={classes.avatar} />
                </Link>
                <Link to={`/${post.user.userName}`} className={join(classes.userName, classes.link)}>{post.user.userName}</Link>
            </div>

            <div>
                <img alt="Post" src={post.img} className={classes.img} />
            </div>

            <div style={{ padding: "12px 12px 0px 12px" }}>

                <div style={{ marginBottom: 7 }}>
                    <IconButton onClick={handleLike} size='small' style={{ padding: 0 }}>
                        {liked ?
                            <FavoriteIcon style={{ color: "red" }} /> :
                            <FavoriteBorderIcon style={{ color: 'black' }} />}
                    </IconButton>
                </div>


                <div style={{ marginBottom: 7 }}>
                    Liked by <Link className={join(classes.link, classes.bold)} to="/login">sahil </Link> and
                    <span className={classes.bold} style={{ cursor: 'pointer' }}> 56 </span>
                    others
                </div>

                {/* Post Message */}
                <div style={{ marginBottom: 7 }}>
                    <span className={classes.bold}>{props.userName}</span> {post.caption}
                </div>

                {/* Comments */}
                <div className={join(classes.comments, 'hideScrollbar')}>
                    {
                        comments.map((comment) => (
                            <div key={comment.id}>
                                <Link className={join(classes.link, classes.bold)} to={`/${comment.userName}`}> {comment.userName} </Link>
                                {comment.text}
                            </div>
                        ))
                    }

                </div>

                {/* timestamp */}
                <div className={classes.timestamp}> 2 DAYS AGO</div>

            </div>


            <div className={classes.line}></div>

            {/* Comment Box */}
            <Grid container>
                <Grid item sm={10}>
                    <input className={classes.input} placeholder="Add a comment..." onChange={handleCommentPost}></input>
                </Grid>

                <Grid item sm={2}>
                    <Button color="primary" disabled={newComment.trim().length === 0} className={classes.postButton}>Post</Button>
                </Grid>
            </Grid>

        </div>
    )
}
