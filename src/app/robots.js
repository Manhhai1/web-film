export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/', // Explicitly allow all other pages
      }
    ],
    sitemap: 'https:/top-phim.pro/sitemap.xml'
  };
}
