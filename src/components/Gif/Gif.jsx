import React from 'react';
import { Link } from 'wouter';

import './Gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h3>{title}</h3>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  );
};

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
