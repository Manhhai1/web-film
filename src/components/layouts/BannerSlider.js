"use client";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Ensure correct CSS file
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Ensure correct module import
import '../css/BannerSlider.css'; // Your custom styles
import banner_phimmoi from '../../assets/img/poster-phim-moi.webp';
import banner_phimhanhdong from '../../assets/img/poster-phim-hanh-dong.webp'
import banner_phimhoathinh from '../../assets/img/poster-phim-hoat-hinh-1.webp'
const BannerSlider = () => {
  const slides = [
    {
      image: banner_phimmoi.src,
      title: 'Phim Mới Nhất 2024',
      description: 'Cùng khám phá những bộ phim mới và hot nhất!',
      link: '/phim-moi'
    },
    {
      image: banner_phimhanhdong.src,
      title: 'Phim Hành Động',
      description: 'Những pha hành động nghẹt thở đang chờ bạn.',
      link: '/the-loai/hanh-dong'
    },
    {
      image: banner_phimhoathinh.src,
      title: 'Phim Hoạt Hình Vui Nhộn',
      description: 'Thưởng thức các bộ phim hoạt hình hài hước.',
      link: '/hoat-hinh'
    }
  ];

  return (
    <section className='slider'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, // Delay between slides in ms
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className='slide'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className='overlay'></div>
              <div className='content'>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a href={slide.link} className='ctaButton'>Xem Ngay</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;
