import React from 'react';
import Image from 'next/image';
import { isValid, parseISO, format } from 'date-fns';
import { shortenText } from '../utils/shortenText';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  genre_ids: number;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="movie-card">
      <div className="movie-img">
        <Image
          priority
          className=""
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : '/images/no-image-icon-6.png'
          }
          width={180.69}
          height={275.03}
          alt={movie.title}
        />
      </div>
      <div className="movie-content ">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-date">
          {movie.release_date && isValid(parseISO(movie.release_date))
            ? format(new Date(movie.release_date), 'MMMM d, yyyy')
            : 'Unknown release date'}
        </div>
        <div className="movie-genre">
          <span>genre</span>
        </div>
        <div className="movie-desc">{shortenText(movie.overview)}</div>
      </div>
    </div>
  );
}
