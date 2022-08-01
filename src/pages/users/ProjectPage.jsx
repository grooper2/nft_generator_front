import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import NoProjects from "../../Assets/Images/no_projects.png";
import unauthorized from "../../Assets/Images/unauthorized.png";
import Button from "../../components/Buttons";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Layout from "../../Layout/layout";

export default function ProjectPage() {
  const isLoggedIn = true;
  const hasProjects = false;
  return (
    <Layout activeItem={'activeItem1'}>
      {!isLoggedIn ? (
        <Flex direction="column" justify="center" align="center" w="100%">
          <Image src={unauthorized} maxW="1000px" maxH="1000px" />
          <Heading size="h1">403 unauthorized</Heading>
        </Flex>
      ) : !hasProjects ? (
        <>
          <Image src={NoProjects} maxW="1000px" maxH="1000px" />
          <Heading size="h1">You have no projects at the momment</Heading>
          <Button type="button">Create Project</Button>
          <Card />
        </>
      ) : (
        <Flex
          direction="column"
          justify="center"
          align="center"
          w="100%"
        ></Flex>
      )}
    </Layout>
  );
}
