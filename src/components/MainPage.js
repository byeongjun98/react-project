// src/components/MainPage.js
import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../api';
import CustomCalendar from './Calendar'; // 캘린더 컴포넌트 가져오기

const MainPage = () => {
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const playersList = await fetchPlayers();
                setPlayers(playersList);
            } catch (error) {
                setError('선수단 목록을 불러오는 데 실패했습니다.');
            }
        };

        getPlayers();
    }, []);

    return (
        <div>
            <h1>메인 페이지</h1>
            <nav>
                <ul>
                    <li><a href="/main">메인</a></li>
                    <li><a href="/calendar">경기 일정</a></li>
                    <li><a href="/board">게시판</a></li>
                </ul>
            </nav>

            {/* 캘린더 컴포넌트 추가 */}
            <CustomCalendar />

            <div>
                <h2>선수단 목록</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <ul>
                    {players.map(player => (
                        <li key={player.id}>
                            <strong>{player.name}</strong> - {player.position} ({player.age}세)
                            <br />
                            키: {player.height}cm, 몸무게: {player.weight}kg
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MainPage;
