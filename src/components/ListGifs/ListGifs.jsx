import React from 'react';

import Gif from '../Gif';

import './style.css';

const ListGifs = ({ gifs }) => {
  return (
    <div className="ListGifs">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
};

export default ListGifs;
