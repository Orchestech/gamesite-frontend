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
    const [oldPassword, setOldPassword] = useState(false);
    const [betaAccess, setbetaAccess] = useState(false);

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
    return (
        <div className='private_office_container'>
            <div className='container'>
                <div className='private_office'>
                    <h2 className='private_office_title'>Private office</h2>
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
                                disabled={!editProfile} // Disable the input field when editProfile is false
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
                            disabled={true} // Disable the input field when editProfile is false
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
                            disabled={!editProfile} // Disable the input field when editProfile is false
                            sx={inputStyles}
                            InputLabelProps={labelStyles}
                            InputProps={inputPropsStyles}
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
                <div className='private_office'>
                    <h2 className='beta_title'>Beta test</h2>
                    <p><span className='beta_status'>Your status: </span>You in line now</p>
                    {betaAccess && <p className='download_link'>Your link</p>}
                </div>
                <span onClick={toggleForm} className='new_password_button'>New password?</span> 
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
                            sx={inputStyles}
                            InputLabelProps={labelStyles}
                            InputProps={inputPropsStyles} // Set the text color to white
                        />
                        <TextField
                            type="password"
                            variant='outlined'
                            color='warning'
                            label="New password"
                            onChange={e => setOldPassword(e.target.value)}
                            value={oldPassword}
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