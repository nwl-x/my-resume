// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  }
  // serverRuntimeConfig: {
  //   PROJECT_ROOT: __dirname
  // }
}

export default nextConfig
