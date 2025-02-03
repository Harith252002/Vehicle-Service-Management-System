// frontend/src/components/PaymentForm.js

// frontend/src/components/PaymentForm.js

import React, { useState } from 'react';

const PaymentForm = ({ totalPrice }) => {
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentAmount, setPaymentAmount] = useState(totalPrice);

  const handlePayment = () => {
    if (paymentAmount >= totalPrice) {
      setPaymentStatus('Paid');
      alert('Payment Successful!');
    } else {
      setPaymentStatus('Failed');
      alert('Payment Failed. Insufficient funds.');
    }
  };

  return (
    <div>
      <h3>Simulate Payment</h3>
      <div>
        <label>Total Amount: ${totalPrice}</label>
      </div>
      <div>
        <label>Payment Amount:</label>
        <input
          type="number"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Pay</button>
      <h4>Status: {paymentStatus}</h4>
    </div>
  );
};

export default PaymentForm;
