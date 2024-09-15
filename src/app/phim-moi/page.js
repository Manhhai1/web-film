import MoviePageContent from './MoviePageContent';

export async function generateMetadata() {
 
  return {
    title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất',
    description:  'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
    keywords: 'Phim Trung Quốc, Phim Hàn Quốc, Phim chiếu rạp, Phim hành động, Phim kinh di, Phim hài, Phim hoạt hình, Phim Mỹ, Phim Võ Thuật, Phim bộ hay nhất, Xem phim Online',
    openGraph: {
      title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
      description:  'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
      type: 'website',
      url:  'https://top-phim.pro/phim-moi',
    },
    twitter: {
      card: 'summary',
      url:  'https://top-phim.pro/phim-moi',
      title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
      description: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
    },
  };
}

export default async function Page() {
  return (
    <>
      <MoviePageContent />
    </>
  );
}
