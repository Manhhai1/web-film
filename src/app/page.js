// pages/index.js
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import constant_server from './constance'
import Footer from '@/components/layouts/Footer';
// Sử dụng dynamic import để lazy load các component
const Layout = dynamic(() => import('../components/layouts/Layout'));
const Section = dynamic(() => import('../components/layouts/Section'));
const BannerSlider = dynamic(() => import('@/components/layouts/BannerSlider'));
const MovieSearch = dynamic(() => import('@/components/layouts/MovieSearch'));

// Định nghĩa trang Home
const Home = () => {
  // Danh sách các section với thông tin phim
  const list_section = [
    { type_film: 'phim-chieu-rap', name_type: 'Phim chiếu rạp', link: `${constant_server}/api/the-loai/phim-chieu-rap`, href:'/phim-chieu-rap' },
    { type_film: 'phim_le', name_type: 'Phim lẻ', link: 'https://phimapi.com/v1/api/danh-sach/phim-le', href:'/phim-le' },
    { type_film: 'phim_hoat_hinh', name_type: 'Phim hoạt hình', link: 'https://phimapi.com/v1/api/danh-sach/hoat-hinh', href:'/hoat-hinh' },
    { type_film: 'phim_bo', name_type: 'Phim bộ', link: 'https://phimapi.com/v1/api/danh-sach/phim-bo', href:'/phim-bo' },
    { type_film: 'tv-shows', name_type: 'TV Shows', link: 'https://phimapi.com/v1/api/danh-sach/tv-shows', href:'/tv-shows' },
    { type_film: 'phim-moi-cap-nhat', name_type: 'Phim mới cập nhật', link: 'https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1', href:'/phim-moi' },
    
  ];

  return (
    <div>
      {/* Hiển thị MovieSearch với Suspense */}
      <Suspense fallback={<div>Loading Movie Search...</div>}>
        <MovieSearch />
      </Suspense>

      {/* Hiển thị BannerSlider với Suspense */}
      <Suspense fallback={<div>Loading Banner...</div>}>
        <BannerSlider />
      </Suspense>

      {/* Hiển thị danh sách Section với Suspense và .map() */}
      {list_section.map((section, index) => (
        <Suspense key={index} fallback={<div>Loading Section...</div>}>
          <Section type={section} />
        </Suspense>
      ))}
      <Footer></Footer>
    </div>
  );
};

// Layout của trang được bọc trong Layout component
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;
