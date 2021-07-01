import React, { useEffect, useState } from 'react';

import getGifs from '../../services/getGifs';
import ListGifs from '../../components/ListGifs';
import Spinner from '../../components/Spinner';

const SearchResults = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const { keyword } = params;

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return <>{loading ? <Spinner /> : <ListGifs gifs={gifs} />}</>;
};

export default SearchResults;
