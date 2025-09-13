"use client";
import { useEffect, useRef, useCallback } from "react";

const useThrottle = (callback, delay) => {
  const throttledCallback = useRef(callback);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    throttledCallback.current = callback;
  }, [callback]);

  return useCallback(
    (...args) => {
      if (Date.now() - lastRan.current >= delay) {
        throttledCallback.current(...args);
        lastRan.current = Date.now();
      }
    },
    [delay]
  );
};

export default useThrottle;