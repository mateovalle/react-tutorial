import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import blackAndWhiteTheme from '../../assets/blackAndWhiteTheme'
import {sessionActions} from "../../Redux/actions/sessionActions.tsx";
import './LoginPage.css'
import logo from '../../assets/logo.png'
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";


const LoginPage = () => {
    const [values, setValues] = React.useState<State>({
        username: '',
        password: '',
        showPassword: false,
    });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  loggedIn = window.localStorage.getItem('token')

    useEffect(() =>{
        if (loggedIn) navigate('/home')
    }, [loggedIn])



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


    const loginCallback = (statusNumber) => {
        if (statusNumber === 403) {
            console.log('wrong password')
            document.getElementById("passwordLabel").style.display = 'block';
        } else if (statusNumber === 200){
            document.getElementById("passwordLabel").style.display = 'none';
            navigate('/home')
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (values.password){
            console.log('dispatch login')
            dispatch(sessionActions.login.request({username: values.username, password: values.password, errorCallback: loginCallback}))
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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <FormControl fullWidth margin="normal" sx={{ mt: 1}} variant="outlined" >
                            <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                            <OutlinedInput
                                required
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
                        <label className={'validationLabel'} id='passwordLabel'>Wrong password or username</label>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default LoginPage;