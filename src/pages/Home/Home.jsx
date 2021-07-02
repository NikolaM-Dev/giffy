import React, { useState } from 'react';
import { useLocation } from 'wouter';

import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import TrendingSearches from '../../components/TrendingSearches/';
import useGifs from '../../hooks/useGifs';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search a gif here..."
        />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          {loading ? <Spinner /> : <ListGifs gifs={gifs} />}
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  );
};

export default Home;
