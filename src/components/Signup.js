// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/auth/register', {
                username,
                password
            });

            alert('회원가입 성공! 로그인 페이지로 이동합니다.');
            navigate('/login');
        } catch (error) {
            setError('회원가입에 실패했습니다. 사용자명을 확인하세요.');
        }
    };

    return (
        <div>
            <h2>회원가입</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSignup}>
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
                <button type="submit">회원가입</button>
            </form>
            <p>
                이미 가입하셨나요? <button onClick={() => navigate('/login')}>로그인</button>
            </p>
        </div>
    );
};

export default Signup;
