// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password
            });

            localStorage.setItem('token', response.data.access_token);
            alert('로그인 성공!');
            navigate('/main');
        } catch (error) {
            setError('로그인에 실패했습니다. 사용자명을 확인하세요.');
        }
    };

    return (
        <div>
            <h2>로그인</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">로그인</button>
            </form>
            <p>
                회원가입이 아직 안되셨나요? <button onClick={() => navigate('/signup')}>회원가입</button>
            </p>
        </div>
    );
};

export default Login;
