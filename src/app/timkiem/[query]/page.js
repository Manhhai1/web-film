
import MoviePageContent from './MoviePageContent';
import server_constant from '../../constance'
export async function generateMetadata({ params }) {
  const query = params['query'];
  async function fetchData() {
    const res = await fetch(`${server_constant}/api/search?keyword=${query}`);
    const data = await res.json();
    return data?.data?.seoOnPage;
  }
  const seoOnPage = await fetchData();
  return {
    title: seoOnPage?.titleHead || 'Default Title',
    description: seoOnPage?.descriptionHead || 'Default description',
    openGraph: {
      title: seoOnPage?.titleHead || 'Default Title',
      description: seoOnPage?.descriptionHead || 'Default description',
      url: `https://top-phim.pro/timkiem/${query}`,
    }
  };
}

export default async function Page() {
  return (
    <>
      <MoviePageContent></MoviePageContent>
    </>
      );
}

