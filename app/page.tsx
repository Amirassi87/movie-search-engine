import GoUpButton from './components/GoUpButton';
import MovieCard from './components/MovieCard';
import NetworkStatus from './components/NetworkStatus';
import SearchBar from './components/SearchBar';
import PaginationHandler from './components/PaginationHandler';
import Loading from './loading';
import { Suspense } from 'react';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
  vote_average: number;
  rating: number;
};

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const apitoken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  let movies = [];
  let totalPages = 0;

  if (query) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&page=${currentPage}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apitoken}`,
        },
      }
    );

    const data = await res.json();
    movies = (await data.results) || [];
    totalPages = data.total_pages || 0;

    if (movies.length == 0 && query !== '') {
      return (
        <div className="movie-container">
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="no-search-container"></div>
        </div>
      );
    }
  } else {
    const res = await fetch(
      `
https://api.themoviedb.org/3/movie/top_rated?&page=${currentPage}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apitoken}`,
        },
      }
    );

    const data = await res.json();
    movies = (await data.results) || [];
    totalPages = data.total_pages || 0;

    if (movies.length == 0) {
      return (
        <div className="movie-container">
          <div className="search-bar">
            <SearchBar />
          </div>
          <div className="no-search-container"></div>
        </div>
      );
    }
  }

  return (
    <>
      <NetworkStatus />
      <div className="movie-container">
        <div className="search-bar">
          <SearchBar />
        </div>

        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        <Suspense key={query + currentPage} fallback={<Loading />}>
          <PaginationHandler
            currentPage={currentPage}
            query={query}
            totalResults={totalPages}
          />
        </Suspense>
        <GoUpButton />
      </div>
    </>
  );
}
