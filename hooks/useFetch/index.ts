import React, { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [responseJSON, setResponseJSON] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => setResponseJSON(data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return { responseJSON, isLoading, error };
};
