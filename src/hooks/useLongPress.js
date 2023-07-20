import { useEffect, useRef } from "react";

const useLongPress = (callback, { interval = 100 } = {}) => {
  const intervalRef = useRef(null);

  const startCounter = (event) => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      callback(event);
    }, interval);
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return {
    onMouseDown: startCounter,
    onMouseUp: stopCounter,
    onMouseLeave: stopCounter,
    onTouchStart: startCounter,
    onTouchEnd: stopCounter,
  };
};

export default useLongPress;
