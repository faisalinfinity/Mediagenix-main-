import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Center,
  VStack,
} from "@chakra-ui/react";

import Btn from "../Buttons/Btn-1";

export function Para({colorMode}) {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={3} flex={1} align={"top"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Center>
            <Text  as={"span"}>
              Grow your audience on social and beyond
            </Text>

            </Center>
           {" "}
          </Heading>
          <Center>
          <Text  fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Mediagenix helps you build an audience organically. We’re a
            values-driven company that provides affordable, intuitive, marketing
            tools for ambitious people and teams.
          </Text>
          </Center>
         
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Btn clr="#2c4bff" text={"Get Started Now"} />
            <Btn
              brdr={"1px solid #2c4bff"}
              clr="white"
              tc="#2c4bff"
              text={"Watch Video"}
            />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Center>
      <Image
          w="80%"
          h="80%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://buffer.com/static/illustrations/all-channels-3.webp"}
        />
        </Center>  
      </Flex>
    </Stack>
  );
}

export function BehindImg() {
  return (
    <Center>
     <Image src="https://i.postimg.cc/cLCsCxzp/we.png"></Image>
    </Center>
  );
}

export function Midpara({colorMode}) {
  return (
    <VStack minH={"100vh"} direction={{ base: "row", md: "row" }}>
      <Flex p={3} flex={1} align={"top"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Center>
            <Text  as={"span"}>
              Grow your following without draining your time
            </Text>

            </Center>
           {" "}
          </Heading>
          <Center>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Social media can be the fastest and cheapest way to build your
            following and grow your business. But it can also take up all your
            time. Here are four ways Buffer can help.
          </Text>

          </Center>
          
          <Stack direction={{ base: "column", md: "row" }} spacing={4}></Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Center>
      <Image
       display={colorMode==="light"?"block":"none"}
          w="100%"
          h="70%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://buffer.com/static/misc/buffer-loop-v2-variant.svg"}
        />
        </Center>  
      </Flex>
    </VStack>
  );
}

export function ParaB() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={3} flex={1} align={"top"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Center>
            <Text  as={"span"}>
              Get the clicks you deserve
            </Text>

            </Center>
           {" "}
          </Heading>
          <Center>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Mediagenix will tell you when and what to publish to make your
            content stand out.
          </Text>

          </Center>
         
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Btn clr="#2c4bff" text={"Get Started Now"} />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Center>
      <Image
          w="70%"
          h="70%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://buffer.com/static/illustrations/thumb-stop-content-2.webp"
          }
        />
        </Center>  
      </Flex>
    </Stack>
  );
}

export function ParaC() {
  return (
    <Stack minH={"100vh"}  direction={{ base: "column", md: "row-reverse" }}>
        
     
      <Flex p={3} flex={1} align={{base:"center",lg:"top"}} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Center>
            <Text  as={"span"}>
              Grow your following
            </Text>

            </Center>
            {" "}
          </Heading>
          <Center>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Mediagenix will share your content on the right channels, with
            suggested hashtags to help you grow.
          </Text>


          </Center>
         
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Btn clr="#2c4bff" text={"Get Started Now"} />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Center>
      <Image
          ml={"100px"}
          w="70%"
          h="70%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"
          }
        />
        </Center> 
      </Flex>
    </Stack>
  );
}

export function ParaD() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={3} flex={1} align={"top"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <br />{" "}
            <Center>
            <Text  as={"span"}>
              Halve your workload
            </Text>

            </Center>
           {" "}
          </Heading>
          <Center>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Mediagenix will publish everything for you to save time and it’ll
            showcase your work with automated reports.
          </Text>

          </Center>
         
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Btn clr="#2c4bff" text={"Get Started Now"} />
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <Center>
      <Image
          w="70%"
          h="70%"
          alt={"Login Image"}
          objectFit={"cover"}
          src={"https://buffer.com/static/illustrations/hero-reply@2x-2.webp"}
        />
        </Center>  
      </Flex>
    </Stack>
  );
}
