const withPWA = require('next-pwa')({
  dest: 'public'
})


const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    exclude: [/react-pwa/, /__test__/],
  }
}

module.exports = withPWA(nextConfig) 
