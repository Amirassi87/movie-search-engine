'use client';

import React, { createContext, useEffect, useState } from 'react';

type Guest = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

type GuestContextType = {
  session: Guest | null;
};

export const GuestSessionContext = createContext<GuestContextType | null>(null);

export function GuestSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] = useState<Guest | null>(null);
  const apitoken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  useEffect(() => {
    const getSession = async () => {
      const url =
        'https://api.themoviedb.org/3/authentication/guest_session/new';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apitoken}`,
        },
      };

      const res = await fetch(url, options);
      const guestSession = await res.json();
      setSession(guestSession);
      const storage_session = localStorage.setItem(
        'guest',
        JSON.stringify(guestSession)
      );
    };

    getSession();
  }, []);

  return (
    <GuestSessionContext.Provider value={{ session }}>
      {children}
    </GuestSessionContext.Provider>
  );
}
