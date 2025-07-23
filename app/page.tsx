import MovieCard from "./components/MovieCard";
import { Suspense } from "react";
import Loading from "./loading";


type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
  overview: string;
  genre_ids: number;
};

export default async function Home() {
  const apiKey = process.env.TMDB_API_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/movie/popular1`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });

  if (!res.ok) {
    return <p>Failed to fetch data </p>;
  }

  const data = await res.json();
  const movies = data.results;

  return (
    <Suspense fallback={<Loading />}>
      <div className="movie-container">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Suspense>
  );
}
