import React from 'react';

import { useClientFetch } from "../ssr";

const OPERATION =  ({
  url: `http://localhost:3010/photos`,
});
const Details = props => {
  const { data, loading } = useClientFetch(OPERATION);

  if (loading) return <div>Loading...</div>;

  const results = data;

  console.log("show photos", results);

  return <h1>Details</h1>;
};

export default Details;