import { Box, Container, Flex, Text, VStack, HStack, Spacer, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" p={4}>
        <Flex maxW="container.lg" mx="auto" align="center">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">About</Link>
            <Link href="#" color="white">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.900" color="white" py={4}>
        <Container maxW="container.lg">
          <Text textAlign="center">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;