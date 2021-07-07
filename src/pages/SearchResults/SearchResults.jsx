import React, { useCallback, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
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
    distance: '200px',
    once: false,
  });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    isNearScreen && debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListGifs gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchResults;
