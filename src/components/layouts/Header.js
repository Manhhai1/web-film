'use client'
import Link from 'next/link';
import '../css/Header.css';
import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo-1.png'
import Image from 'next/image';
const Header = () => {
  const [category, setCategory] = useState([])
  const [country, setCountry] = useState([])
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017,
    2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007,
    2006, 2005, 2004, 2003, 2002, 2001, 2000];
  const [isOpenSubmenuCate, setOpenSubmenuCate] = useState(false)
  const [isOpenSubmenuCountry, setOpenSubmenuCountry] = useState(false)
  const [isOpenSubmenuYear, setOpenSubmenu] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://phimapi.com/the-loai`);
        const res_1 = await fetch(`https://phimapi.com/quoc-gia`);
        const categories = await res.json();
        const countries = await res_1.json();
        setCategory(categories)
        setCountry(countries)
      } catch (error) {
        console.error('Error fetching:', error);
      }
    }
    fetchData();
  }, []);

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
        <Link href="/"><Image width={200} height={70} src={logo} alt='logo-xem-phim-truc-tuyen'></Image></Link>
      </div>

      <div className='menu-container'>
        <ul className='menu'>
          <li><Link href="/phim-moi">Phim mới</Link></li>
          <li><Link href="/hoat-hinh">Hoạt hình</Link></li>
          <li><Link href="/tv-shows">Tv Shows</Link></li>
          <li><Link href="/phim-le">Phim lẻ</Link></li>
          <li><Link href="/phim-bo">Phim bộ</Link></li>
          <li className='dropdown'>
            <span>Thể loại</span> 
            <ul className='dropdownMenu'>
              {category?.map(item => <li key={item.slug}><Link href={`/the-loai/${item.slug}`}>{item.name}</Link></li> )}
            </ul>
          </li>
          <li className='dropdown'>
            <span>Quốc gia</span>
            <ul className='dropdownMenu'>
                {country?.map(item => <li key={item.slug}><Link href={`/quoc-gia/${item.slug}`}>{item.name}</Link></li> )}
            </ul>
          </li>
          <li className='dropdown'>
            <span>Năm phát hành</span>
            <ul className='dropdownMenu'>
                {years.map(item => <li className='year-li'key={item}><Link href={`/nam/${item}`}>{item}</Link></li> )}
            </ul>
          </li>
          <li className='top-phim'><Link href="/top-phim">Top phim</Link></li>
        </ul>

        {/* Sidebar */}
        <div id="sidebar" className='sidebar'>
          <div className="closebtn" onClick={closeSidebar}>&times;</div>
          <ul className='ul-parent'>
          <li onClick={closeSidebar}><Link href="/phim-moi">Phim mới</Link></li>
          <li onClick={closeSidebar}><Link href="/hoat-hinh">Hoạt hình</Link></li>
          <li onClick={closeSidebar}><Link href="/tv-shows">Tv Shows</Link></li>
          <li onClick={closeSidebar}><Link href="/phim-le">Phim lẻ</Link></li>
          <li onClick={closeSidebar}><Link href="/phim-bo">Phim bộ</Link></li>
            <li className="dropdown">
              <span onClick={()=>setOpenSubmenuCate(!isOpenSubmenuCate)}>Thể loại</span>
              {
                    isOpenSubmenuCate? <ul className="dropdownMenu-child">
                    {category?.map(item => <li onClick={closeSidebar} key={item.slug}><Link href={`/the-loai/${item.slug}`}>{item.name}</Link></li> )}
                  </ul>: <></>
              }
            </li>
            <li className="dropdown">
              <span onClick={()=>setOpenSubmenuCountry(!isOpenSubmenuCountry)}>Quốc gia</span>
              {
                    isOpenSubmenuCountry? <ul className="dropdownMenu-child">
                    {country?.map(item => <li onClick={closeSidebar} key={item.slug}><Link href={`/the-loai/${item.slug}`}>{item.name}</Link></li> )}
                  </ul>: <></>
              }
            </li>
            <li className="dropdown">
              <span onClick={()=>setOpenSubmenuYear(!isOpenSubmenuYear)}>Năm phát hành</span>
              {
                    isOpenSubmenuYear? <ul className="dropdownMenu-child">
                    {years?.map(item => <li onClick={closeSidebar} key={item}><Link href={`/the-loai/${item}`}>{item}</Link></li> )}
                  </ul>: <></>
              }
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
