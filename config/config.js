export const server =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/api"
    : "https://car-commerce.vercel.app/api";
