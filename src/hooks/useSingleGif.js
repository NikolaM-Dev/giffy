import { useEffect, useState } from 'react';

import getSingleGif from 'services/getSingleGif';
import useGifs from 'hooks/useGifs';

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) getSingleGif({ id }).then(setGif);
  }, [gif, id]);

  return gif;
};

export default useSingleGif;
