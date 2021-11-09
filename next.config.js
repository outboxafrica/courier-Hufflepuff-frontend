module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "fakestoreapi.com" ],
  },
  async redirects() {
    return [
      {
        source: "/adminDashboard",
        destination: "/",
        permanent: true,
      }
    ]
  }
};
