import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import '../App.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용

    // 로그인 요청 핸들러
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // 에러 메시지 초기화

        try {
            // 로그인 API 호출
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password
            });

            // JWT 토큰 저장
            localStorage.setItem('token', response.data.access_token);
            alert('로그인 성공!');
            navigate('/dashboard'); // 로그인 후 대시보드로 이동
        } catch (error) {
            setError('로그인에 실패했습니다. 사용자명을 확인하세요.');
        }
    };

    return (
        <div className="App-header">
            <div className="login-form">
                <h2>로그인</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="사용자 이름"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="login-button">로그인</button>
                </form>
                <p className="register-link">
                    <Link to="/register">회원가입</Link> {/* 회원가입 링크 추가 */}
                </p>
            </div>
        </div>
    );
}

export default Login;
