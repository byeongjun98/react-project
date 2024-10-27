import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register'; // Register 컴포넌트 import

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />               {/* 기본 경로에 로그인 페이지 설정 */}
                <Route path="/login" element={<Login />} />          {/* /login 경로도 로그인 페이지로 */}
                <Route path="/register" element={<Register />} />     {/* 회원가입 페이지 경로 추가 */}
                {/* 추가할 다른 경로가 있다면 여기에 추가 */}
            </Routes>
        </Router>
    );
}

export default App;
