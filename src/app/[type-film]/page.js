"use client";

import './page.css';
import Section from '@/components/layouts/Section';
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';

const Page = () => {
  const params = useParams(); // Get the dynamic route parameters
  const typeFilm = params['type-film']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10); // Initial total pages
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
    link: `https://phimapi.com/v1/api/danh-sach/${typeFilm}?page=1`
  });

  const handlePageClick = (data) => {
    setCurrentPage(data.selected); // Update current page
  };

  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };

  useEffect(() => {
    // Update the link when currentPage changes
    setType(prevType => ({
      ...prevType,
      link: `https://phimapi.com/v1/api/danh-sach/${typeFilm}?page=${currentPage + 1}` // Adjust for 1-based page number
    }));
  }, [currentPage, typeFilm]); // Include typeFilm to update link when it changes

  return (
    <div>
      <MovieSearch />
      <BannerSlider />
      <Section type={type} onTotalPagesChange={handleTotalPagesChange} />
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages} // Total number of pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick} // Callback when page changes
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage} // Set the current page
      />
    </div>
  );
};

export default Page;
