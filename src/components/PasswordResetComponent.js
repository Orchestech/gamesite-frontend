import React, { useState } from 'react';

const PasswordResetComponent = () => {
    const [password, setPassword] = useState('');


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер и проверки введенных данных
        console.log('Password:', password);
    };

    return (
        <div className='password_reset'>
            <h2>New password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">OK</button>
            </form>
        </div>
    );
};

export default PasswordResetComponent;