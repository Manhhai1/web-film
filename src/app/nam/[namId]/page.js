
import MoviePageContent from './MoviePageContent';
import server from '@/app/constance';
export async function generateMetadata({ params }) {
  const year = params['namId'];
  async function fetchData() {
    const res = await fetch(`${server}/api/nam/${year}?page=1`);
    const data = await res.json();
    return data?.data?.seoOnPage;
  }
  const seoOnPage = await fetchData();
  return {
    title: seoOnPage?.titleHead || 'Default Title',
    description: seoOnPage?.descriptionHead || 'Default description',
    openGraph: {
      title: seoOnPage?.titleHead || 'phim theo năm',
      description: seoOnPage?.descriptionHead || 'Tổng hợp phim theo năm',
      url: `https://top-phim.pro/nam/${year}`,
      images:  seoOnPage?.og_image?.map((item) => `https://phimimg.com/${item}`) || []
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

