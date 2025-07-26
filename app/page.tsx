import GoUpButton from './components/GoUpButton';
import MovieCard from './components/MovieCard';
import NetworkStatus from './components/NetworkStatus';


type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number;
};

export default async function Home() {
  const apitoken = process.env.TMDB_API_TOKEN;
  const keyword = 'return';
  let movies = [];

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apitoken}`,
        },
      }
    );

    const data = await res.json();
    movies = await data.results;
  
  return (
    <>
      <NetworkStatus />
      <div className="movie-container">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <GoUpButton/>
      </div>
    </>
  );
}
