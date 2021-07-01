import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const POPULAR_GIFS = ['Matrix', 'Venezuela', 'Chile', 'Colombia', 'Ecuador'];

const Home = () => {
  const [keyword, setKeyword] = useState('');
  // eslint-disable-next-line
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // navegar a otra ruta
    console.log(keyword);
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
      </form>
      <h2 className="App-title">Los gifs mas populares</h2>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
