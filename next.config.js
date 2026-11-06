/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/about-us', destination: '/a-propos', permanent: true },
      { source: '/about-us/our-history', destination: '/notre-histoire', permanent: true },
      { source: '/appeals/make-extraordinary-change', destination: '/campagne', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/frequently-asked-questions', destination: '/faq', permanent: true },
      { source: '/how-to-help', destination: '/faire-un-don', permanent: true },
      { source: '/how-to-help/why-donate-to-sightsavers', destination: '/pourquoi-nous-soutenir', permanent: true },
      { source: '/media-centre', destination: '/publications', permanent: true },
      { source: '/news/:year/:month/:slug', destination: '/publications', permanent: true },
      { source: '/programmes', destination: '/domaines', permanent: true },
      { source: '/programmes/accelerate', destination: '/domaines/sante', permanent: true },
      { source: '/stories-news-blogs', destination: '/publications', permanent: true },
      { source: '/where-we-work', destination: '/zones-d-intervention', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sightsavers.org',
      },
      {
        protocol: 'https',
        hostname: 'sightsavers.org',
      }
    ],
  },
};

module.exports = nextConfig;
