import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar'
import Post from '../components/Post'

import Modal from '@material-ui/core/Modal';

import CreatePost from '../components/CreatePost';


function Home() {

    const [open, setOpen] = useState(false)

    function _openAddPostModal() {
        setOpen(true)
    }

    return (
        <div>
            <div>
                <Navbar openAddPostModal={_openAddPostModal} />
            </div>

            <Grid container>
                <Grid item sm={3} />
                <Grid item sm={4}>
                    <Post id="0" />
                </Grid>
                <Grid item sm={5} />
            </Grid>

            <Modal
                open={open}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <CreatePost/>
            </Modal>
        </div>
    )

}

export default Home