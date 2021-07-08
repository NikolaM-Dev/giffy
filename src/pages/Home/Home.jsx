import React from 'react';
import { Helmet } from 'react-helmet';

import ListGifs from 'components/ListGifs';
import SearchForm from 'components/SearchForm';
import Spinner from 'components/Spinner';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';

const Home = () => {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
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
