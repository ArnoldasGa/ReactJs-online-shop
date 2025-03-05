import React from 'react';

// Maršrutų sąrašas
const pages = [
  { url: '/', name: 'Home', lastmod: '2025-03-03' },
  { url: '/items', name: 'Items', lastmod: '2025-03-02' },
  { url: '/about', name: 'About', lastmod: '2025-02-28' },
  { url: '/items/:name/:id', name: 'Single Item', lastmod: '2025-03-01' },
  { url: '/login', name: 'Login', lastmod: '2025-03-01' },
  { url: '/register', name: 'Register', lastmod: '2025-03-01' },
  { url: '/profile', name: 'Profile', lastmod: '2025-03-01' },
];

// HTML žemėlapio komponentas
const HTMLSitemap = () => {
  return (
    <div>
      <h1>HTML Sitemap</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.url}>
            <a href={page.url}>{page.name}</a> - Paskutinis atnaujinimas: {page.lastmod}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HTMLSitemap;
