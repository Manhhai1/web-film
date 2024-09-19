'use client'; // Đảm bảo file được đánh dấu là client-side

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link từ Next.js
import '../css/MovieSearch.css';
import Image from 'next/image';
import icon_search from '../../assets/img/search.webp';

const MovieSearch = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='container'>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          fontSize: '16px', // Đảm bảo kích thước font tối thiểu
          touchAction: 'none', // Ngăn chặn zoom khi chạm
        }}
        placeholder="Tìm kiếm phim..."
      />
      <Link className='link' href={`/timkiem/${query}`}>
        <Image 
          className='img-icon' 
          alt='icon search' 
          src={icon_search} 
          height={20} 
          width={20}
        />
      </Link>
    </div>
  );
};

export default MovieSearch;
