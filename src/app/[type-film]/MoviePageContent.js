// app/[type-film]/page.js
'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Section from '@/components/layouts/Section';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';
import './page.css';


const Page = () => {
  const params = useParams();
  const typeFilm = params['type-film'];
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10);
  const [type, setType] = useState({
    type_film: '',
    name_type: '',
    link: `https://phimapi.com/v1/api/danh-sach/${typeFilm}?page=1`
  });

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleTotalPagesChange = (pages) => {
    setTotalPages(pages);
  };

  useEffect(() => {
    setType(prevType => ({
      ...prevType,
      link: `https://phimapi.com/v1/api/danh-sach/${typeFilm}?page=${currentPage + 1}`
    }));
  }, [currentPage, typeFilm]);

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
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        forcePage={currentPage}
      />
    </div>
  );
};

export default Page;
