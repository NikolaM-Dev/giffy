import React, { useState } from 'react';
import { useLocation } from 'wouter';

import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button className="c-search-btn">Buscar</button>
      <input
        className="c-search-input"
        placeholder="Search a gif here..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
    </form>
  );
};

export default React.memo(SearchForm);
