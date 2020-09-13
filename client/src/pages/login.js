import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI Stuff
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const axios = require('axios');

const {validateSigninData} = require('../utils')


const useStyles = makeStyles({
    form: {
        textAlign: "center"
    },
    loginButton: {
        marginTop: 20,
        position:'relative'
    },
    customError: {
        color: 'red',
        marginTop: 5
    },
    progrss:{
        position:'absolute'

    }
});



function Login(props) {

    const classes = useStyles();

    // states
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function onChange(e){
        const value = e.target.value
        switch(e.target.name){
            case 'username':
                setUsername(value);
                break
            case 'password':
                setPassword(value);
                break
            default:
        }
    }

    function onClick() {

        const {error} = validateSigninData({username, password});

        if (error){
            return setError(error)
        }

        setLoading(true)
        axios.post('/api/auth/signin', {
            username,
            password
        })
        .then(function(res){
            props.history.push("/");
        })
        .catch(function(err){
            setLoading(false)
            setError(err.response.data)
        })
    }

    return (
        <Container>
            <div style={{ marginTop: 50 }}>
                <Grid container spacing={1} className={classes.form}>
                    <Grid item sm />

                    <Grid item sm>
                        <Typography variant="h4">Login</Typography>

                        <TextField label="Username" name="username" type="text" fullWidth onChange={onChange} />
                        <TextField label="Password" name="password" type="password" fullWidth onChange={onChange} />
                        
                        {error && (<Typography className={classes.customError}>{error}</Typography>)}

                        <Button disabled={loading} variant="contained" color="primary" className={classes.loginButton} onClick={onClick}>
                        Login
                        {loading && <CircularProgress size={30} className={classes.progrss}/>}
                            
                        </Button>

                        <div style={{ marginTop: 10 }}>
                            dont have an account ? sign up <Link to="/signup">here</Link>
                        </div>

                    </Grid>

                    <Grid item sm />

                </Grid>
                </div>
        </Container>
    );
}


export default Login