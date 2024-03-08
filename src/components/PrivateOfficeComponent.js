import React, { useState } from 'react';
import '../css/PrivateOfficeComponent.css';
import { TextField, Container, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom"

const PrivateOfficeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resume, setResume] = useState('')
    const [showForm, setShowForm] = useState(false); // Add state for showing/hiding the form
    const [editProfile, setEditProfile] = useState(false); // Add state for editing profile
    const [savedProfile, setSavedProfile] = useState(false); // Add state for saved profile
    const [savedPassword, setSavedPassword] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, password);
        setSavedProfile(true); // Set savedProfile state to true
    }

    function toggleForm() {
        setShowForm(!showForm); // Toggle the showForm state
    }

    function toggleEditProfile() {
        setEditProfile(!editProfile); // Toggle the editProfile state
        setSavedProfile(false); // Reset savedProfile state to false
    }

    function toggleEditPassword() {
        setSavedPassword(false); // Reset savedProfile state to false
    }
 
    return (
        <div className='private_office_container'>
            <div className='container'>
                <div className='private_office'>
                    <h2>Private office</h2>
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
                                disabled={!editProfile} // Disable the input field when editProfile is false
                                InputProps={{ style: { color: 'white' } }} // Set the text color to white
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
                                disabled={!editProfile} // Disable the input field when editProfile is false
                                InputProps={{ style: { color: 'white' } }} // Set the text color to white
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
                            disabled={true} // Disable the input field when editProfile is false
                            InputProps={{ style: { color: 'white' } }} // Set the text color to white
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
                            disabled={!editProfile} // Disable the input field when editProfile is false
                            InputProps={{ style: { color: 'white' } }} // Set the text color to white
                        />
                        {editProfile ? (
                            <Button type='submit'
                                variant='contained'
                                className='log_in_button'
                                color='warning'
                                sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3}}
                                disabled={savedProfile} // Disable the button when savedProfile is true
                            >
                                {savedProfile ? 'Profile Saved' : 'Save Profile'}
                            </Button>
                        ) : (
                            <Button type='button'
                                variant='contained'
                                className='log_in_button'
                                color='warning'
                                sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3}}
                                onClick={toggleEditProfile}
                            >
                                Edit Profile
                            </Button>
                        )}
                    </form>
                </div>
                <span onClick={toggleForm} className='new_password_button'>New password?</span> {/* Add a button to toggle the form */}
                    {showForm && ( // Conditionally render the form based on the showForm state
                        <form onSubmit={handleSubmit}>
                            <TextField
                                type="password"
                                variant='outlined'
                                color='warning'
                                label="Old Password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                required
                                fullWidth
                                sx={{mb: 3, mt: 3}}
                                InputProps={{ style: { color: 'white' } }} // Set the text color to white
                            />
                            <TextField
                                type="password"
                                variant='outlined'
                                color='warning'
                                label="New password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                                required
                                fullWidth
                                sx={{mb: 3, mt: 3}}
                                InputProps={{ style: { color: 'white' } }} // Set the text color to white
                            />
                            <Button type='submit'
                                variant='contained'
                                className='log_in_button'
                                color='warning'
                                onClick={setSavedPassword}
                                sx={{ backgroundColor: '#58363d', color: 'white', paddingX: 10, marginBottom: 3}}
                                disabled={savedPassword} // Disable the button when savedProfile is true
                            >
                                {savedPassword ? 'Password Saved' : 'Save Password'}
                            </Button>
                        </form>
                    )}
            </div>
        </div>
    )
}

export default PrivateOfficeComponent;