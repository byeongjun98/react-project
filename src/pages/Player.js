import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('로그인이 필요합니다.');
            return;
        }

        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/player/list', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPlayers(response.data);
            } catch (err) {
                setError('선수 정보를 불러오는 데 실패했습니다.');
            }
        };

        fetchPlayers();
    }, []);

    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="player-list">
            <h2>Player 목록</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id} className="player-item">
                        <p><strong>이름:</strong> {player.name}</p>
                        <p><strong>키:</strong> {player.height} cm</p>
                        <p><strong>몸무게:</strong> {player.weight} kg</p>
                        <p><strong>포지션:</strong> {player.position}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Player;
