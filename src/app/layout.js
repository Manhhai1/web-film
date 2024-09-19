// app/layout.js
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import './globals.css';  // Đưa vào các style chung
import Head from 'next/head';
export const metadata = {
  title: 'top-phim | Top Phim | Top-phim | Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
  description: 'Top Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
  keywords: 'Phim Trung Quốc, Phim Hàn Quốc, Phim chiếu rạp, Phim hành động, Phim kinh di, Phim hài, Phim hoạt hình, Phim Mỹ, Phim Võ Thuật, Phim bộ hay nhất, Xem phim Online,Xem phim HD miễn phí, Phim miễn phí, Phim mới nhất,Phim hay, Xem phim chất lượng cao,Xem phim bản quyền',
  verification: {
    google: 'IrKaKEKGaUZhDogmifuTNPDLlxlhOHFk_se1nuE1-F0',
  },
  openGraph: {
    siteName: 'Streaming with HM',
    title: 'top-phim | Top Phim | Top-phim | Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
    description: 'Top Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
    type: 'website',
    url: 'https://top-phim.pro/',
  },
  twitter: {
    card: 'summary',
    title: 'Top Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
    description: 'Top Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
  },
  manifest: '/manifest.json',
  // Add structured data here
  other: {
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "top-phim.pro",
          "url": "https://top-phim.pro/",
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://top-phim.pro",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://top-phim.pro/timkiem?keyword={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@id": "https://top-phim.pro",
                "name": "top-phim.pro",
                "image": "https://top-phim.pro",
              },
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "https://www.top-phim.pro/",
                "name": "Top-Phim",
                "image": "https://top-phim.pro/assets/img/logo-1.png",
              },
            },
          ],
        }),
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
