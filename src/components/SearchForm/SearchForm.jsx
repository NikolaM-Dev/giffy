import React from 'react';
import { useLocation } from 'wouter';

import useForm from './useForm';

import './SearchForm.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = RATINGS[0] }) => {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const { keyword, rating, changeKeyword, changeRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const onSubmit = ({ keyword }) => {
    if (keyword !== '') {
      pushLocation(`/search/${keyword}/${rating}`);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ keyword });
  };

  const handleChangeKeyword = (evt) => {
    changeKeyword({ keyword: evt.target.value });
  };

  const handleChangeRating = (evt) => {
    changeRating({ rating: evt.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="c-search">
      <button className="c-search-btn">Buscar</button>
      <input
        className="c-search-input"
        placeholder="Search a gif here..."
        onChange={handleChangeKeyword}
        type="text"
        value={keyword}
      />
      <select
        className="c-search-list"
        onChange={handleChangeRating}
        value={rating}
      >
        <option disabled>Rating type</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
};

export default React.memo(SearchForm);
