"use client";
import './page.css';
import Section from '@/components/layouts/Section';
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';
import server_constant from '../../constance'
const Page = () => {
  const params = useParams(); // Get dynamic route parameters
  const search = params['query']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10); // Example initial total pages
  const [type, setType] = useState({
    type_film:  '',
    name_type:  `Tìm kiếm theo ${search}` || 'Tìm kiếm',
    link: `${server_constant}/api/search?keyword=${search}`
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
      setType(prevType => ({
        ...prevType,
        link: `${server_constant}/api/search?keyword=${search}&page=${currentPage + 1}`
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
