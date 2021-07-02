import React, { useEffect, useRef, useState } from 'react';

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
  const elementRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries) => {
      const element = entries[0];
      console.log(element.isIntersecting);
      if (element.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: '100px',
      });

      observer.observe(elementRef.current);
    });

    return () => observer && observer.disconnect();
  }, []);

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
};

export default LazyTrending;
