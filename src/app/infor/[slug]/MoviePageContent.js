'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';
import MoviePopup from '@/components/layouts/MoviePopup'
import './page.css'
import Loading from '@/components/layouts/Loading';
import Section2 from '@/components/layouts/Section2'
export default function Page() {
  const params = useParams(); // Get the dynamic route parameters
  const filmSlug = params['slug']; // Access the dynamic parameter
  const [dataFilm, setDataFilm] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [linkEmbed, setLinkEmbed] = useState('');
  const [isLoading, setLoading] =useState(true)
  const handleOpenPopup = (e) => {
    setLinkEmbed(e.target.getAttribute('src'));
    setIsOpenPopup(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const res = await fetch(`https://phimapi.com/phim/${filmSlug}`);
        const movies = await res.json();
        setDataFilm(movies.movie);
        setEpisodes(movies.episodes[0].server_data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching info movie:', error);
      }
    }
    fetchData();
  }, [filmSlug]);
  return (
     isLoading?<Loading></Loading>: <div className='page'>
     <div className="film-info">
       <div className="image-film" style={{ background: `url(${dataFilm?.thumb_url})` }}>
         <img className='poster-film' src={dataFilm?.poster_url} alt={`${dataFilm?.name}`} />
         <div className="content-film">
           <h2>{dataFilm?.name}</h2>
           <h4>{dataFilm?.origin_name}</h4>
            <div className="btn-open">
                <div className="btn-watch-film" src={episodes[0]?.link_embed} onClick={handleOpenPopup}>
                    Xem phim
                </div>
                <div className="btn-watch-trailer"  src={dataFilm?.trailer_url}>
                    <a href={dataFilm?.trailer_url} target="_blank">Trailer</a>
                </div>
           </div>
         </div>
       </div>
       <div className="movie">
         <div className="movie-details">
           <p><strong>Đang phát:</strong> {dataFilm.lang} - {dataFilm.quality}</p>
           <p><strong>Năm phát hành:</strong> {dataFilm?.year}</p>
           <p><strong>Quốc gia:</strong> {dataFilm?.country?.map(coun => `${coun.name}`).join(', ')}</p>
           <p><strong>Thể loại:</strong> {dataFilm?.category?.map(cate => `${cate.name}`).join(', ')}</p>
           <p><strong>Đạo diễn:</strong> {dataFilm?.director?.join(', ')}</p>
           <p><strong>Thời lượng:</strong> {dataFilm?.time}</p>
           <p><strong>Diễn viên:</strong> {dataFilm?.actor?.join(', ')}</p>
           <p><strong>Tình trạng:</strong> {dataFilm.episode_current}</p>
         </div>
         <div className="name-content">Nội dung phim</div>
         <div className="movie-review">
           <p>{dataFilm.content}</p>
         </div>
         <div className="episodes">
           {episodes.map((item) => (
             <div key={item.name} src={item.link_embed} onClick={(e)=>handleOpenPopup(e)} className="btn-watch">
               {item.name}
             </div>
           ))}
          </div>
          <Section2 category={dataFilm?.category?.slug}></Section2>
       </div>
      </div>
     <MoviePopup
       isOpenPopup={isOpenPopup}
       setIsOpenPopup={setIsOpenPopup}
       src_film={linkEmbed}
      />
    
   </div>
  )
}
