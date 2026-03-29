'use client';
import React, { useEffect, useState } from 'react';
import ImageFader from '../ImageFader';
import Footer from './Footer';
import Header from './Header';

interface backdrops {
  backdrop_path: string;
}

const url = 'https://api.themoviedb.org/3/trending/all/day';
const options = {
  method: 'GET',
  cache: 'force-cache' as RequestCache,
  next: { revalidate: 3600 },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2RiYjNmMGI0Y2YwMTE2MTNkMzYyMWRiYjhlMjBlYSIsIm5iZiI6MTc1MzMyNzY3NS4wMTEwMDAyLCJzdWIiOiI2ODgxYTgzYjFkNzZjOWFhYTlmNzc5NDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Q_xPbIJe9TYr98VxKXxybSAL92V9ltsk7puNdbqc3LI',
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [backdrops, setBackdrops] = useState<string[]>([
    '/img/people-cinema-watching.jpg',
  ]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json && Array.isArray(json.results)) {
          const images = json.results
            .filter((item: backdrops) => item.backdrop_path)
            .map(
              (item: backdrops) =>
                `https://image.tmdb.org/t/p/original${item.backdrop_path}`
            );
          if (images.length > 0) {
            setBackdrops(images);
          }
        }
      });
  }, []);

  return (
    <>
      <div className="absolute inset-x-0 top-0 h-200 -z-10 overflow-hidden">
        <ImageFader rotationSpeed={6000} backgroundImages={backdrops} />
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
