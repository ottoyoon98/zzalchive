/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.pinimg.com',
      'snaptime.edaily.co.kr',
      'blog.kakaocdn.net',
      'pbs.twimg.com',
      'mblogthumb-phinf.pstatic.net',
      'pbs.twimg.com',
    ],
  }
}

module.exports = nextConfig
