import React, { useState } from 'react';

function CountrySelect() {
  const [country, setCountry] = useState('');
  const [isValidCountry, setIsValidCountry] = useState(true);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);

    setIsValidCountry(selectedCountry !== '');
  };

  return (
    <div>
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        value={country}
        onChange={handleCountryChange}
        style={{ borderColor: isValidCountry ? 'initial' : 'red' }}
      >
        <option value="">Select a country</option>
        <option value="USA">Croatia</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
      {!isValidCountry && <p style={{ color: 'red' }}>Please select a country.</p>}
    </div>
  );
}

export default CountrySelect;
