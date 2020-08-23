import React from 'react';

import Grid from '@material-ui/core/Grid';
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { Container } from '@material-ui/core';


function Home() {

    const post = {

    }

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <Grid container>
                <Grid item sm = {3}/>
                <Grid item sm = {4}>
                    <Post id="0"/>
                </Grid>
                <Grid item sm = {2}/>
                <Grid item sm = {3}/>
            </Grid>


        </div>
    )

}

export default Home