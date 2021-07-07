import { useEffect, useState } from 'react';

import getSingleGif from 'services/getSingleGif';
import useGifs from 'hooks/useGifs';

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((_err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading: isLoading, isError };
};

export default useSingleGif;
