import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search by name, email, or phone"
      />
    </div>
  );
}

export default SearchBar;