import { useState, useEffect } from "react";

const getSavedValue = (keyName: string, defaultValue: any) => {
  const value = window.localStorage.getItem(keyName);

  if (value) {
    return JSON.parse(value);
  } else {
    window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
    return defaultValue;
  }
};

export const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  const setValue = (newValue: any) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.error(err);
    }
    setStoredValue(newValue);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run if the window object is defined (to avoid server-side execution)
      setStoredValue(getSavedValue(keyName, defaultValue));
    }
  }, []);

  return [storedValue, setValue];
};
