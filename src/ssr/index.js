// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext, useCallback } from "react";
import { __RouterContext } from "react-router";
import axios from "axios";

import { hash } from "./../utils/hash";

const isSSR = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export const useStaticContext = () => useContext(__RouterContext).staticContext;

export const useClientFetch = (operation, skip = false) => {
  const cacheKey = hash(operation);

  const [fetchData, setFetchData] = useState();
  const [loading, setLoading] = useState(!skip);
  const [error, setError] = useState(null);

  // ssr will ignore useEffect
  useEffect(() => {
    if (skip) return;

    const refetch = async (operation) => {
      setLoading(true);
      try {
        const { data } = await axios(operation);
        setFetchData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    refetch(operation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cacheKey, skip]);

  return {
    data: fetchData,
    loading,
    error,
  };
};

// this will tell to ssr to wait this fetch until resolve and then render again
export const useSsrFetch = (operation) => {
  const cacheKey = hash(operation);
  let ssrData = useSsrFetchState(cacheKey);

  const context = useStaticContext();

  // set on pool of ssr fetches the current fetch
  const ssrRequest = useCallback(
    (operation) => {
      console.log("ssrRequest");
      const promiAxios = axios(operation);
      context.poolFetches.push(
        new Promise((resolve, reject) => {
          promiAxios
            .then((result) => {
              context.set(cacheKey, result.data);
              resolve();
            })
            .catch(reject);
        })
      );
    },
    [context, cacheKey]
  );

  if (isSSR && !ssrData) ssrRequest(operation);

  const { data: fetchData, loading, error } = useClientFetch(
    operation,
    !!ssrData && !(typeof window !== "undefined" && window.__ssrFetchForce__)
  );

  return {
    data: fetchData || ssrData,
    loading: ssrData ? false : loading,
    error,
  };
};

const useSsrFetchState = (cacheKey, defaultValue) => {
  const context = useStaticContext();
  if (context && context.get) {
    const data = context.get(cacheKey);
    if (data) {
      return data;
    }
  }

  if (context && context.fetch && context.fetch[cacheKey])
    return context.fetch[cacheKey];

  if (!isSSR && window.__ssrFetch__ && window.__ssrFetch__[cacheKey])
    return window.__ssrFetch__[cacheKey];

  if (context) context.fetch[cacheKey] = defaultValue;
  return defaultValue;
};
