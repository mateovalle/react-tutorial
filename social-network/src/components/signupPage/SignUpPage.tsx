import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    FormControl,
    Grid, IconButton, InputAdornment, InputLabel,
    Link, OutlinedInput,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import blackAndWhiteTheme from '../../assets/blackAndWhiteTheme'
import Container from "@mui/material/Container";
import {sessionActions} from "../../Redux/actions/sessionActions.tsx";
import * as React from "react";
import logo from '../../assets/logo.png'
import {Visibility, VisibilityOff} from "@mui/icons-material";


const SignUpPage = () => {
    const [values, setValues] = React.useState<State>({
        email: '',
        username: '',
        password: '',
        showPassword: false,
    });
    const [emailError, setEmailError] = useState({})
    const [usernameError, setUsernameError] = useState({})
    const [passwordError, setPasswordError] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loggedIn = !!window.localStorage.getItem('token')

    useEffect(() => {
        console.log(loggedIn)
        if (loggedIn) navigate('/home')
    },[loggedIn])

    const handleChange =(prop) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const errorCallback = () => {
        return
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!emailValidation(values.email)){
            setEmailError({error: 'error', helperText: 'Invalid email'})
        } else {setEmailError({})}
        if (values.password === ''){
            setPasswordError({error: 'error', helperText: "Invalid email"})
        } else {setPasswordError({})}
        if (values.username === '') {
            setUsernameError({error: 'error', helperText: "Invalid email"})
        } else {setEmailError({})}
        if (emailValidation(values.email) && values.password && values.username){
            dispatch(sessionActions.signUp.request({email: values.email, username: values.username, password: values.password, errorCallback: errorCallback}))
        }
    };


    return (
        <ThemeProvider theme={blackAndWhiteTheme}>
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
                    <img src={logo} className={'loginLogo'} />
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <FormControl fullWidth margin="normal" sx={{ mt: 1}} variant="outlined" >
                        <InputLabel htmlFor="outlined-adornment-password">Email adress</InputLabel>
                        <OutlinedInput
                            required
                            {...emailError}
                            id="email"
                            type='text'
                            value={values.email}
                            onChange={handleChange('email')}
                            label="Email"
                        />
                    </FormControl>
                        <FormControl fullWidth margin="normal" sx={{ mt: 1}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                            <OutlinedInput
                                required
                                {...usernameError}
                                id="username"
                                type='text'
                                value={values.username}
                                onChange={handleChange('username')}
                                label="Username"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mt: 1}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                required
                                {...passwordError}
                                id="password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
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
            </Container>
        </ThemeProvider>
    );
}

export default SignUpPage



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