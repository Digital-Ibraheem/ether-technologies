import { useEffect, useState } from "react";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  let callbackFunction = ([entry]) => {
    if(entry.isIntersecting && entry.intersectionRatio === 1) {
      setIntersecting(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      callbackFunction,
      {
        threshold: 1.0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callbackFunction]);

  return isIntersecting;
}