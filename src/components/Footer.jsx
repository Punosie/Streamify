import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container, Text, Link, HStack, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container  maxW="container"  fluid  p={5}  display="flex"  direction="column"  justifyContent="center"  alignItems="center"  borderTopWidth={2}  borderTopColor="gray.600">
      <VStack spacing={2}>
        <HStack spacing={6}>
            <Text fontSize="lg" fontWeight="bold" p={2} textAlign="center" color="white">
                Made with ❤️ by Shubhankar Kaushik
            </Text>
            <Link href="https://github.com/Punosie" isExternal>
            <AiFillGithub size={30} color="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/shubhankar-kaushik/" isExternal>
            <AiFillLinkedin size={30} color="white" />
            </Link>
        </HStack>
        <Text fontSize="sm" p={2} color="white">
            © 2025 Shubhankar Kaushik. All rights reserved.
        </Text>
        </VStack>
    </Container>
  );
};

export default Footer;
