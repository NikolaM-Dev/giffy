import React from 'react';
import { Link } from 'wouter';

import './style.css';

const Gif = ({ id, title, url }) => {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className="Gif-link">
        <h3>{title}</h3>
        <img src={url} alt={title} />
      </Link>
    </div>
  );
};

export default Gif;
