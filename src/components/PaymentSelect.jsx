import React, { useState } from 'react';

function PaymentSelect() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isValidPaymentMethod, setIsValidPaymentMethod] = useState(true);

  const handlePaymentMethodChange = (e) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);

    setIsValidPaymentMethod(selectedPaymentMethod !== '');
  };

  return (
    <div>
      <label htmlFor="paymentMethod" style={{ textDecoration: "underline" }}>Payment Method:</label>
      <select
        id="paymentMethod"
        value={paymentMethod}
        onChange={handlePaymentMethodChange}
        style={{ borderColor: isValidPaymentMethod ? 'initial' : 'red' }}
      >
        <option value="">Select a payment method</option>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
      </select>
      {!isValidPaymentMethod && <p style={{ color: 'red' }}>Please select a payment method.</p>}
    </div>
  );
}

export default PaymentSelect;
