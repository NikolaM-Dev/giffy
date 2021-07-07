import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
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

  const handleSubmitSearchForm = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm onSubmit={handleSubmitSearchForm} />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            {loading ? <Spinner /> : <ListGifs gifs={gifs} />}
          </div>
          <div className="App-category">
            <TrendingSearches />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
