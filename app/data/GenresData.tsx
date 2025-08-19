'use client';

import React, { createContext, useEffect, useState } from 'react';

type Genre = {
  id: number;
  name: string;
};

type GenreContextType = {
  genres: Genre[];
};

export const GenreContext = createContext<GenreContextType | null>(null);

export function GenresProvider({ children }: { children: React.ReactNode }) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const apitoken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  useEffect(() => {
    const getGenres = async () => {
      const url = 'https://api.themoviedb.org/3/genre/movie/list';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apitoken}`,
        },
      };

      const res = await fetch(url, options);
      const moviesGenres = await res.json();
      setGenres(moviesGenres.genres);
    };

    getGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres }}>{children}</GenreContext.Provider>
  );
}
