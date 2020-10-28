import React, { useEffect, useState } from "react";
import { hash } from "./../utils/hash";

const isSSR = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

// import {ssrUseEffect, ssrState} from 'ssr-state'

const useSsrFetchEffect = (f, deps) => {
  // check if is ssr and save the content
  const ssrFetch = (operation) => ({ then: (ff) => ff([9, 8, 7, 6, 5]) });
  isSSR && f(ssrFetch);
  console.log("isSSR", isSSR);
  useEffect(() => f(ssrFetch), deps);
};

const useSsrFetchState = (operation, context, defaultValue) => {
  const key = hash(operation);

  if (context && context.fetch && context.fetch[key]) return context.fetch[key];
  if (!isSSR && window.__ssrFetch__ && window.__ssrFetch__[key])
    return window.__ssrFetch__[key];

  context.fetch[key] = defaultValue;
  return defaultValue;
};

const OPERATION = {
  url: "/list",
  params: {
    limit: 10,
  },
};

const List = (props) => {
  const [list, setList] = useState(
    useSsrFetchState(OPERATION, props.staticContext, ["a", "b", "c"])
  );

  console.log(props);

  // useSsrFetchEffect((ssrFetch) => {
  //    ssrFetch(OPERATION).then((list) => setList(list));
  // }, []);

  return (
    <div>
      <h1>List of list</h1>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default List;
