// app/[type-film]/page.js
"use client";
import './page.css'
import { useParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';
import MovieCard from '@/components/movies/MovieCard';
import Loading from '@/components/layouts/Loading';
const Page = () => {
  const params = useParams()
  const query = params['query']
  console.log(query)
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(10);
  const [items, setItems] = useState([])
  const [dataPage, setDataPage] = useState([])
  const [isLoading, setLoading] =useState(true)
  const handlePageClick = (page) => {
    setCurrentPage(page); // Update current page
    };
  const [data, setData] =useState('')
  const listDataPage = (page, items) => {
    let dataItems = []
    if (items.length >= 10) {
      let j= 0
      for (let i = (page) * 10; i < (page) * 10 + 10; i++){
        dataItems[j] = items[i]
        j++
      }
      setDataPage(dataItems)
   }
    else setDataPage(items)
    return dataItems
  }
  useEffect(() => {
    async function fetchData() {
      try {
          setLoading(true)
          const res = await fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${query}`);
          const movies = await res.json();    
          setData(movies.data)
          setItems(movies?.data.items)
          if (Math.round(movies?.data.params?.pagination?.totalItems / 10 > 10)) {
            setTotalPages(10)
          }
          else setTotalPages(Math.round(movies?.data.params?.pagination?.totalItems / 10))
          listDataPage(currentPage, movies.data.items)
          setLoading(false)
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
      fetchData();
  }, []);
  useEffect(() => {
    listDataPage(currentPage.selected, items)
  }, [currentPage])
  return (
    <>
      {isLoading ? <Loading></Loading> : <div>
        <MovieSearch></MovieSearch>
      <BannerSlider></BannerSlider>
      <h2 className='name-title'>{data.titlePage}</h2>
      <div className="list-items">
      {dataPage.map((item)=> (<MovieCard movie={item}></MovieCard>))}
      </div>
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
        </div> }
    </>
  );
};

export default Page;
