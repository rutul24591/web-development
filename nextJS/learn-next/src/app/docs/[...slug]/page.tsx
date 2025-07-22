import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[];
  };
}) => {
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature: {params.slug[0]} and concept: {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Viewing docs for feature: {params.slug[0]}</h1>;
  }
  // Below will not work when routed to /docs and using [...slug].
  // Check docs1 and using [[...slug]] it will.
  return <h1>Docs Home page</h1>;
};

export default Docs;
