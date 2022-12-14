import { HStack } from "@chakra-ui/react";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Testimonials({src,text1,text2}) {
  return (
    <Center py={6}>
      <Box
        
        w={"300px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
       
      >
        <Image
          h={"0px"}
          w={"full"}
          src={
            ""
          }
          objectFit={"cover"}
        />
        <Flex position={"relative"} justify={"center"} >
          <Avatar position={"absolute"} 
            size={"xl"}
            src={src}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack mt={"80px"} spacing={0} align={"center"} mb={5}>
            
            <Text color={"gray.500"}>{text1}</Text>
          </Stack>

          {/* <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={"sm"} color={"gray.500"}>
                Followers
              </Text>
            </Stack>
          </Stack> */}
           <Heading as={"h5"}>
            <Text fontSize={"20px"}>
            {text2}
            </Text>

           </Heading>
          {/* <Button
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Follow
          </Button> */}
        </Box>
      </Box>
    </Center>
  );
}
