import Link from 'next/link';
import '../css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link href="/">Phim Mới</Link>
      </div>
      <nav>
        <ul className='menu'>
          <li><Link href="/phim-moi">Phim mới</Link></li>
          <li><Link href="/phim-le">Phim lẻ</Link></li>
          <li><Link href="/phim-bo">Phim bộ</Link></li>
          <li className='dropdown'>
            <span>Thể loại</span>
            <ul className='dropdownMenu'>
              <li><Link href="/the-loai/hanh-dong">Phim Hành động</Link></li>
              <li><Link href="/the-loai/tinh-cam">Phim Tình cảm</Link></li>
              <li><Link href="/the-loai/vo-thuat">Phim Võ thuật</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim Hoạt hình</Link></li>
              <li><Link href="/the-loai/hai-huoc">Phim Hài hước</Link></li>
              <li><Link href="/the-loai/co-trang">Phim Cổ trang</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim Tâm lý</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim hình sự</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim chiến tranh</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim thể thao</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Game Show</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim chiếu rạp</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim sắp chiếu</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim viễn tưởng</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim phiêu lưu</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim khoa học</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim Ma - Kinh dị</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim âm nhạc</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim thần thoại</Link></li>
              <li><Link href="/the-loai/hoat-hinh">Phim truyền hình</Link></li>
              {/* Thêm các thể loại khác tại đây */}
            </ul>
          </li>
          <li className='dropdown'>
            <span>Quốc gia</span>
            <ul className='dropdownMenu'>
              <li><Link href="#">Phim trung quốc</Link></li>
              <li><Link href="#">Phim hàn quốc </Link></li>
              <li><Link href="#">Phim nhật bản</Link></li>
              <li><Link href="#">Phim âu mỹ</Link></li>
              <li><Link href="#">Phim Thái lan</Link></li>
              <li><Link href="#">Phim Đài Loan</Link></li>
              <li><Link href="#">Phim Tổng hợp</Link></li>
              <li><Link href="#">Phim Hồng Kông</Link></li>
              <li><Link href="#">Phim Ấn độ</Link></li>
            </ul>
          </li>
          <li className='dropdown'>
            <span>Năm phát hành</span>
            <ul className='dropdownMenu'>
              <li><Link href="#">Phim 2024</Link></li>
              <li><Link href="#">Phim 2023</Link></li>
              <li><Link href="#">Phim 2022</Link></li>
              <li><Link href="#">Phim 2021</Link></li>
              <li><Link href="#">Phim 2020</Link></li>
              <li><Link href="#">Phim 2019</Link></li>
              <li><Link href="#">Phim 2018</Link></li>
              <li><Link href="#">Phim 2017</Link></li>
              <li><Link href="#">Phim 2016</Link></li>
              <li><Link href="#">Phim 2015</Link></li>
              <li><Link href="#">Phim 2014</Link></li>
              <li><Link href="#">Phim 2013</Link></li>
              <li><Link href="#">Phim 2012</Link></li>
              <li><Link href="#">Phim 2011</Link></li>
              <li><Link href="#">Phim 2010</Link></li>
              <li><Link href="#">Phim 2009</Link></li>
            </ul>
          </li>
          <li><Link href="/phim-chieu-rap">Phim chiếu rạp</Link></li>
          <li><Link href="/trailer">Trailer</Link></li>
          <li className='top-phim'><Link href="/top-phim">Top phim</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
