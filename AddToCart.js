import React, { useState } from 'react';
import Buttons from './Buttons.js';
import Header from './Header.js';

function Cart() {
  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <Header count={count} />
      <Buttons handlePlusClick={handlePlusClick} />
    </div>
  );
}

export default Cart;
