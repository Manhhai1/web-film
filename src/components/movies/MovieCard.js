// src/components/movies/MovieCard.js
'use client';
import './MovieCard.css';
import play_icon from '../../assets/img/icons8-play-48.webp';
import Link from 'next/link';
import Image from 'next/image';

const checkString = (s) => {
  const baseUrl = 'https://phimimg.com/';
  return s?.includes(baseUrl) ? s : baseUrl + s;
};

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/infor/${movie?.slug || '#'}`}>
      <div className="item" key={movie?._id}>
        <span className='label'>{movie?.lang || 'Vietsub'} - {movie?.quality || 'HD'}</span>
        <Image
          className='item-img'
          src={checkString(movie?.poster_url)}
          alt={movie?.name || 'Movie Poster'}
          width={230} 
          height={350}
          loading="eager"
        />
        
        <h1 className='name-film'>{movie?.name}</h1>
        
        <Image
          className='play-icon'
          src={play_icon.src}
          alt="Play Icon"
          width={48} 
          height={48}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
