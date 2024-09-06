// app/layout.js
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import BannerSlider from '@/components/layouts/BannerSlider';
import './globals.css';  // Đưa vào các style chung
export const metadata = {
  title: 'Film Web',
  description: 'A great film web app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <BannerSlider></BannerSlider>
        {children}
      <Footer></Footer>
      </body>
    </html>
  );
}
