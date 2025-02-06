import { Container, Text, Box } from "@chakra-ui/react";
import Pfp from "./Avatar";

const Navbar = () => {
  return (
    <Container maxW="container" fluid p={5} display="flex" justifyContent="space-between" alignItems="center" borderBottomWidth={2} >
      <Text fontSize="2xl" fontWeight="bold" p={2} flexGrow={1} textAlign="center">
        STREAMIFY DASHBOARD
      </Text>
      <Box>
        <Pfp src="https://i.pinimg.com/236x/a4/53/4d/a4534df18706fcf45740d163a8097e5e.jpg" />
      </Box>
    </Container>
  );
};

export default Navbar;
