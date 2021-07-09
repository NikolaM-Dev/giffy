import React, { useReducer, useState } from 'react';
import { useLocation } from 'wouter';

import './SearchForm.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const reducer = (state, param) => {
  console.log(param);
  return {
    ...state,
    keyword: param,
    times: state.times + 1,
  };
};

const SearchForm = ({ initialKeyword = '', initialRating = RATINGS[0] }) => {
  const [rating, setRating] = useState(initialRating);

  const [state, dispath] = useReducer(reducer, {
    keyword: decodeURI(initialKeyword),
    times: 0,
  });

  const { keyword, times } = state;

  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const updateKeyword = (keyword) => {
    dispath(keyword);
  };

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value);
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
      <select onChange={handleChangeRating} value={rating}>
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
};

export default React.memo(SearchForm);
