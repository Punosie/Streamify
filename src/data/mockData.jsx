export const mockData = {
  totalUsers: 10000,
  activeUsers: 5000,
  totalStreams: 1200000,
  revenue: {
    subscriptions: 75000,  // Revenue from subscriptions
    ads: 25000,            // Revenue from ads
    premiumFeatures: 15000, // Revenue from premium features (e.g., advanced playlists, offline downloads)
    merchandise: 10000,     // Revenue from merchandise sales (e.g., branded clothing, accessories)
    partnerships: 20000,    // Revenue from strategic partnerships or sponsorships
    donations: 5000,       // Revenue from user donations or crowd funding
    liveEvents: 12000,      // Revenue from live streaming events or concerts
    licensing: 8000,       // Revenue from licensing music for use in media, commercials, etc.
    affiliateMarketing: 4000, // Revenue from affiliate marketing, if applicable (e.g., recommending music-related products)
  },
  topArtists: [
    {
      name: "The Weeknd",
      genre: ["Pop", "R&B"],
      albumCover: "The Weekend.webp",
      totalStreams: 500000,
      mostPopularSong: "Blinding Lights",
      bio: "The Weeknd is a Canadian singer, songwriter, and record producer known for his hit songs and unique voice blending pop and R&B.",
    },
    {
      name: "Rina Sawayama",
      genre: ["Pop", "Rock", "Electronic"],
      albumCover: "Rina Sawayama.webp",
      totalStreams: 250000,
      mostPopularSong: "STFU!",
      bio: "Rina Sawayama is a British-Japanese singer, songwriter, and model, blending genres like pop, rock, and electronic in innovative ways.",
    },
    {
      name: "Fujii Kaze",
      genre: ["Pop", "R&B", "Jazz"],
      albumCover: "Fujii Kaze.webp",
      totalStreams: 300000,
      mostPopularSong: "Shinunoga E-Wa",
      bio: "Fujii Kaze is a Japanese singer-songwriter known for his soulful, genre-blending music that mixes pop, R&B, and jazz elements.",
    },
  ],
  userGrowth: [
    { month: "Jan", total: 8000, active: 4000 },
    { month: "Feb", total: 8500, active: 4200 },
    { month: "Mar", total: 9000, active: 4500 },
    { month: "Apr", total: 10000, active: 5000 },
    { month: "May", total: 10500, active: 5300 },
    { month: "Jun", total: 11000, active: 5500 },
    { month: "Jul", total: 11500, active: 5700 },
    { month: "Aug", total: 12000, active: 6000 },
    { month: "Sep", total: 12500, active: 6300 },
    { month: "Oct", total: 13000, active: 6500 },
    { month: "Nov", total: 13500, active: 6700 },
    { month: "Dec", total: 14000, active: 7000 },
  ],
  topSongs: [
    { name: "Blinding Lights", streams: 50000 },
    { name: "Save Your Tears", streams: 45000 },
    { name: "Levitating", streams: 40000 },
    { name: "Peaches", streams: 38000 },
    { name: "Stay", streams: 35000 },
    { name: "Thank U, Next", streams: 30000 },
    { name: "Bad Guy", streams: 28000 },
    { name: "Shinunoga E-Wa", streams: 27000 },
    { name: "STFU!", streams: 25000 },
    { name: "Blinding Lights", streams: 24000 },
  ],
  recentStreams: [
    { song: "Stay", artist: "Justin Bieber", date: "2025-02-01", count: 5000, userId: "123" },
    { song: "Peaches", artist: "Justin Bieber", date: "2025-02-02", count: 4000, userId: "124" },
    { song: "Blinding Lights", artist: "The Weeknd", date: "2025-02-03", count: 3000, userId: "125" },
  ],
};
