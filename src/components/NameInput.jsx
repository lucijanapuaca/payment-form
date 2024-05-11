import React, { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    setName(inputName);

    const namePattern = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    setIsValidName(namePattern.test(inputName));
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        style={{ borderColor: isValidName ? 'initial' : 'red' }}
      />
      {!isValidName && <p style={{ color: 'red' }}>Name not valid.</p>}
    </div>
  );
}

export default NameInput;
