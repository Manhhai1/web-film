// app/layout.js
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Head from 'next/head';
import './globals.css';  // Đưa vào các style chung
export const metadata = {
  title:  'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất',
  description:  'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phimmoi.net chuẩn nhanh online hay hấp dẫn.',
  keywords: 'Phim Trung Quốc, Phim Hàn Quốc, Phim chiếu rạp, Phim hành động, Phim kinh di, Phim hài, Phim hoạt hình, Phim Mỹ, Phim Võ Thuật, Phim bộ hay nhất, Xem phim Online',
  viewport: 'width=device-width, initial-scale=1.0, user-scalable=yes',
  robots: 'index,follow',
  'theme-color': '#ff8a00',
  openGraph: {
    site_name: 'Streaming with HM',
    locale: 'vi_VN',
    title: 'Phim Mới | Phim HD | Xem phim nhanh | Phim VietSub | Thuyết Minh Hay Nhất',
    description: 'Phim Mới chất lượng cao miễn phí. Xem phim hd VietSub. Phim thuyết minh chất lượng HD. Kho phimmoi.net chuẩn nhanh online hay hấp dẫn.',
    type: 'website',
    url: 'https://phimmoichill2.net/',
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
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "xemphimnhanh",
    "url": "https://web-film-pink.vercel.app"
  },
  
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://web-film-pink.vercel.app",
  "potentialAction": {
  "@type": "SearchAction",
  "target": "https://web-film-pink.vercel.app/timkiem?keyword={search_term_string}",
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
          "@id": "https://web-film-pink.vercel.app/",
          "name": "xemphimnhanh",
          "image": "https://web-film-pink.vercel.app/"
        }    
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://www.iq.com/drama",
          "name": "iQiyi",
          "image": "https://www.iqiyipic.com/lequ/20230518/logo.ico"
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
