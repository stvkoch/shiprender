import React from "react";
import { useSsrFetch } from "./../ssr";

import ShowComments from "../component/show-comments";

const OPERATION = {
  url: "http://localhost:3010/posts",
};

const List = (props) => {
  const { data, loading } = useSsrFetch(OPERATION);

  if (loading) return <div>Loading...</div>;

  const results = data;

  return (
    <div>
      <h1>List of posts</h1>
      <hr />
      <div>
        {results.slice(0,5).map((item) => (
          <div key={item.id}>
            <h2 key={item.id}>{item.title}</h2>
            <p>{item.body}</p>
            <ShowComments postId={item.id} />
            <hr />
          </div>
        ))}
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default List;
