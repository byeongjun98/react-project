import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('로그인이 필요합니다.');
            return;
        }

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/product', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProducts(response.data);
            } catch (err) {
                setError('상품 정보를 불러오는 데 실패했습니다.');
            }
        };

        fetchProducts();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleString('ko-KR', options);
    };

    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="product-list">
            <h2>Product 목록</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <p><strong>이름:</strong> {product.name}</p>
                        <p><strong>설명:</strong> {product.description}</p>
                        <p><strong>가격:</strong> {product.price.toLocaleString()} 원</p>
                        <p><strong>등록일:</strong> {formatDate(product.createAt)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
