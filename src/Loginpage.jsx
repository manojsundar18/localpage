import React, { useState } from 'react';
const staticUsers = [
    { username: 'vijay@gmail.com', password: 'pavithra' },
    {username: 'murugesh@gmail.com', password: 'jeni'},
];
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin = (event) => {
        event.preventDefault();
        const user = staticUsers.find(user => user.username === username);
        if (user) {
            if (user.password === password) {
                setErrorMessage('');
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                alert('Login successful!');
            } else {
                setErrorMessage('Incorrect password');
            }
        } else {
            setErrorMessage('User not found');
        }
    };
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}
export default LoginPage;