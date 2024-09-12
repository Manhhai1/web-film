// app/[type-film]/page.js
"use client";
import './page.css'
import Section from '@/components/layouts/Section';
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';

const Page = () => {
  const params = useParams(); // Get the dynamic route parameters
  const country = params['country']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(0); // Initialize with page 0 (ReactPaginate uses 0-based indexing)
  const [totalPages, setTotalPages] = useState(10); // Total number of pages (example)
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
    link: `https://phimapi.com/v1/api/quoc-gia/${country}`
  });

  const handlePageClick = (page) => {
    setCurrentPage(page.selected); // ReactPaginate passes the selected page as `page.selected`
  };

  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };

  useEffect(() => {
    // Update the link when currentPage or country changes
    setType(prevType => ({
      ...prevType,
      link: `https://phimapi.com/v1/api/quoc-gia/${country}?page=${currentPage + 1}` // Add 1 because ReactPaginate is 0-indexed
    }));
  }, [currentPage, country]); // Include country in dependencies to update the link when it changes

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
        pageCount={totalPages} // Total pages
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick} // Callback function when page changes
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage} // Set the current page
      />
    </div>
  );
};

export default Page;
