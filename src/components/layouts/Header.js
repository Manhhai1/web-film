"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../css/Header.css'; // Custom styles for the header
import logo from '../../assets/img/logo-1.png';

const Header = () => {
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
  const [isOpenSubmenuCate, setOpenSubmenuCate] = useState(false);
  const [isOpenSubmenuCountry, setOpenSubmenuCountry] = useState(false);
  const [isOpenSubmenuYear, setOpenSubmenuYear] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, countriesRes] = await Promise.all([
          fetch('https://phimapi.com/the-loai'),
          fetch('https://phimapi.com/quoc-gia')
        ]);
        const categories = await categoriesRes.json();
        const countries = await countriesRes.json();
        setCategory(categories);
        setCountry(countries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Open/close sidebar
  const toggleSidebar = (action) => {
    document.getElementById("sidebar").classList[action]("openSidebar");
  };

  return (
    <header className='header'>
      <div className='logo'>
        <Link href="/"><Image width={200} height={70} src={logo} alt='logo-xem-phim-truc-tuyen' /></Link>
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
              {category.map(item => (
                <li key={item.slug}><Link href={`/the-loai/${item.slug}`}>{item.name}</Link></li>
              ))}
            </ul>
          </li>
          <li className='dropdown'>
            <span>Quốc gia</span>
            <ul className='dropdownMenu'>
              {country.map(item => (
                <li key={item.slug}><Link href={`/quoc-gia/${item.slug}`}>{item.name}</Link></li>
              ))}
            </ul>
          </li>
          <li className='dropdown'>
            <span>Năm phát hành</span>
            <ul className='dropdownMenu'>
              {years.map(item => (
                <li  className='year-li' key={item}><Link href={`/nam/${item}`}>{item}</Link></li>
              ))}
            </ul>
          </li>
          <li className='top-phim'><Link href="/top-phim">Top phim</Link></li>
        </ul>

        {/* Sidebar */}
        <div id="sidebar" className='sidebar'>
          <div className="closebtn" onClick={() => toggleSidebar('remove')}>&times;</div>
          <ul className='ul-parent'>
            <li onClick={() => toggleSidebar('remove')}><Link href="/phim-moi">Phim mới</Link></li>
            <li onClick={() => toggleSidebar('remove')}><Link href="/hoat-hinh">Hoạt hình</Link></li>
            <li onClick={() => toggleSidebar('remove')}><Link href="/tv-shows">Tv Shows</Link></li>
            <li onClick={() => toggleSidebar('remove')}><Link href="/phim-le">Phim lẻ</Link></li>
            <li onClick={() => toggleSidebar('remove')}><Link href="/phim-bo">Phim bộ</Link></li>
            <li className="dropdown">
              <span onClick={() => setOpenSubmenuCate(!isOpenSubmenuCate)}>Thể loại</span>
              {isOpenSubmenuCate && (
                <ul className="dropdownMenu-child">
                  {category.map(item => (
                    <li onClick={() => toggleSidebar('remove')} key={item.slug}><Link href={`/the-loai/${item.slug}`}>{item.name}</Link></li>
                  ))}
                </ul>
              )}
            </li>
            <li className="dropdown">
              <span onClick={() => setOpenSubmenuCountry(!isOpenSubmenuCountry)}>Quốc gia</span>
              {isOpenSubmenuCountry && (
                <ul className="dropdownMenu-child">
                  {country.map(item => (
                    <li onClick={() => toggleSidebar('remove')} key={item.slug}><Link href={`/quoc-gia/${item.slug}`}>{item.name}</Link></li>
                  ))}
                </ul>
              )}
            </li>
            <li className="dropdown">
              <span onClick={() => setOpenSubmenuYear(!isOpenSubmenuYear)}>Năm phát hành</span>
              {isOpenSubmenuYear && (
                <ul className="dropdownMenu-child">
                  {years.map(item => (
                    <li onClick={() => toggleSidebar('remove')} key={item}><Link href={`/nam/${item}`}>{item}</Link></li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Button to open Sidebar */}
        <button className="openbtn" onClick={() => toggleSidebar('add')}>&#9776;</button>
      </div>
    </header>
  );
};

export default Header;
