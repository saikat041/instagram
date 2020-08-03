import React from 'react';
import { Link } from 'react-router-dom';

// MUI Stuff
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    form: {
        textAlign: "center"
    },
    loginButton: {
        marginTop: 20
    }
});


function SignUp() {

    const classes = useStyles();

    return (
        <Container>
            <div style={{marginTop:50}}>
            <Grid container spacing={1} className={classes.form}>
                <Grid item sm />

                <Grid item sm>
                    <Typography variant="h4">SignUp</Typography>
                    <TextField label="Name" name="name" type="text" fullWidth />
                    <TextField label="Email" name="email" type="email" fullWidth />
                    <TextField label="Password" name="password" type="password" fullWidth />
                    <TextField label="Confirm Password" name="confirmPassword" type="password" fullWidth />
                    <Button variant="contained" color="primary" className={classes.loginButton}>SignUp</Button>
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