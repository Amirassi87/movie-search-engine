'use client';
import React, { useContext, useState } from 'react';
import { Rate, Spin } from 'antd';
import { GuestSessionContext } from '../data/SessionData';

export default function RatingComponent({
  id,
  value,
}: {
  id: number;
  value: number;
}) {
  const [rating, setRating] = useState<number>(value);
  const [loading, setLoading] = useState<boolean>(false);
  const guest_session = useContext(GuestSessionContext);
  const guest_session_id = guest_session?.session?.guest_session_id;
  const apitoken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

  const handleChange = (val: number) => {
    setRating(val);
    setLoading(true);
    const url = `https://api.themoviedb.org/3/movie/${id}/rating?guest_session_id=${guest_session_id}`;
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${apitoken}`,
      },
      body: JSON.stringify({ value: val }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Spin />;
  }
  return (
    <div>
      <Rate
        value={rating}
        onChange={handleChange}
        allowHalf
        count={10}
        style={{ fontSize: 16 }}
      />
    </div>
  );
}
