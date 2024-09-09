'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '../movies/MovieCard';
import Loading from '../layouts/Loading'
import Link from 'next/link';
import '../css/Section.css';

function Section({ type, onTotalPagesChange }) {
  const [films, setFilms] = useState([]);
  const [titlePage, setTitlePage] = useState('');
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setLoading] =useState(true)
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await fetch(`${type.link}`);
        const movies = await res.json();
        setFilms(movies.data?.items || movies.items);
        setTitlePage(movies.data?.titlePage || type.name_type);
        const pages = movies.data?.params?.pagination?.totalPages || 20;
        setTotalPages(pages);
        if (onTotalPagesChange) {
          onTotalPagesChange(pages); // Pass totalPages to the parent component
        }
        setLoading(false)
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }

    fetchData();
  }, [type.link, type.name_type]);

  return (
    <div className='section'>
      {
        isLoading ? <Loading className='loading'></Loading> : <>
        <h2 className='name-section'>{titlePage}</h2>
        <div className='btn-view'>
          <Link href="#"><span>Xem tất cả</span></Link>
        </div>
        <div className="list-film">
            {films?.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))}
        </div></>
       }
    </div>
  );
}

export default Section;
