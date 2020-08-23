import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import PostAddIcon from '@material-ui/icons/PostAdd';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    container: {
        background: "#fafafa",
        height: "100%"
    },
    navbar: {
        padding: 10,
        background: "#ffffff",
        borderBottom: "1px solid lightGrey"
    },
    searchBox: {
        outline: 0,
        lineHeight: "18px",
        fontSize: 14,
        padding: "3px 10px 3px 10px",
        border: "solid 1px #dbdbdb",
        borderRadius: 3,
        color: 'rgb(38, 38, 38)'
    },
    icons: {
        fontSize: 30,
        marginLeft: 15
    },
    link: {
        textDecoration: "none"
    },
    avatar: {
        width: 30,
        height: 30,
        display: "inline-block",
        marginLeft: 15
    },
});

export default function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <div className={classes.navbar}>

                <Grid container spacing={1}>

                    <Grid item sm={3} />

                    <Grid item sm>
                        <Link to="/"> <img alt="Instagram" src="instagram.png" style={{ objectFit: 'cover' }}></img> </Link>
                    </Grid>

                    <Grid item sm >
                        <input className={classes.searchBox} placeholder="Search"></input>
                    </Grid>

                    <Grid item sm >
                        <PostAddIcon className={classes.icons}/>
                        <HomeOutlinedIcon className={classes.icons} />
                        <FavoriteBorderOutlinedIcon className={classes.icons} />
                        <Avatar alt="Profile Image" src="/profile.JPG" className={classes.avatar}/>
                    </Grid>

                    <Grid item sm={2}>

                    </Grid>

                </Grid>

            </div>


        </div>)
}
