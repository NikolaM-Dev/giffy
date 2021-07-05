import React, { useCallback, useEffect, useRef } from 'react';
import debounce from 'just-debounce-it';

import ListGifs from 'components/ListGifs';
import Spinner from 'components/Spinner';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  // const handleNextPage = () => console.log('Next page');

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    console.log(isNearScreen);
    isNearScreen && debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h3 className="App-title">{decodeURI(keyword)}</h3>
          <ListGifs gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
};

export default SearchResults;
