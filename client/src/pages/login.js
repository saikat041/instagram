import React from 'react';
import { Link } from 'react-router-dom';

// MUI Stuff
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    form: {
        textAlign: "center"
    },
    loginButton: {
        marginTop: 20
    }
});


function Login() {

    const classes = useStyles();

    return (
        <Container>
            <div style={{marginTop:50}}>
            <Grid container spacing={1} className={classes.form}>
                <Grid item sm />

                <Grid item sm>
                    <Typography variant="h4">Login</Typography>
                    <TextField label="Email" name="email" type="email" fullWidth />
                    <TextField label="Password" name="password" type="password" fullWidth />
                    <Button variant="contained" color="primary" className={classes.loginButton}>Login</Button>
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