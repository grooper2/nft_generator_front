import { Flex, Box, Text, Link, Checkbox } from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import React from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Inputs/TextInput";
import Button from "../../components/Buttons";

export default function RegisterPage() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      bg="purple.60"
      h="100vh"
      w="100%"
      pos="relative"
      overflow="hidden"
    >
      <Box
        direction="column"
        pos="absolute"
        zIndex="30"
        w="500px"
        h="400px"
        justify="flex-start"
        borderRadius="4px"
        boxShadow="rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px"
      >
        <Box
          p="10px"
          bg="purple.20"
          h="60px"
          w="100%"
          borderRadius="4px 4px 0px 0px"
        >
          <Heading size="h2" color="white">
            Welcome to NFT Cooker
          </Heading>
        </Box>
        <Flex w="100%" h="100%" p="10px" bg="white">
          <Box w="100%" h="100%" align="center">
            <Heading size="h2">Register</Heading>
            <Box>
              <Input name="Email" type="email" />
            </Box>
            <Box>
              <Input name="Password" type="password" />
            </Box>
            <Box>
              <Input name="Reapet Password" type="password" />
            </Box>
            <Checkbox>I accept the terms and conditions</Checkbox>
            <Text>
              Already have an account? Login{" "}
              <Link textDecor="underline" href="/login" _hover={{ color: "blue.100" }}>
                Here
              </Link>
            </Text>
            <Button variant="primary">Register</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
