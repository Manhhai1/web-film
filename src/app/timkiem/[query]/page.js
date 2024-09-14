
import MoviePageContent from './MoviePageContent';
export async function generateMetadata({ params }) {
  const query = params['query'];
  async function fetchData() {
    const res = await fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${query}`);
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
      url: seoOnPage.og_url || 'https://defaulturl.com',
      images: seoOnPage.og_image || []
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

