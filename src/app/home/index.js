// pages/index.js
import Layout from '../src/components/layouts/Layout';
import MovieCard from '../src/components/movies/MovieCard';

const movies = [
  { title: 'Inception', year: 2010, rating: 8.8, poster: '/inception.jpg' },
  { title: 'Interstellar', year: 2014, rating: 8.6, poster: '/interstellar.jpg' },
  { title: 'The Dark Knight', year: 2008, rating: 9.0, poster: '/dark-knight.jpg' },
];

const Home = () => {
  return (
    <div>
      <h1>Featured Movies</h1>
      <div style={movieGridStyle}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
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
