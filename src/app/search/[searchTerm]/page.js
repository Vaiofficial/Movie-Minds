import Results from "@/Components/Results";
import React from "react";

//same yaha bhi dynamic routing kiye hai by using these brackets [] , automatically searchTerm extract karke as a param pass kar rha hai.
export default async function searchTerm({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();
  //search results extract kar rhe hai data se.
  const results = data.results;

  return (
    <div>
        {/* agar result hai but length zero hai means return not found */}
      {results && results.length == 0 && (
        <h1 className="text-center pt-6">No Matching Results</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
