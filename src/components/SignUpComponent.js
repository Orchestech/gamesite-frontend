import React, { useState } from 'react';
import '../css/SignUpComponent.css';
import { TextField, Container, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom"

const SignUpComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resume, setResume] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, password) 
    }
 
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
                        sx={{mb: 3}}
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
                        sx={{mb: 3}}
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
                        sx={{mb: 3}}
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