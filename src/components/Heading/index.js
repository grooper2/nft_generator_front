import React from "react";

import { Heading as ChakraHeading } from "@chakra-ui/react";

export default function Heading  (props) {
    return <ChakraHeading {...props}>{props.children}</ChakraHeading>
}
