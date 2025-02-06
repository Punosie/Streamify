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
      albumCover: "/The Weekend.webp",
      totalStreams: 500000,
      mostPopularSong: "Blinding Lights",
      bio: "The Weeknd is a Canadian singer, songwriter, and record producer known for his hit songs and unique voice blending pop and R&B.",
    },
    {
      name: "Rina Sawayama",
      genre: ["Pop", "Rock", "Electronic"],
      albumCover: "/Rina Sawayama.webp",
      totalStreams: 250000,
      mostPopularSong: "STFU!",
      bio: "Rina Sawayama is a British-Japanese singer, songwriter, and model, blending genres like pop, rock, and electronic in innovative ways.",
    },
    {
      name: "Fujii Kaze",
      genre: ["Pop", "R&B", "Jazz"],
      albumCover: "/Fujii Kaze.webp",
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
  { song: "Levitating", artist: "Dua Lipa", date: "2025-02-04", count: 4500, userId: "126" },
  { song: "Save Your Tears", artist: "The Weeknd", date: "2025-02-05", count: 5500, userId: "127" },
  { song: "Bad Guy", artist: "Billie Eilish", date: "2025-02-06", count: 6000, userId: "128" },
  { song: "Shinunoga E-Wa", artist: "Fujii Kaze", date: "2025-02-07", count: 4000, userId: "129" },
  { song: "STFU!", artist: "Rina Sawayama", date: "2025-02-08", count: 3700, userId: "130" },
  { song: "Levitating", artist: "Dua Lipa", date: "2025-02-09", count: 4800, userId: "131" },
  { song: "Blinding Lights", artist: "The Weeknd", date: "2025-02-10", count: 5100, userId: "132" },
  { song: "Save Your Tears", artist: "The Weeknd", date: "2025-02-11", count: 5300, userId: "133" },
  { song: "Peaches", artist: "Justin Bieber", date: "2025-02-12", count: 4100, userId: "134" },
  { song: "STFU!", artist: "Rina Sawayama", date: "2025-02-13", count: 3600, userId: "135" },
  { song: "Shinunoga E-Wa", artist: "Fujii Kaze", date: "2025-02-14", count: 3900, userId: "136" },
  { song: "Bad Guy", artist: "Billie Eilish", date: "2025-02-15", count: 6100, userId: "137" },
  { song: "Blinding Lights", artist: "The Weeknd", date: "2025-02-16", count: 3200, userId: "138" },
  { song: "Levitating", artist: "Dua Lipa", date: "2025-02-17", count: 4700, userId: "139" },
  { song: "Stay", artist: "Justin Bieber", date: "2025-02-18", count: 5100, userId: "140" },
  { song: "Blinding Lights", artist: "The Weeknd", date: "2025-02-19", count: 5500, userId: "141" },
  { song: "Shinunoga E-Wa", artist: "Fujii Kaze", date: "2025-02-20", count: 4200, userId: "142" },
  { song: "Bad Guy", artist: "Billie Eilish", date: "2025-02-21", count: 5800, userId: "143" },
  { song: "Levitating", artist: "Dua Lipa", date: "2025-02-22", count: 4900, userId: "144" },
  { song: "Save Your Tears", artist: "The Weeknd", date: "2025-02-23", count: 5600, userId: "145" },
  { song: "STFU!", artist: "Rina Sawayama", date: "2025-02-24", count: 3800, userId: "146" },
  { song: "Peaches", artist: "Justin Bieber", date: "2025-02-25", count: 4200, userId: "147" },
  { song: "Blinding Lights", artist: "The Weeknd", date: "2025-02-26", count: 5300, userId: "148" },
  { song: "Shinunoga E-Wa", artist: "Fujii Kaze", date: "2025-02-27", count: 4300, userId: "149" },
]
};
