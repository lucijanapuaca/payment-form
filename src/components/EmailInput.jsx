import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailPattern.test(inputEmail));
  };

  return (
    <div className='contact-container'>
      <label>Email:</label>
        <input 
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: isValidEmail ? 'initial' : 'red' }}
        />
      
      {!isValidEmail && <p style={{ color: 'red' }}>E-mail address not valid.</p>}
    </div>
  );
};

export default EmailInput;
