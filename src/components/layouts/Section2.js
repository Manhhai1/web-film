'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import '../css/Section2.css';
import MovieCard from '../movies/MovieCard';

const Section2 = ({ category }) => {
    const [films, setFilms] = useState([]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            }
        ]
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`https://phimapi.com/v1/api/the-loai/${category}?page=1`);
                const movies = await res.json();
                setFilms(movies.data?.items || movies.items);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        }
        fetchData()
    }, {}); // Thêm category vào dependencies của useEffect
    return (
        <div className="section">
            <h4>Có thể bạn cũng thích</h4>
                <Slider className='list-item' {...settings}>
                    {films?.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </Slider>
        </div>
    );
};

export default Section2;
