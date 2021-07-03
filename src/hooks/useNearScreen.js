import { useEffect, useRef, useState } from 'react';

const useNearScreen = ({ distance = '100px' } = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries) => {
      const entry = entries[0];
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
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
        rootMargin: distance,
      });

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  }, [distance]);

  return { isNearScreen, fromRef };
};

export default useNearScreen;
