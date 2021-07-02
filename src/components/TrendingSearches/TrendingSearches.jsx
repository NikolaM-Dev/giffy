import React, { useEffect, useState } from 'react';

import Category from '../Category';
import getTrendingTerms from 'services/getTrendingTermsServices';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category name="Tendencias" options={trends} />;
};

const LazyTrending = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      // console.log(entries);
      const element = entries[0];
      // console.log(element);
      console.log(element.isIntersecting);
      if (element.isIntersecting) setShow(true);
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px',
    });

    observer.observe(document.getElementById('LazyTrending'));
  }, []);

  return <div id="LazyTrending">{show ? <TrendingSearches /> : null}</div>;
};

export default LazyTrending;
