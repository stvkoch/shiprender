import React from "react";

import { useSsrFetch } from "../ssr";

const getOperation = (postId) => ({
  url: `http://localhost:3010/posts/${postId}/comments`,
});

const ShowPerson = (props) => {
  const { data, loading } = useSsrFetch(getOperation(props.postId));

  if (loading) return <div>Loading...</div>;

  const results = data;

  console.log("show comments", results);

  return (
    <div>
      <h5>Show comments {results.length}</h5>
      {results.map((comments) => (
        <div key={comments.id}>{comments.name}</div>
      ))}
    </div>
  );
};

export default ShowPerson;
