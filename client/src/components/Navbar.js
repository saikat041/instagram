import React from 'react';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import PostAddIcon from '@material-ui/icons/PostAdd';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';

import { join } from "../utils"

const axios = require('axios');

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
        fontSize: 26,
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
    listItem: {
        textDecoration: "none",
        display: "flex",
        padding: 10,
        color: "black",
        alignItems: "center",
        "&:hover": {
            background: "#fafafa"
        }
    },
    clickable: {
        cursor: "pointer"
    }
});

export default function Navbar(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function _handleProfileClick(event) {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    function _handledAddPostClick() {
        props.toggleModal(true)
    }

    function _handleLogoutClick(event) {
        axios.post('/api/auth/signout');
        props.history.push("/login");
    }

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
                        <PostAddIcon className={join(classes.clickable, classes.icons)} onClick={_handledAddPostClick} />
                        <HomeOutlinedIcon className={join(classes.clickable, classes.icons)} />
                        <FavoriteBorderOutlinedIcon className={join(classes.clickable, classes.icons)} />
                        <Avatar
                            alt="Profile Image"
                            src="/profile.JPG"
                            className={join(classes.clickable, classes.avatar, classes.iconFontSize)}
                            style={{ width: 26, height: 26 }}
                            onClick={_handleProfileClick}
                        />
                    </Grid>

                    <Grid item sm={2}>

                    </Grid>

                </Grid>
            </div>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div style={{ width: 200, borderRadius: 10 }}>
                    <Link className={classes.listItem} to="/profile">
                        <PersonOutlineRoundedIcon style={{ fontSize: 20 }} />  <span style={{ marginLeft: 10 }}>Profile</span>
                    </Link>

                    <Link className={classes.listItem} to="/setting">
                        <SettingsOutlinedIcon style={{ fontSize: 20 }} />  <span style={{ marginLeft: 10 }}>Setting</span>
                    </Link>

                    <div className={join(classes.listItem, classes.clickable)} onClick={_handleLogoutClick}>
                        <ExitToAppIcon style={{ fontSize: 20 }} />  <span style={{ marginLeft: 10 }}>Logout</span>
                    </div>
                </div>

            </Popover>

        </div>)
}
