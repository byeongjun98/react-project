// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Switch 대신 Routes 사용
import Signup from './components/Signup';
import Login from './components/Login';
import MainPage from './components/MainPage';

const App = () => {
    return (
        <Router>
            <Routes> {/* Switch 대신 Routes 사용 */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<Login />} /> {/* 기본 경로 설정 */}
            </Routes>
        </Router>
    );
};

export default App;
