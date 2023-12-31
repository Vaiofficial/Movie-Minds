import Results from "@/Components/Results";

//brought api key which is inside enviromental variable which is protected
const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  //revalidate - it will save api calls , it refresh api after 10000 seconds.

  //handelling error
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  // console.log(results);

  return (
    <div>
      <Results results={results}></Results>
    </div>
  );
}
