
import MoviePageContent from './MoviePageContent';
export async function generateMetadata({ params }) {
  const category = params['category'];
  async function fetchData() {
    const res = await fetch(`https://phimapi.com/v1/api/the-loai/${category}?page=1`);
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
      url: `http://top-phim.pro/the-loai/${category}`,
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

