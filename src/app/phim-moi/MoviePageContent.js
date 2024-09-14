"use client";

import './page.css';
import Section from '@/components/layouts/Section';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initialize with page 1
  const [totalPages, setTotalPages] = useState(10); // Default value, to be updated by Section
  const [type, setType] = useState({
    type_film: '',
    name_type: 'Phim mới cập nhật',
    link: `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`, // Start with page 1
    href:'/phim-moi'
  });

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; // react-paginate uses zero-based index
    setCurrentPage(selectedPage);
  };

  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };

  useEffect(() => {
    // Update the link when currentPage changes
    setType(prevType => ({
      ...prevType,
      link: `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${currentPage}`
    }));
  }, [currentPage]);

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
        pageRangeDisplayed={5}
        onPageChange={handlePageClick} // Callback when page changes
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage - 1} // Ensure the current page is selected
      />
    </div>
  );
};

export default Page;
