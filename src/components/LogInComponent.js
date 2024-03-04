import React, { useState } from 'react';
import '../css/LogInComponent.css';

const LogInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер и проверки введенных данных
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className='log_in'>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LogInComponent;