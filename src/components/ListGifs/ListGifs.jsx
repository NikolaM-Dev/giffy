import React, { useEffect, useState } from 'react';

import getGifs from '../../services/getGifs';

import Gif from '../Gif/Gif';

const ListGifs = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { keyword } = params;

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <i>Cargando 🌀</i>;

  return gifs.map(({ id, title, url }) => (
    <Gif id={id} key={id} title={title} url={url} />
  ));
};

export default ListGifs;
