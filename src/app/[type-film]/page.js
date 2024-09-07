// app/[type-film]/page.js
"use client";
import './page.css'
import Section from '@/components/layouts/Section';
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';

const Page = () => {
  const params = useParams(); // Get the dynamic route parameters
  const typeFilm = params['type-film']; // Access the dynamic parameter
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Tổng số trang (ví dụ);
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
    link: `https://phimapi.com/v1/api/danh-sach/${typeFilm}?page=1`
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
      link: `https://phimapi.com/v1/api/danh-sach/${typeFilm}?page=${currentPage.selected+1}`
    }));
    console.log(type)
  }, [currentPage, totalPages]);


  return (
    <div>
      <BannerSlider></BannerSlider>
      <Section type={type} onTotalPagesChange={handleTotalPagesChange} />
      <ReactPaginate
        previousLabel={'«'}
        nextLabel={'»'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages} // Tổng số trang
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick} // Hàm callback khi trang thay đổi
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Page;
