import '../css/Footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerTop'>
        <div className='column'>
          <h3>Phim Mới</h3>
          <ul>
            <li><Link href="/phim-le">Phim lẻ</Link></li>
            <li><Link href="/phim-bo">Phim bộ</Link></li>
            <li><Link href="/the-loai/hanh-dong">Phim hành động</Link></li>
            <li><Link href="/the-loai/vien-tuong">Phim viễn tưởng</Link></li>
            <li><Link href="/the-loai/tam-ly">Phim tâm lý</Link></li>
            <li><Link href="/the-loai/hai-huoc">Phim hài hước</Link></li>
          </ul>
        </div>
        <div className='column'>
          <h3>Phim Hay</h3>
          <ul>
            <li><Link href="/quoc-gia/au-my">Phim Âu Mỹ</Link></li>
            <li><Link href="/quoc-gia/han-quoc">Phim Hàn Quốc</Link></li>
            <li><Link href="/quoc-gia/trung-quoc">Phim Trung Quốc</Link></li>
            <li><Link href="/quoc-gia/thai-lan">Phim Thái Lan</Link></li>
            <li><Link href="/quoc-gia/viet-nam">Phim Việt Nam</Link></li>
            <li><Link href="/the-loai/kinh-di">Phim Ma Kinh Dị</Link></li>
            <li><Link href="/hoat-hinh">Phim Hoạt Hình</Link></li>
          </ul>
        </div>
        <div className='column'>
          <h3>Phim Hot</h3>
          <ul>
            <li><Link href="#">Về chúng tôi</Link></li>
            <li><Link href="/phim-moi-cap-nhat">Phimmoi</Link></li>
            <li><Link href="#">Sitemap</Link></li>
            <li><Link href="#">Trợ giúp</Link></li>
          </ul>
        </div>
        <div className='column'>
          <h3>Thông tin</h3>
          <ul>
            <li><Link href="#">Điều khoản sử dụng</Link></li>
            <li><Link href="#">Chính sách riêng tư</Link></li>
            <li><Link href="#">Khiếu nại bản quyền</Link></li>
            <li><Link href="#">© 2024 PhimChill.Net</Link></li>
          </ul>
        </div>
      </div>
      <div className='footerBottom'>
        <p>© 2024 PhimChill.Net. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
