"use client";

import React from 'react';
import { useEffect } from "react";
import { Button } from "antd";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()} type="primary" danger>
        Try again
      </Button>
    </div>
  );
}
