import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Player from './pages/Player';
import Navbar from './components/Navbar'; // GNB 메뉴 컴포넌트 import
import Footer from './components/Footer'; // Footer 컴포넌트 import

function App() {
    const isLoggedIn = !!localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* 로그인한 경우에만 대시보드 및 기타 페이지 접근 가능 */}
                <Route
                    path="/dashboard"
                    element={isLoggedIn ? <>
                        <Navbar />
                        <Dashboard />
                        <Footer />
                    </> : <Navigate to="/" />}
                />
                <Route
                    path="/products"
                    element={isLoggedIn ? <>
                        <Navbar />
                        <Product />
                        <Footer />
                    </> : <Navigate to="/" />}
                />
                <Route
                    path="/players"
                    element={isLoggedIn ? <>
                        <Navbar />
                        <Player />
                        <Footer />
                    </> : <Navigate to="/" />}
                />

                {/* 로그인하지 않은 경우 로그인 페이지로 리다이렉트 */}
                <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/"} />} />
            </Routes>
        </Router>
    );
}

export default App;
