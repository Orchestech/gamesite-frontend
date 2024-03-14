import React, { useState } from 'react';
import '../css/LogInComponent.css';
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

const LogInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailError(false);
        setPasswordError(false);
    
        if (email === '') {
            setEmailError(true);
            event.preventDefault();
        }
        if (password === '') {
            setPasswordError(true);
            event.preventDefault();
        }
        const data = {
            username: email,
            password: password
        };
        console.log(data);

        const baseUrl = 'http://localhost:3000/api/account/login';
        const queryString = new URLSearchParams(data).toString();
        const url = `${baseUrl}?${queryString}`;
        fetch(url, {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                // Handle response from backend
                console.log(data);
                // Store token in cookie
                Cookies.set('token', data.token);
                if (data.token !== undefined) {
                    window.location.href = '/';
                }
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
        if (email && password) {
            console.log(email, password);
        }
    }

    return (
        <div className='log_in_container'>
            <div className='log_in'>
                <h2>Log In Form</h2>
                
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <TextField 
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        variant="outlined"
                        color="warning"
                        type="email"
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#e2dbda', // Замените 'desiredColor' на цвет, который вы хотите использовать
                                },
                                '&:hover fieldset': {
                                    borderColor: '#e2dbda', // Замените 'desiredColor' на цвет, который вы хотите использовать
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#e2dbda', // Замените 'desiredColor' на цвет, который вы хотите использовать
                                },
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#e2dbda', // Замените 'yourColor' на цвет, который вы хотите использовать
                            },
                        }}
                        InputProps={{
                            style: {
                                color: '#e2dbda', // Здесь мы устанавливаем цвет текста на белый
                            },
                        }}
                        fullWidth
                        value={email}
                        error={emailError}
                        className={emailError ? 'error' : ''}
                    />
                    <TextField
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                        required
                        variant="outlined"
                        color="warning"
                        type="password"
                        value={password}
                        error={passwordError}
                        fullWidth
                        sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#e2dbda', // Замените 'desiredColor' на цвет, который вы хотите использовать
                                },
                                '&:hover fieldset': {
                                    borderColor: '#e2dbda', // Замените 'desiredColor' на цвет, который вы хотите использовать
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#e2dbda', // Замените 'desiredColor' на цвет, который вы хотите использовать
                                },
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#e2dbda', // Замените 'yourColor' на цвет, который вы хотите использовать
                            },
                        }}
                        className={passwordError ? 'error' : ''}
                        InputProps={{
                            style: {
                                color: '#e2dbda', // Здесь мы устанавливаем цвет текста на белый
                            },
                        }}
                    />
                    <Button
                    on
                        type='submit'
                        variant='contained'
                        className='log_in_button'
                        color='warning'
                        sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3}} // Change the background color and text color here
                    >
                        Log In
                    </Button>
                </form>
                <small>Need an account? <Link to="/sign_up"> <span className='register_link'>Register here</span></Link></small>
            </div>
        </div>
    );
}

export default LogInComponent;