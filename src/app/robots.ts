import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/dashboard',
          '/dashboard/',
          '/enquiries',
          '/enquiries/',
          '/my-listings',
          '/my-listings/',
          '/login',
          '/register',
          '/forgot-password',
          '/saved',
          '/api/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin',
          '/dashboard',
          '/enquiries',
          '/my-listings',
          '/login',
          '/register',
          '/forgot-password',
          '/saved',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://shreemarutinandanproperties.com/sitemap.xml',
    host: 'https://shreemarutinandanproperties.com',
  }
}
