"use client";

import './page.css';
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';
import MovieCard from '@/components/movies/MovieCard';
import Loading from '@/components/layouts/Loading';

const Page = () => {
  const { query } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10);
  const [items, setItems] = useState([]);
  const [dataPage, setDataPage] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');

  // Handle page change
  const handlePageClick = (page) => {
    setCurrentPage(page.selected); // Use selected page from the event
  };

  // Update displayed items for current page
  const listDataPage = (page, items) => {
    const startIndex = page * 10;
    const dataItems = items.slice(startIndex, startIndex + 10);
    setDataPage(dataItems);
  };

  useEffect(() => {
    // Fetch data based on query parameter
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${query}`);
        const movies = await res.json();
        const totalItems = movies?.data.params?.pagination?.totalItems || 0;

        setData(movies.data);
        setItems(movies?.data.items);
        setTotalPages(Math.ceil(totalItems / 10)); // Calculate total pages based on items

        listDataPage(currentPage, movies.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [query, currentPage]); // Re-fetch if query or page changes

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <MovieSearch />
          <BannerSlider />
          <h2 className='name-title'>{data.titlePage}</h2>
          <div className="list-items">
            {dataPage.map((item) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </div>
          <ReactPaginate
            previousLabel={'«'}
            nextLabel={'»'}
            breakLabel={'...'}
            pageCount={totalPages} // Total number of pages
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick} // Callback for page change
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      )}
    </>
  );
};

export default Page;
