// pages/index.js
import Layout from '../components/layouts/Layout'
import Section from '../components/layouts/Section'
import BannerSlider from '@/components/layouts/BannerSlider';
import MovieSearch from '@/components/layouts/MovieSearch';
const Home = () => {
  const list_section = [
    { type_film: 'phim_le', name_type: 'Phim lẻ', link: 'https://phimapi.com/v1/api/danh-sach/phim-le', href:'/phim-le' },
    { type_film: 'phim_hoat_hinh', name_type: 'Phim hoạt hình', link: 'https://phimapi.com/v1/api/danh-sach/hoat-hinh', href:'/hoat-hinh' },
    { type_film: 'phim_bo', name_type: 'Phim bộ', link: 'https://phimapi.com/v1/api/danh-sach/phim-bo' , href:'/phim-bo'},
    { type_film: 'tv-shows', name_type: 'TV Shows', link: 'https://phimapi.com/v1/api/danh-sach/tv-shows' , href:'/tv-shows'},
    { type_film: 'phim-moi-cap-nhat', name_type: 'Phim mới cập nhật', link: 'https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1', href:'/phim-moi'}
  ]
  return (
    
    <div>
      <div style={movieGridStyle}>
          <MovieSearch> </MovieSearch>
        <BannerSlider></BannerSlider>
        <Section type={list_section[4]}></Section>
        <Section type={list_section[3]}></Section>
        <Section type={list_section[0]}></Section>
        <Section type={list_section[1]}></Section>
        <Section type={list_section[2]}></Section>
      </div>
    </div>
  );
};

const movieGridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;
