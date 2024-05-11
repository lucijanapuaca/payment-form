import React, { useState } from 'react';

function AddressInput() {
  const [address, setAddress] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(true);

  const handleAddressChange = (e) => {
    const inputAddress = e.target.value;
    setAddress(inputAddress);

    const addressPattern = /^[a-zA-Z]+\s\d+/;
    setIsValidAddress(addressPattern.test(inputAddress));
  };

  return (
    <div>
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddressChange}
        style={{ borderColor: isValidAddress ? 'initial' : 'red' }}
      />
      {!isValidAddress && <p style={{ color: 'red' }}>Address not valid.</p>}
    </div>
  );
}

export default AddressInput;
