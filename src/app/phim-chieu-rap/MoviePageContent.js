"use client";

import './page.css';
import Section from '@/components/layouts/Section';
import server from '../constance';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0); // ReactPaginate uses zero-based index
  const [totalPages, setTotalPages] = useState(10); // Default total pages (to be updated by Section)
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
      link: `${server}/api/the-loai/phim-chieu-rap?page=1` // Start with page 1
    , href:`/phim-chieu-rap`
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
      link: `${server}/api/the-loai/phim-chieu-rap?page=${currentPage+1}` // Add 1 to currentPage for 1-based index
    }));
  }, [currentPage]); // Depend on currentPage 

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
        marginPagesDisplayed={0}
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
