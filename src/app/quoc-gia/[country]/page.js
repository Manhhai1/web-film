
import MoviePageContent from './MoviePageContent';

export async function generateMetadata({ params }) {
  const country = params['country'];
  async function fetchData() {
    const res = await fetch(`https://phimapi.com/v1/api/quoc-gia/${country}?page=1`);
    const data = await res.json();
    return data.data.seoOnPage;
  }
  const seoOnPage = await fetchData();
  return {
    title: seoOnPage.titleHead || 'Default Title',
    description: seoOnPage.descriptionHead || 'Default description',
    openGraph: {
      title: seoOnPage.titleHead || 'Default Title',
      description: seoOnPage.descriptionHead || 'Default description',
      url: `https://top-phim.pro/quoc-gia/${country}`,
      images: seoOnPage?.og_image?.map((item) => `https://phimimg.com/${item}`) || []
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

