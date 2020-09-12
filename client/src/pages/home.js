import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Modal from '@material-ui/core/Modal';

import CreatePost from '../components/CreatePost';

const axios = require('axios');
// mock data
const { posts: posts_ } = require('../mockData')


function Home(props) {

    const [open, setOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const [mounted, setMounted] = useState(false)

    // trick to use componentWillMount
    // if posts is not set yet then fetch recent postd from server
    if (!mounted) {
        setMounted(true)    
        axios.get('/api/posts')
            .then(function (res) {
                setPosts(posts_)
            })
            .catch(function (err) {
                // catch unauthorized request error and redirect to login
                if(err.response.status == 401){
                    props.history.push("/login");
                }else{
                    console.log(err)
                }
            })
    }


    function _openAddPostModal() {
        setOpen(true)
    }

    return (
        <div>
            <div>
                <Navbar history={props.history} openAddPostModal={_openAddPostModal} />
            </div>

            <Grid container>
                <Grid item sm={3} />
                <Grid item sm={4}>
                    {posts.map(post => <Post  key={post.id} post={post} />)}
                </Grid>
                <Grid item sm={5} />
            </Grid>

            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <CreatePost />
            </Modal>
        </div>
    )

}

export default Home