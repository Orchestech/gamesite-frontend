import React, { useState } from 'react';
import '../css/LogInComponent.css';
import { TextField, FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"

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
        }
        if (password === '') {
            setPasswordError(true);
        }
        if (email && password) {
            console.log(email, password)
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
                        required
                        variant="outlined"
                        color="warning"
                        type="email"
                        sx={{mb: 3}}
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
                        sx={{mb: 3}}
                        className={passwordError ? 'error' : ''}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        className='log_in_button'
                        color='warning'
                        sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3}} // Change the background color and text color here
                    >
                        Log In
                    </Button>
                </form>
                <small>Need an account? <Link to="/sign_up" className='register_link'>Register here</Link></small>
            </div>
        </div>
    );
}

export default LogInComponent;