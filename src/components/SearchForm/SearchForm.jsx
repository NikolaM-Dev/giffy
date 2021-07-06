import React, { useState } from 'react';

import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
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
