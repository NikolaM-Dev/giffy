import React from 'react';

import Gif from '../Gif';

import './ListGifs.css';

const ListGifs = ({ gifs }) => {
  return (
    <div className="ListGifs">
      {gifs.map(({ id, title, url, ...restOfGif }) => (
        <Gif id={id} key={id} title={title} url={url} extraInfo={restOfGif} />
      ))}
    </div>
  );
};

export default ListGifs;
