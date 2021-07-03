import TrendingSearches from './TrendingSearches';
import useNearScreen from 'hooks/useNearScreen';

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>;
};

export default LazyTrending;
