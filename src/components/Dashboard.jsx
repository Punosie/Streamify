import Stats from "./Stats";
import { mockData } from "../data/mockData";
import { Container, Stack, Box, Text } from "@chakra-ui/react";
import HCard from "./Card";
import { UserGrowthChart, RevenueDistributionChart, TopSongsChart } from "./Chart";

const Dashboard = () => {
    const revenue = mockData.revenue.subscriptions + mockData.revenue.ads;
    
    return (
        <Container maxW="container.xl">
            {/* STATS */}
            <Stack spacing={5}>
                <Stack direction={{ base: "column", md: "row" }} spacing={5}  >  
                    <Box borderWidth="1px" borderRadius="md" flex={1} p={5} justifyItems={"center"}  >
                        <Text textAlign="center" fontSize="2xl" fontWeight="bold" p={2}>Platform Metrics</Text>
                        <Stack direction={{ base: "column", sm: "row" }} spacing={5} width="100%" align="center" >
                            <Stats label="Total Users" value={mockData.totalUsers} info="total number of registered users on the platform" indicator="10%" />   
                            <Stats label="Active Users" value={mockData.activeUsers} info="number of users who have streamed at least one song in the last 30 days." indicator="5%" />
                            <Stats label="Total Streams" value={mockData.totalStreams} info="total number of song streams on the platform." indicator="5%" />
                        </Stack>
                    </Box>
                    <Box borderWidth="1px" borderRadius="md" flex={1} p={5} justifyItems={"center"}>
                        <Text textAlign="center" fontSize="2xl" fontWeight="bold" p={2}>Monetization Metrics</Text>
                        <Stack direction={{ base: "column", sm: "row" }} spacing={5} width="100%" align="center" >
                            <Stats label="Revenue" value={revenue} info="total revenue generated from subscriptions and advertisements" indicator="12%" />
                            <Stats label="Subscriptions" value={mockData.revenue.subscriptions} info="Revenue from subscriptions" indicator="6%" />
                            <Stats label="Ads" value={mockData.revenue.ads} info="Revenue from ads." indicator="8%" />
                        </Stack>
                    </Box>
                </Stack>

                <Box borderWidth="1px" borderRadius="md" p={5}>
                    <Text textAlign="center" fontSize="2xl" fontWeight="bold" p={2}>Top Artists</Text>
                    <Stack direction={{ base: "column", md: "row" }} spacing={5} wrap="wrap" justify="space-between" >
                        {mockData.topArtists.map((artist, index) => (
                            <HCard key={index} src={artist.albumCover} title={artist.name} description={artist.mostPopularSong} badges={artist.genre} />
                        ))}
                    </Stack>
                </Box>
            </Stack>

            {/* CHARTS */}
            <Stack spacing={5} mt={5}>
                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                    <Box flex={1} borderWidth="1px" borderRadius="md" p={5}>
                        <UserGrowthChart />
                    </Box>
                    <Box flex={1} borderWidth="1px" borderRadius="md" p={5}>
                        <RevenueDistributionChart />
                    </Box>
                    <Box flex={1} borderWidth="1px" borderRadius="md" p={5}>
                        <TopSongsChart />
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Dashboard;
