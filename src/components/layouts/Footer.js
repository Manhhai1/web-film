import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerTop'>
        <div className='column'>
          <h3>Phim Mới</h3>
          <ul>
            <li><a href="#">Phim chiếu rạp</a></li>
            <li><a href="#">Phim lẻ</a></li>
            <li><a href="#">Phim bộ</a></li>
            <li><a href="#">Phim hành động</a></li>
            <li><a href="#">Phim viễn tưởng</a></li>
            <li><a href="#">Phim tâm lý</a></li>
            <li><a href="#">Phim hài hước</a></li>
          </ul>
        </div>
        <div className='column'>
          <h3>Phim Hay</h3>
          <ul>
            <li><a href="#">Phim Mỹ</a></li>
            <li><a href="#">Phim Hàn Quốc</a></li>
            <li><a href="#">Phim Trung Quốc</a></li>
            <li><a href="#">Phim Thái Lan</a></li>
            <li><a href="#">Phim Việt Nam</a></li>
            <li><a href="#">Phim Ma Kinh Dị</a></li>
            <li><a href="#">Phim Hoạt Hình</a></li>
          </ul>
        </div>
        <div className='column'>
          <h3>Phim Hot</h3>
          <ul>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Phimmoi</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Trợ giúp</a></li>
          </ul>
        </div>
        <div className='column'>
          <h3>Thông tin</h3>
          <ul>
            <li><a href="#">Điều khoản sử dụng</a></li>
            <li><a href="#">Chính sách riêng tư</a></li>
            <li><a href="#">Khiếu nại bản quyền</a></li>
            <li><a href="#">© 2023 PhimChill.Net</a></li>
          </ul>
        </div>
      </div>
      <div className='footerBottom'>
        <p>© 2023 PhimChill.Net. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
