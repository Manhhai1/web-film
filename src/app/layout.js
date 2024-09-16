// app/layout.js
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Head from 'next/head';
import './globals.css';  // Đưa vào các style chung
export const metadata = {
  title:  'top-phim | Top Phim | Top-phim | Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
  description:  'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
  keywords: 'Phim Trung Quốc, Phim Hàn Quốc, Phim chiếu rạp, Phim hành động, Phim kinh di, Phim hài, Phim hoạt hình, Phim Mỹ, Phim Võ Thuật, Phim bộ hay nhất, Xem phim Online,Xem phim HD miễn phí, Phim miễn phí, Phim mới nhất,Phim hay, Xem phim chất lượng cao,Xem phim bản quyền',
  googleSiteVerification: 'IrKaKEKGaUZhDogmifuTNPDLlxlhOHFk_se1nuE1-F0',
  openGraph: {
    site_name: 'Streaming with HM',
    locale: 'vi_VN',
    title: 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
    description: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
    type: 'website',
    url: 'https://phimmoichill2.net/',
  },
  twitter: {
    card: 'summary',
    title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất | Top Phim Hay',
    description: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho top-phim.pro chuẩn nhanh online hay hấp dẫn.',
  },
};
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "top-phim.pro",
    "url": "https://top-phim.pro"
  },
  
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://top-phim.pro",
  "potentialAction": {
  "@type": "SearchAction",
  "target": "https://top-phim.pro/timkiem?keyword={search_term_string}",
  "query-input": "required name=search_term_string"
  }
  },

  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://top-phim.pro",
          "name": "top-phim.pro",
          "image": "https://top-phim.pro"
        }    
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://www.iq.com/drama",
          "name": "Top-Phim",
          "image": "https://top-phim.pro/assets/img/logo-1.png"
        }    
      }
    ]
}


]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
        />
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
        />
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[2]) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>

        <Header></Header>
        {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
