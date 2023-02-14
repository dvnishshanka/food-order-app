import './App.css';
import React, { useState } from 'react';
import Header from './components/common/header/Header';
import Meals from './components/common/meals/Meals';
import Cart from './components/common/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCartItem, setShowCartItem] = useState(false);

  const showCartHandler = () => {
    setShowCartItem(true);
  };

  const closeCartHandler = () => {
    setShowCartItem(false);
  };

  return (
    <CartProvider>
      {showCartItem && <Cart onClose={closeCartHandler} />}
      <Header onShowCartHandler={showCartHandler} />
      <main className="main">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
