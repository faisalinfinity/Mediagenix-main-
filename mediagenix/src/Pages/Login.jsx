import {
  Grid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Center,
  VStack,
  border
} from "@chakra-ui/react";
import Logo from "../Components/logo";

export default function Login() {
  return (
    <Grid
      templateColumns={{base:"100%",lg:"35% 65%"}}
      
      minH={"100vh"}
     justifyContent={"space-between"}
     alignItems="space-between"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Logo/>
        <Stack align={"start"}>
          <Heading fontSize={"4xl"}>Log In</Heading>
          
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
        
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"#2c4bff"}
                color={"white"}
                _hover={{
                  bg: "white",
                  color:"black",
                  border:"1px solid #2c4bff"
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack display={{base:"none",lg:"block"}} bg={"#fcde29"}>
      <Center>
        <VStack w={"50%"}>
       
          <Heading>Introducing: A free micro-site by Mediagenix</Heading>
          <Text>
            A Start Page is a beautiful, flexible, mobile-friendly landing page
            that you can build in minutes and update in seconds
          </Text>
    

        </VStack>
        </Center>
        <Image  src="https://login.buffer.com/img/sp-login-image.png"></Image>
        
      </Stack>
 
    </Grid>
  );
}
