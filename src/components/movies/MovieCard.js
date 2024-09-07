// src/components/movies/MovieCard.js
'use client'
import './MovieCard.css'
import Image from 'next/image';
import img_item from '../../assets/img/ee307b676d8d45de50b07cc206c85787.jpg'
import play_icon from '../../assets/img/icons8-play-48.png'
import Link from 'next/link';
const checkString = (s) => {
  let str = 'https://phimimg.com/'
  if (s.includes(str)) return s
  else {
    s = 'https://phimimg.com/' + s
    return s
  }
}
const MovieCard = ({ movie, key }) => {
    console.log(movie)
    return (
       <Link href={`/infor/${movie.slug}`}> <div className="item" key={key}>
        <span className='label'>{movie.lang || 'Vietsub'}-{movie.quality || 'HD'}</span>
                <img className='item-img' src={`${checkString(movie.poster_url)}`} />
                <h4 className='name-film'>{movie.name}</h4>
                <img className='play-icon' src={play_icon.src} alt="" />
              </div>
      </Link>
    );
  };

  export default MovieCard;
  