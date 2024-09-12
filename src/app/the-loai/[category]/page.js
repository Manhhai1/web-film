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
  const category= params['category']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10); // Tổng số trang (ví dụ);
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
    link: `https://phimapi.com/v1/api/the-loai/${category}`
  });

  const handlePageClick = (page) => {
    setCurrentPage(page); // Update current page
  };
  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };
  useEffect(() => {
    // Update the link when currentPage changes
    setType(prevType => ({
      ...prevType,
      link: `https://phimapi.com/v1/api/the-loai/${category}?page=${currentPage.selected+1}`
    }));
    console.log(type)
  }, [currentPage, totalPages]);


  return (
    <div>
      <MovieSearch></MovieSearch>
      <BannerSlider></BannerSlider>
      <Section type={type} onTotalPagesChange={handleTotalPagesChange} />
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages} // Tổng số trang
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick} // Hàm callback khi trang thay đổi
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Page;
