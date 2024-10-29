// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // 백엔드 URL로 변경

// Axios 인스턴스 생성
const api = axios.create({
    baseURL: API_URL,
});

// 요청 인터셉터 추가
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // 토큰을 Authorization 헤더에 추가
        }
        return config; // 요청 설정 반환
    },
    (error) => {
        return Promise.reject(error); // 에러 처리
    }
);

export const signup = async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
};

export const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const fetchPlayers = async () => {
    const response = await api.get('/player/list');
    return response.data;
};

// 다른 API 함수들도 이와 같은 방식으로 추가할 수 있습니다.
