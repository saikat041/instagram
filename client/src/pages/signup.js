import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI Stuff
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const axios = require('axios');

const {validateSignupData} = require('../utils');

const useStyles = makeStyles({
    form: {
        textAlign: "center"
    },
    loginButton: {
        marginTop: 20
    },
    customError: {
        color: 'red',
        marginTop: 5
    },
    progrss:{
        position:'absolute'

    }
});


function SignUp(props) {

    const classes = useStyles();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function onChange(e){
        const value = e.target.value;

        switch(e.target.name){
            case 'name':
                setName(value);
                break;
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:

        }
    }


    function onSignup(){ 

        const {error} = validateSignupData({name, username, email, password, confirmPassword})

        if (error){ 
            return setError(error)
        }

        setLoading(true)
        axios.post('/api/auth/signup', 
        {
            name,
            username,
            email,
            password
        }
        )
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
            <div style={{marginTop:50}}>
            <Grid container spacing={1} className={classes.form}>
                <Grid item sm />

                <Grid item sm>
                    <Typography variant="h4">SignUp</Typography>
                    <TextField label="Name" name="name" type="text" fullWidth onChange={onChange}/>
                    <TextField label="Username" name="username" type="text" fullWidth onChange={onChange}/>
                    <TextField label="Email" name="email" type="email" fullWidth onChange={onChange}/>
                    <TextField label="Password" name="password" type="password" fullWidth onChange={onChange}/>
                    <TextField label="Confirm Password" name="confirmPassword" type="password" fullWidth onChange={onChange}/>

                    {error && (<Typography className={classes.customError}>{error}</Typography>)}

                    <Button disabled={loading} variant="contained" color="primary" className={classes.loginButton} onClick={onSignup}>
                    SignUp
                    {loading && <CircularProgress size={30} className={classes.progrss}/>}
                    
                    </Button>
                    <br />

                    <div style={{ marginTop: 10, textAlign: 'center' }}>
                        Already have an account ? Login <Link to="/login">here</Link>
                    </div>

                </Grid>

                <Grid item sm />

            </Grid>
            </div>
        </Container>
    );
}


export default SignUp