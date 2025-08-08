'use client';
import { useEffect, useState } from 'react';

export default function useNetwork() {
  const [isOnline, setIsisOnline] = useState(true);

  useEffect(() => {
    const handleConnectionStatus = () => setIsisOnline(navigator.onLine);

    window.addEventListener('offline', handleConnectionStatus);
    window.addEventListener('online', handleConnectionStatus);

    handleConnectionStatus();

    return () => {
      window.removeEventListener('offline', handleConnectionStatus);
      window.removeEventListener('online', handleConnectionStatus);
    };
  }, []);

  return isOnline;
}
