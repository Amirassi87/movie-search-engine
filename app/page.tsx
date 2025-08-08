import GoUpButton from './components/GoUpButton';
import MovieCard from './components/MovieCard';
import NetworkStatus from './components/NetworkStatus';
import SearchBar from './components/SearchBar';
import PaginationHandler from './components/PaginationHandler';
import Loading from './loading';
import { Suspense } from 'react';
import NoResultWarning from './components/NoResultWarning';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number;
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
  const apitoken = process.env.TMDB_API_TOKEN;
  let movies = [];

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
  movies = await data.results;

  if (data.total_results == 0) {
    return (
      <div className="movie-container">
        <div className='search-bar'>
          <SearchBar />
        </div>
        <div className='no-search-container'>
          <NoResultWarning/>
        </div>
      </div>)
  }
  return (
    <>
      <NetworkStatus />
      <div className="movie-container">
        <div className='search-bar'>
          <SearchBar />
        </div>
        
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
        {query ? (
          <Suspense key={query + currentPage} fallback={<Loading />}>
            <PaginationHandler
              currentPage={currentPage}
              query={query}
              totalResults={data.total_pages} />
          </Suspense>
        ) : (
          <div className='no-search-container'>"No Movies Searched"</div>)}
        <GoUpButton />
      </div>
    </>
  );
}
