
import MoviePageContent from './MoviePageContent';

export async function generateMetadata({ params }) {
  const filmSlug = params['slug'];
  async function fetchData() {
    const res = await fetch(`https://phimapi.com/phim/${filmSlug}`);
    const data = await res.json();
    return data.movie;
  }
  const data = await fetchData();
  return {
    title: `${data.name} | ${data.origin_name}` || 'Default Title',
    description: data.content || 'Default description',
    url: `https://web-film-pink.vercel/infor/${filmSlug}`,
    images:[data.thumb_url],
    openGraph: {
      title: data.name || 'Default Title',
      description: data.content || 'Default description',
      url: `https://web-film-pink.vercel/infor/${filmSlug}`,
      images:[data.thumb_url]
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

