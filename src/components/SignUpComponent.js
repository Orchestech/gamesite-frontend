import React, { useState } from 'react';
import '../css/SignUpComponent.css';
import { TextField, Container, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom"
import Cookies from 'js-cookie';

const SignUpComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resume, setResume] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            username: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            resume: resume
        };
    
        const baseUrl = 'http://localhost:3000/api/account/register';
        const queryString = new URLSearchParams(data).toString();
        const url = `${baseUrl}?${queryString}`;
        fetch(url, {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                // Handle response from backend
                console.log(data);
                Cookies.set('token', data.token);
                if (data.token !== undefined) {
                    window.location.href = '/';
                }
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });

    }


    const inputStyles = {
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
    };

    const labelStyles = {
        style: {
            color: '#e2dbda', // Замените 'yourColor' на цвет, который вы хотите использовать
        },
    };

    const inputPropsStyles = {
        style: {
            color: '#e2dbda', // Здесь мы устанавливаем цвет текста на белый
        },
    };

    return (
        <div className='sign_up_container'>
            <div className='sign_up'>
                <h2>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                        <TextField
                            type="text"
                            variant='outlined'
                            color='warning'
                            label="First Name"
                            onChange={e => setFirstName(e.target.value)}
                            value={firstName}
                            fullWidth
                            required
                            sx={inputStyles}
                            InputLabelProps={labelStyles}
                            InputProps={inputPropsStyles}
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            color='warning'
                            label="Last Name"
                            onChange={e => setLastName(e.target.value)}
                            value={lastName}
                            fullWidth
                            required
                            sx={inputStyles}
                            InputLabelProps={labelStyles}
                            InputProps={inputPropsStyles}
                        />
                    </Stack>
                    <TextField
                        type="email"
                        variant='outlined'
                        color='warning'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                        required
                        sx={inputStyles}
                        InputLabelProps={labelStyles}
                        InputProps={inputPropsStyles}
                    />
                    <TextField
                        type="password"
                        variant='outlined'
                        color='warning'
                        label="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        required
                        fullWidth
                        sx={inputStyles}
                        InputLabelProps={labelStyles}
                        InputProps={inputPropsStyles}
                    />
                    <TextField
                        multiline
                        rows={2}
                        variant='outlined'
                        color='warning'
                        label="Resume"
                        onChange={e => setResume(e.target.value)}
                        value={resume}
                        required
                        fullWidth
                        sx={inputStyles}
                        InputLabelProps={labelStyles}
                        InputProps={inputPropsStyles}
                    />
                    <Button type='submit'
                        variant='contained'
                        className='log_in_button'
                        color='warning'
                        sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3}}>Register</Button>
                </form>
                <small>Already have an account? <Link to="/log_in" className='register_link'>Login Here</Link></small>
            </div>
        </div>
    )
}

export default SignUpComponent;
