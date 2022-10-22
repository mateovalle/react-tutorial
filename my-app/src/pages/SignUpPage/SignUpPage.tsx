import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as React from "react";
import {signUp} from "../../Redux/actions/actions.tsx";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {State} from "../../Redux/store";
import {useEffect} from "react";

const SignUpPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  loggedIn = useSelector((state: State) => {return state.session.token})

    useEffect(() =>{
        console.log(loggedIn)
        if (loggedIn) navigate('/home')
    }, [loggedIn])


    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Mateo Valle
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const theme = createTheme();

    const errorCallback = () => {
        return
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        if (!emailValidation(data.get('email'))){
            console.log('invalid email')
            document.getElementById('emailLabel').style.display = 'block';
        } else {document.getElementById('emailLabel').style.display = 'none';}
        if (data.get('password') === ''){
            console.log('incorrect password')
            document.getElementById("passwordLabel").style.display = 'block';
        } else {document.getElementById("passwordLabel").style.display = 'none';}
        if (data.get('username') === '') {
            console.log('invalid username')
            document.getElementById('usernameLabel').style.display = 'block';
        } else {            document.getElementById('usernameLabel').style.display = 'none';}
        if (emailValidation(data.get('email')) && data.get('password') && data.get('username')){
            dispatch(signUp({email: data.get('email'), username: data.get('username'), password: data.get('password'), errorCallback: errorCallback}))
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <label className={'validationLabel'} id='emailLabel'>Please enter a valid email adress</label>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="Username"
                            type="text"
                            id="username"
                            autoComplete="username"
                        />
                        <label className={'validationLabel'} id='usernameLabel'>Please enter a valid email username</label>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <label className={'validationLabel'} id='passwordLabel'>Please enter a password</label>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>

                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

const emailValidation = email => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        )
    ) {
        return true;
    }
    if (email.trim() === '') {
        return false;
    }
    return false;
};

export default SignUpPage;