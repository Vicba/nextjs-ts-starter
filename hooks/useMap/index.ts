import React, { useState, useCallback } from "react";

export const useMap = (initialValue: any) => {
  const [map, setMap] = useState(new Map(initialValue));

  const set = useCallback((key: any, value: any) => {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(key, value);
      return newMap;
    });
  }, []);

  const del = useCallback((key: any) => {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.delete(key);
      return newMap;
    });
  }, []);

  const clear = useCallback(() => {
    setMap(new Map());
  }, []);

  return { map, set, delete: del, clear };
};
