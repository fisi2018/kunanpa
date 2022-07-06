module.exports = {
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    TWITTER_ID: process.env.TWITTER_ID,
    TWITTER_SECRET: process.env.TWITTER_SECRET,
    API_URL: process.env.API_URL,
    BASE_URL: process.env.BASE_URL
  },
  images: {
    domains: ['robohash.org', 'lh3.googleusercontent.com', 'pbs.twimg.com']
  }
}
