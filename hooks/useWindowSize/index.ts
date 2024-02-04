import React, { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const getWindowSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", getWindowSize);

    return () => window.removeEventListener("resize", getWindowSize);
  }, []);

  return { width, height };
};
