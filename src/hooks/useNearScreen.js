import { useEffect, useRef, useState } from 'react';

const useNearScreen = ({
  distance = '100px',
  externalRef,
  once = true,
} = {}) => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries) => {
      const entry = entries[0];
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
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
      element && observer.observe(element);
    });

    return () => observer && observer.disconnect();
  }, [distance, externalRef, once]);

  return { isNearScreen, fromRef };
};

export default useNearScreen;
