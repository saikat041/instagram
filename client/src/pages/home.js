import React, { useState } from 'react';

// MUI stuffs
import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Modal from '@material-ui/core/Modal';

import CreatePost from '../components/CreatePost';

const axios = require('axios');

function Home(props) {

    const [open, setOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const [mounted, setMounted] = useState(false)

    // trick to use componentWillMount
    // if posts is not set yet then fetch recent postd from server
    if (!mounted) {
        setMounted(true)    
        axios.get('/api/posts')
            .then(function (response) {
                setPosts(response.data.posts)
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

    function _toggleModal(open) {
        setOpen(open)
    }

    return (
        <div>
            <div>
                <Navbar history={props.history} toggleModal={_toggleModal} />
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
                <CreatePost toggleModal={_toggleModal}/>
            </Modal>
        </div>
    )

}

export default Home