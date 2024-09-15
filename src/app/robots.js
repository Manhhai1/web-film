export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Explicitly allow all other pages
        disallow: ['/include/', '/tim-kiem/', '/tag/'] // Disallow specific paths
      }
    ],
    sitemap: 'https:/top-phim.pro/sitemap.xml'
  };
}
