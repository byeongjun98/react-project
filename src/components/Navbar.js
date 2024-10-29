import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // 스타일을 추가합니다.

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/products">Product</Link></li>
                <li><Link to="/players">Player</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
