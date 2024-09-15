"use client";
import './page.css';
import Section from '@/components/layouts/Section';
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';

const Page = () => {
  const params = useParams(); // Get dynamic route parameters
  const category = params['category']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10); // Example initial total pages
  const [type, setType] = useState({
    type_film: category || '',
    name_type: category || 'Thể loại',
    link: `https://phimapi.com/v1/api/the-loai/${category}?page=1`
  });

  // Handle page click for pagination
  const handlePageClick = (page) => {
    setCurrentPage(page.selected); // Update current page from pagination
  };

  // Handle total pages change from the Section component
  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };

  useEffect(() => {
    // Update the link when currentPage or category changes
    if (category) {
      setType(prevType => ({
        ...prevType,
        link: `https://phimapi.com/v1/api/the-loai/${category}?page=${currentPage + 1}`
      }));
    }
  }, [category, currentPage]);

  return (
    <div>
      <MovieSearch />
      <BannerSlider />
      <Section type={type} onTotalPagesChange={handleTotalPagesChange} />
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        pageCount={totalPages} // Total number of pages
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick} // Callback when page changes
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Page;
