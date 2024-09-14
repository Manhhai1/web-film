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
  const year = params['namId']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses zero-based index
  const [totalPages, setTotalPages] = useState(10); // Default total pages (to be updated by Section)
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
      link: `https://phimapi.com/v1/api/nam/${year}?page=1` // Start with page 1
    , href:`/nam/${year}`
  });

  const handlePageClick = (data) => {
    const selectedPage = data.selected; // ReactPaginate uses zero-based index
    setCurrentPage(selectedPage); // Update current page
  };

  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };

  useEffect(() => {
    // Update the link when currentPage changes
    setType(prevType => ({
      ...prevType,
      link: `https://phimapi.com/v1/api/nam/${year}?page=${currentPage + 1}` // Add 1 to currentPage for 1-based index
    }));
  }, [currentPage, year]); // Depend on currentPage and year

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
        forcePage={currentPage} // Synchronize pagination control with current page
      />
    </div>
  );
};

export default Page;
