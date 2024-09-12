'use client'
import React, { useState } from 'react';
import '../css/MovieSearch.css'; // Import CSS file
import Image from 'next/image';
import icon_search from '../../assets/img/search.png'
import Link from 'next/link';
const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className='container'>
          <form className="search-input-form" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm phim theo diễn viên, thể loại, năm..."
        />
        <Link href={`/timkiem/${query}`}  className='link'></Link>
          <Image className='img-icon' alt='icon search' src={icon_search} height={20} width={20}></Image>
        </form>
    </div>
  );
};

export default MovieSearch;
