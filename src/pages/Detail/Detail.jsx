import React from 'react';

const Detail = ({ params }) => {
  console.log(params.id);
  return <h1>GIF co id {params.id}</h1>;
};

export default Detail;
