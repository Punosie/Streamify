import { Container, Text, Box } from "@chakra-ui/react";
import Pfp from "./Avatar";

const Navbar = () => {
  return (
    <Container maxW="container" fluid p={5} display="flex" justifyContent="space-between" alignItems="center" borderBottomWidth={2} >
      <Text fontSize="2xl" fontWeight="bold" p={2} flexGrow={1} textAlign="center">
        STREAMIFY DASHBOARD
      </Text>
      <Box>
        <Pfp src="Zero Two.webp" />
      </Box>
    </Container>
  );
};

export default Navbar;
