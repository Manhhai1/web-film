
import MoviePageContent from './MoviePageContent';
import server_constant from '../constance'
export async function generateMetadata() {
  async function fetchData() {
    const res = await fetch(`${server_constant}/api/the-loai/phim-chieu-rap?page=1`);
    const data = await res.json();
    return data?.data?.seoOnPage;
  }
  const seoOnPage = await fetchData();
  return {
    title: seoOnPage?.titleHead || 'Default Title',
    description: seoOnPage?.descriptionHead || 'Default description',
    openGraph: {
      title: seoOnPage?.titleHead || '',
      description: seoOnPage?.descriptionHead || '',
      url: `https://top-phim.pro/phim-chieu-rap`,
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

