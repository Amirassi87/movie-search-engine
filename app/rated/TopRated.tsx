'use client';
import React, { useEffect, useState } from 'react';
import Loading from '../loading';
import MovieCard from '../components/MovieCard';
import Error from './error';

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

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const apitoken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        let movies = [];
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated`,
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
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch movies');
      }
    };
    fetchRatedMovies();
  }, []);

  if (error != '') {
    return <Error message={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {movies && movies.length > 0 ? (
        movies.map((movie: Movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <div className="no-search-container">No Movies Found</div>
      )}
    </>
  );
}
