import React, { useState } from 'react';

function OrderForm() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);

  const handleTermsChange = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const handleOrderClick = () => {
    if (!isTermsAccepted) {
      alert('You must accept the terms before placing the order.');
    } else {
      setIsOrderSuccessful(true);
    }
  };

  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={isTermsAccepted}
          onChange={handleTermsChange}
        />
        Accept Terms of Order
      </label>
      <br />
      <button onClick={handleOrderClick}>Order</button>
      {isOrderSuccessful && <p>Order successful!</p>}
    </div>
  );
}

export default OrderForm;
