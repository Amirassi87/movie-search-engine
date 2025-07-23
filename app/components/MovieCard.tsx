import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { shortenText } from "../utils/shortenText";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: Date;
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
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={180.69}
          height={275.03}
          alt={movie.title}
        />
      </div>
      <div className="movie-content ">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-date">
          {format(new Date(movie.release_date), "MMMM d, yyyy")}
        </div>
        <div className="movie-genre">
          <span>genre</span>
        </div>
        <div className="movie-desc">{shortenText(movie.overview)}</div>
      </div>
    </div>
  );
}
