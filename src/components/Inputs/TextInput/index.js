import React from "react";
import {
  FormControl,
  ChakraProvider,
  FormLabel,
  Input,
  Box,
  extendTheme,
} from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            },
          }
        }
      }
    }
  }
});

export default function TextInput(props) {
  return (
    <ChakraProvider theme={theme}>
      <Box p={5}>
        <FormControl variant="floating" id="first-name" isRequired>
          <Input type={props.type} placeholder=" " />
          <FormLabel>{props.name}</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
