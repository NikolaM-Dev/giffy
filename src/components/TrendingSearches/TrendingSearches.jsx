import React, { useEffect, useState } from 'react';

import Category from '../Category';
import getTrendingTerms from '../../services/getTrendingTermsServices';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);
  return <Category name="Tendencias" options={trends} />;
};

export default TrendingSearches;
