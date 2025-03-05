import React from 'react';

// Maršrutų sąrašas
const pages = [
  { url: '/', lastmod: '2025-03-03', changefreq: 'daily', priority: 1.0 },
  { url: '/items', lastmod: '2025-03-02', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', lastmod: '2025-02-28', changefreq: 'monthly', priority: 0.8 },
  { url: '/items/:name/:id', lastmod: '2025-03-01', changefreq: 'weekly', priority: 0.7 },
  { url: '/login', lastmod: '2025-03-01', changefreq: 'never', priority: 0.3 },
  { url: '/register', lastmod: '2025-03-01', changefreq: 'never', priority: 0.3 },
  { url: '/profile', lastmod: '2025-03-01', changefreq: 'weekly', priority: 0.6 },
];

// XML žemėlapio generavimo funkcija
const generateSitemapXML = () => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const xmlFooter = `\n</urlset>`;

  const xmlPages = pages.map(page => {
    return `
      <url>
        <loc>https://yourwebsite.com${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `;
  }).join('');

  return xmlHeader + xmlPages + xmlFooter;
};

const Sitemap = () => {
  const sitemapXML = generateSitemapXML();
  return (
    <div>
      <h1>XML Sitemap</h1>
      <pre>{sitemapXML}</pre>
    </div>
  );
};

export default Sitemap;