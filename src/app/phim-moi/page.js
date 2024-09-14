import MoviePageContent from './MoviePageContent';

export async function generateMetadata() {
 

  return {
    title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất',
    description:  'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phimmoi.net chuẩn nhanh online hay hấp dẫn.',
    keywords: 'Phim Trung Quốc, Phim Hàn Quốc, Phim chiếu rạp, Phim hành động, Phim kinh di, Phim hài, Phim hoạt hình, Phim Mỹ, Phim Võ Thuật, Phim bộ hay nhất, Xem phim Online',
    viewport: 'width=device-width, initial-scale=1.0, user-scalable=yes',
    robots: 'index,follow',
    'theme-color': '#ff8a00',
    openGraph: {
      site_name: 'PhimMoi',
      locale: 'vi_VN',
      title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất',
      description:  'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phimmoi.net chuẩn nhanh online hay hấp dẫn.',
      type: 'website',
      url:  'https://web-film-pink.vercel.app/',
    },
    twitter: {
      card: 'summary',
      title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất',
      description: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phimmoi.net chuẩn nhanh online hay hấp dẫn.',
    },
   
    scripts: [
      { src: 'https://connect.facebook.net/vi_VN/sdk.js?hash=2f12450ef15f9608f729a8a02650fa12', async: true, crossorigin: 'anonymous' },
      { id: 'facebook-jssdk', src: '//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=1057881674616601&autoLogAppEvents=1' },
      { src: 'https://www.google-analytics.com/analytics.js', async: true },
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-Y26KQV2LK8&l=dataLayer&cx=c', async: true },
    ],
  };
}

export default async function Page() {
  return (
    <>
      <MoviePageContent />
    </>
  );
}
