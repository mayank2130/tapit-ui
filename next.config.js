/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    }
    return config
  },
  images: {
    domains: ['images.unsplash.com','assets.aceternity.com']
  }
}

export default nextConfig