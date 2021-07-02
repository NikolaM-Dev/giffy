import { useContext, useEffect, useState } from 'react';

import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || null;

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      if (keyword) localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
};

export default useGifs;
