import { Flex, Box, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import React from "react";
import Button from "../../components/Buttons";
import Card from "../../components/Card";
import Heading from "../../components/Heading";
import Layout from "../../Layout/layout";
import TextInput from "../../components/Inputs/TextInput";

export default function CreateProjectPage() {
  return (
    <Layout
      background={"purple.100"}
      hasFooter={false}
      bodyBackground={"white"}
      navBackground={"purple.80"}
      navColor={"white"}
      headingColor={"white"}
    >
      <Formik
        initialValues={{ ProjectTitle: "" }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Flex mt="35px" direction="column" justify="center">
              <Card w="100%" h="100%">
                <Flex direction="row" p={5}>
                  <Heading size="h3">Project Title</Heading>
                  <Heading size="h3">Background</Heading>
                  <Heading size="h3">Background</Heading>
                  <Heading size="h3">Background</Heading>
                  <Heading size="h3">Background</Heading>
                  <Heading size="h3">Background</Heading>
                  <Heading size="h3">Background</Heading>
                </Flex>
                <TextInput name="Project Title"/>
              </Card>
            </Flex>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}
