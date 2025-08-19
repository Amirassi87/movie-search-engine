'use client';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GuestSessionContext } from '../data/SessionData';
import MovieCard from '../components/MovieCard';
import GoUpButton from '../components/GoUpButton';
import Error from './error';
import Loading from '../loading';

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

export default function PageClient() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const guest_session = useContext(GuestSessionContext);
  const guest_session_id = guest_session?.session?.guest_session_id;
  const apitoken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  useEffect(() => {
    const fetchRatedMovies = async () => {
      try {
        let movies = [];
        setLoading(true);
        const res = await fetch(
          `https://api.themoviedb.org/3/guest_session/${guest_session_id}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${apitoken}`,
            },
          }
        );

        if (res.status != 200) {
          setError('Failed to fetch rated movies');
        }

        const data = await res.json();
        movies = (await data.results) || [];
        setMovies(movies);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch rated movies');
      }
    };
    fetchRatedMovies();
  }, [guest_session_id]);

  if (error) {
    return <Error message={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="movie-container">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <div className="no-search-container"></div>
      <GoUpButton />
    </div>
  );
}
