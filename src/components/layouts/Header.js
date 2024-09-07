'use client'
import Link from 'next/link';
import '../css/Header.css';
import { useState } from 'react'; 

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

 // Open sidebar
const openSidebar = () => {
  document.getElementById("sidebar").classList.add("openSidebar");
};

// Close sidebar
const closeSidebar = () => {
  document.getElementById("sidebar").classList.remove("openSidebar");
};


  return (
    <header className='header'>
      <div className='logo'>
        <Link href="/">Phim Mới</Link>
      </div>

      <div className='menu-container'>
        <ul className='menu'>
          <li><Link href="/phim-moi">Phim mới</Link></li>
          <li><Link href="/phim-le">Phim lẻ</Link></li>
          <li><Link href="/phim-bo">Phim bộ</Link></li>
          <li className='dropdown'>
            <span>Thể loại</span>
            <ul className='dropdownMenu'>
              <li><Link href="/the-loai/hanh-dong">Phim Hành động</Link></li>
              <li><Link href="/the-loai/tinh-cam">Phim Tình cảm</Link></li>
            </ul>
          </li>
          <li className='dropdown'>
            <span>Quốc gia</span>
            <ul className='dropdownMenu'>
              <li><Link href="#">Phim trung quốc</Link></li>
              <li><Link href="#">Phim hàn quốc</Link></li>
            </ul>
          </li>
          <li className='dropdown'>
            <span>Năm phát hành</span>
            <ul className='dropdownMenu'>
              <li><Link href="#">Phim 2024</Link></li>
              <li><Link href="#">Phim 2023</Link></li>
            </ul>
          </li>
          <li><Link href="/phim-chieu-rap">Phim chiếu rạp</Link></li>
          <li><Link href="/trailer">Trailer</Link></li>
          <li className='top-phim'><Link href="/top-phim">Top phim</Link></li>
        </ul>

        {/* Sidebar */}
        <div id="sidebar" className='sidebar'>
          <a href="#" className="closebtn" onClick={closeSidebar}>&times;</a>
          <ul>
            <li><Link href="/phim-moi">Phim mới</Link></li>
            <li><Link href="/phim-le">Phim lẻ</Link></li>
            <li><Link href="/phim-bo">Phim bộ</Link></li>
            <li className="dropdown">
              <span>Thể loại</span>
              <ul className="dropdownMenu">
                <li><Link href="/the-loai/hanh-dong">Phim Hành động</Link></li>
                <li><Link href="/the-loai/tinh-cam">Phim Tình cảm</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Button to open Sidebar */}
        <button className="openbtn" onClick={openSidebar}>&#9776;</button>
      </div>
    </header>
  );
};

export default Header;
