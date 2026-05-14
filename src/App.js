import React, { useState } from 'react';
import './App.css';

const menuData = [
  { id: 1, name: '아메리카노', price: 4500 },
  { id: 2, name: '카페라떼', price: 5000 },
  { id: 3, name: '초코라떼', price: 5500 },
  { id: 4, name: '치즈케이크', price: 6000 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {
    setCart([...cart, menu]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const order = () => {
    if (cart.length === 0) {
      alert('메뉴를 선택해주세요!');
      return;
    }

    alert('주문이 완료되었습니다!');
    setCart([]);
  };

  return (
    <div className="app">
      <h1>☕ 카페 키오스크</h1>

      <div className="menu-container">
        {menuData.map((menu) => (
          <div className="menu-card" key={menu.id}>
            <h3>{menu.name}</h3>
            <p>{menu.price}원</p>

            <button onClick={() => addToCart(menu)}>
              담기
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>🛒 장바구니</h2>

        {cart.length === 0 ? (
          <p>선택한 메뉴가 없습니다.</p>
        ) : (
          cart.map((item, index) => (
            <p key={index}>
              {item.name} - {item.price}원
            </p>
          ))
        )}

        <h3>총 금액: {totalPrice}원</h3>

        <button className="order-btn" onClick={order}>
          주문하기
        </button>
      </div>
    </div>
  );
}

export default App;
