import React, { useState } from 'react';
import '../css/LogInComponent.css';
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

const { REACT_APP_APIURL } = process.env;

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
        if (!validateEmail(email)) {
            setEmailError(true);
            event.preventDefault();
        }
        if (password.length < 8) {
            setPasswordError(true);
            event.preventDefault();
        }

        const data = {
            username: email,
            password: password
        };
        console.log(data);

        const baseUrl = `${REACT_APP_APIURL}/api/account/login`;
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
                Cookies.set('token', data.token, { expires: 1 / 24 });
                if (data.token !== undefined) {
                    window.location.href = '/';
                } else {
                    alert('Не верный логин или пароль!');
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

    const validateEmail = (email) => {
        // Email validation logic here
        // Return true if email is valid, false otherwise
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <div className='log_in_container'>
            <div className='log_in'>
                <h2>Форма входа</h2>

                <form autoComplete='off' onSubmit={handleSubmit}>
                    <TextField
                        label="Почта"
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
                        label="Пароль"
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
                        type='submit'
                        variant='contained'
                        className='log_in_button'
                        color='warning'
                        sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3 }} // Change the background color and text color here
                    >
                        Войти
                    </Button>
                </form>
                <small>Нет аккаунта? <Link to="/sign_up"> <span className='register_link'>Регестрируйся</span></Link></small>
            </div>
        </div>
    );
}

export default LogInComponent;