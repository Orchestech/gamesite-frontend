import React from 'react';

const PrivateOfficeComponent = () => {
    // Personal data
    const photo = 'path/to/photo.jpg';
    const login = 'username';
    const password = '********';
    const resume = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

    return (
        <div>
            <h1>Private Office</h1>
            <div>
                <img src={photo} alt="Profile Photo" />
            </div>
            <div>
                <label>Login:</label>
                <span>{login}</span>
            </div>
            <div>
                <label>Password:</label>
                <span>{password}</span>
            </div>
            <div>
                <label>Resume:</label>
                <p>{resume}</p>
            </div>
        </div>
    );
};

export default PrivateOfficeComponent;
