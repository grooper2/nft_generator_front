import React from "react";
import { Flex, Box, Collapse, useDisclosure } from "@chakra-ui/react";
import Button from "../components/Buttons";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Footer() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      bg="purple.100"
      direction="column"
      align="center"
      w="100%"
      p="36px 36px"
    >
      <Button mb="15px" variant="socialMedia" onClick={onToggle}>
        Visit us here
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="row"
          justify="center"
          align="center"
          w="300px"
          height="40px"
        >
          <Box mr="26px" ml="26px">
            <BsFacebook transform="scale(2)" fill="white" />
          </Box>
          <Box mr="26px" ml="26px">
            <BsInstagram transform="scale(2)" fill="white" />
          </Box>
          <Box mr="26px" ml="26px">
            <AiFillTwitterCircle transform="scale(2.3)" fill="white" />
          </Box>
          <Box mr="26px" ml="26px">
            <BsLinkedin transform="scale(2)" fill="white" />
          </Box>
        </Flex>
      </Collapse>
    </Flex>
  );
}
