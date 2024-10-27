import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import '../App.css'; // CSS 파일 import

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // 회원가입 요청 핸들러
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // 에러 메시지 초기화

        try {
            // 회원가입 API 호출
            await axios.post('http://localhost:3000/auth/register', {
                username,
                password
            });

            alert('회원가입 성공! 로그인 해주세요.');
            navigate('/'); // 로그인 페이지로 리다이렉트
        } catch (error) {
            setError('회원가입에 실패했습니다. 사용자명을 확인하세요.');
        }
    };

    return (
        <div className="App-header">
            <div className="login-form"> {/* 기존 로그인 폼 스타일 사용 */}
                <h2>회원가입</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleRegister}>
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
                    <button type="submit">회원가입</button>
                </form>
                <p>
                    <Link to="/login" className="register-link">이미 회원이신가요? 로그인하기</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
