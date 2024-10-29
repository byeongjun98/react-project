import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('로그인 필요');
            return;
        }

        const fetchData = async () => {
            try {
                const [productResponse, playerResponse] = await Promise.all([
                    axios.get('http://localhost:3000/product', {
                        headers: { Authorization: `Bearer ${token}` }
                    }),
                    axios.get('http://localhost:3000/player/list', {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                ]);

                setProducts(productResponse.data);
                setPlayers(playerResponse.data);
            } catch (err) {
                setError('데이터를 불러오는 데 실패했습니다.');
            }
        };

        fetchData();
    }, []);

    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="dashboard">
            <h2>대시보드</h2>
            <div className="dashboard-content">
                <div className="section">
                    <h3>Product 목록</h3>
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <strong>{product.name}</strong><br />
                                {product.description}<br />
                                가격: {product.price} 원<br />
                                등록일: {new Date(product.createAt).toLocaleDateString()}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="section">
                    <h3>Player 목록</h3>
                    <ul>
                        {players.map((player) => (
                            <li key={player.id}>
                                <strong>{player.name}</strong><br />
                                포지션: {player.position}<br />
                                신장: {player.height} cm<br />
                                체중: {player.weight} kg
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
