import React from 'react';

import './style.css';

const Gif = ({ id, title, url }) => {
  return (
    <a href={`#${id}`} className="Gif">
      <h2>{title}</h2>
      <img src={url} alt={title} />
    </a>
  );
};

export default Gif;
