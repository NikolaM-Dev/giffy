import React, { useState } from 'react';
import { useLocation } from 'wouter';

import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';

// const POPULAR_GIFS = ['Matrix', 'Venezuela', 'Chile', 'Colombia', 'Ecuador'];

const Home = () => {
  const [keyword, setKeyword] = useState('');
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const { loading, gifs } = useGifs();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/Search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Search a gif here..."
        />
        <button>Buscar</button>
      </form>
      <h2 className="App-title">Ultima Busqueda</h2>
      {loading ? <Spinner /> : <ListGifs gifs={gifs} />}
      {/* <h2 className="App-title">Los gifs mas populares</h2>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Home;
