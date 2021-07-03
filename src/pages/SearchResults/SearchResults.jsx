import React from 'react';

import ListGifs from 'components/ListGifs';
import Spinner from 'components/Spinner';
import useGifs from 'hooks/useGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListGifs gifs={gifs} />
        </>
      )}
      <br />
      <button onClick={handleNextPage}>Get next page</button>
    </>
  );
};

export default SearchResults;
