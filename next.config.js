/** @type {import('next').NextConfig} */
const API_KEY = '10923b261ba94d897ac6b81148314a3f'
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return[
      {
        source:"/contact/:path*",
        destination:"/form/:path*",
        permanent:false
      }
    ]
  },
  async rewrites(){
    return[
      {
        source:'/api/movies',
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source:'/api/detail/:id',
        destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
