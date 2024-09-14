import { MetadataRoute } from 'next';

export default function sitemap() {
  const baseUrl = 'https://web-film-pink.vercel.app/';
  const lastMod = '2024-09-14T00:00:00+00:00';
  return [
    {
      url: `${baseUrl}`,
      lastModified: '2024-09-14',
      changeFrequency: 'hourly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/phim-le`,
      lastModified: '2024-09-14',
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/phim-bo`,
      lastModified: '2024-09-14',
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: `${baseUrl}/phim-moi`,
      lastModified: '2024-09-14',
      changeFrequency: 'daily',
      priority: 0.9
      },
      {
        url: `${baseUrl}/tv-shows`,
        lastModified: '2024-09-14',
        changeFrequency: 'daily',
        priority: 0.9
      },
      {
        url: `${baseUrl}/the-loai/hanh-dong`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/tinh-cam`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/hai-huoc`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/co-trang`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/tam-ly`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/hinh-su`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/chien-tranh`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/the-thao`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/vo-thuat`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/vien-tuong`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/phieu-luu`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/khoa-hoc`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/kinh-di`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/am-nhac`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/than-thoai`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/tai-lieu`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/gia-dinh`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/chinh-kich`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/bi-an`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/hoc-duong`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/kinh-dien`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/the-loai/phim-18`,
        lastModified: lastMod,
        changeFrequency: 'daily',
        priority: 0.9,
      },
  ];
}
