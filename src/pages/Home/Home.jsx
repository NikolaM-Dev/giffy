import React, { useCallback } from 'react';
import { useLocation } from 'wouter';

import ListGifs from 'components/ListGifs';
import SearchForm from 'components/SearchForm';
import Spinner from 'components/Spinner';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';

const Home = () => {
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
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
