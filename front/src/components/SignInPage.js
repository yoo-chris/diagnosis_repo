import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const SignInPage = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsAuthenticated(true);
        navigate('/diagnosis');
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleSignIn}>
                <h1>Sign in</h1>
                <LoadingSpinner />
                <span>or use your account</span>
                <div className="infield">
                    <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label></label>
                </div>
                <div className="infield">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label></label>
                </div>
                <button type="submit" className="forgot">Forgot your password?</button>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInPage;