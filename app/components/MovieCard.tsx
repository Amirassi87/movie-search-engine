'use client';

import React, { Suspense, useContext } from 'react';
import Image from 'next/image';
import { isValid, parseISO, format } from 'date-fns';
import { shortenText } from '../utils/shortenText';
import { GenreContext } from '../data/GenresData';
import RatingComponent from '../components/RatingComponent';
import { Spin } from 'antd';

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

export default function MovieCard({ movie }: { movie: Movie }) {
  const genreContext = useContext(GenreContext);
  const genreList = genreContext?.genres ?? [];

  const circleRatingColor = (rating: number) => {
    if (rating >= 0 && rating < 3) return 'circle-rating-red';
    if (rating >= 3 && rating < 5) return 'circle-rating-orange';
    if (rating >= 5 && rating < 7) return 'circle-rating-yellow';
    if (rating >= 7) return 'circle-rating-green';
  };

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
        <div className="movie-header">
          <div className="movie-title">{movie.title}</div>
          <div className={circleRatingColor(movie.vote_average)}>
            {movie.vote_average.toFixed(1)}
          </div>
        </div>
        <div className="movie-date">
          {movie.release_date && isValid(parseISO(movie.release_date))
            ? format(new Date(movie.release_date), 'MMMM d, yyyy')
            : 'Unknown release date'}
        </div>
        <div className="movie-genre">
          {genreList
            .filter((genre) => movie.genre_ids.includes(genre.id))
            .map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
        </div>
        <div className="movie-desc">{shortenText(movie.overview)}</div>
        <div className="rating">
          {movie.id && (
            <Suspense key={movie.rating} fallback={<Spin />}>
              <RatingComponent value={movie.rating} id={movie.id} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}
