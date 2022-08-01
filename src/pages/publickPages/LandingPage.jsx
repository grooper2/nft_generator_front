import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import Heading from "../../components/Heading";
import Layout from "../../Layout/layout";

export default function LandingPage() {
  return (
    <Layout
      hasFooter
      background={"white"}
      bodyBackground={"purple.100"}
      navColor={"purple.100"}
      navBackground={"white"}
    >
      <Flex
        direction="column"
        justify="flex-start"
        bg="purple.100"
        h="100%"
        w="100%"
      >
        <Flex
          direction="row"
          justify="center"
          bg="purple.100"
          h="100%"
          w="100%"
        >
          <Box w="718px">
            <Heading size="h1" color="white">
              Welcome to NFT Cooker
            </Heading>
            <Text color="white">
              Generate for free your NFTS, all you need to do is bring your
              assets with you. NFT Cooker will then do all the heavy lifting and
              generate you thousands of NFT's in no time, for more information
              on how NFT Cooker works please watch the video below before taking
              any actions.
            </Text>
          </Box>
          <iframe
            width="650px"
            height="325px"
            title="tutorial"
            src="https://www.youtube.com/embed/z7MIyQS9p5E"
            frameBorder="0"
          />
        </Flex>
      </Flex>
    </Layout>
  );
}
