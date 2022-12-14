import { Button, Center } from "@chakra-ui/react";

// Now we can use the new `brandPrimary` variant

export default function Btn({ text, clr, brdr, tc,wd }) {
  return (
    <Center>
      <Button
        w={{ base: "50%", lg: "100%" }}
        color={tc}
        border={brdr}
        fontSize={"17px"}
        h={"50px"}
        bg={clr}
        colorScheme="brand"
       
      >
        {text}
      </Button>
    </Center>
  );
}
