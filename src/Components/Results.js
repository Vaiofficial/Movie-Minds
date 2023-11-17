import React from "react";

export default function Results({ results }) {
  // console.log(results.original_title)
  return (
    <div>
      {results.map((result) => {
        return <div key={result.id}>{result.original_title}</div>;
      })}
    </div>
  );
}
