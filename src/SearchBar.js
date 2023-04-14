import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleChange} placeholder="Search employees..." />
    </div>
  );
}

export default SearchBar;
