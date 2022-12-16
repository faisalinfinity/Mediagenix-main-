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
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Logo from "../Components/logo";
import axios from "axios"

const UserData=[{email:"mujtabafaisal944@gmail.com",name:"faisal",password:"12345678"},{}]

export default function Login() {
 
  const{GoogleAuthUI,profile}=useContext(AuthContext)

const [email,setemail]=useState("")
const [password,setpassword]=useState("")

const handleemail=(e)=>{
  setemail(e.target.value)
}

const handlepassword=(e)=>{
  setpassword(e.target.value)
}
const obj={
 email:email,
  password:password
}

const Authenticate=()=>{

   UserData.map((el)=>{
      if(el.email==email){
        if(el.password==password){
          alert("Login Successful")
          return
        }else{
          alert("Incorrect Password")
        }
      }
    })

  }
  

    


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
              <FormLabel>Username</FormLabel>
              <Input onChange={handleemail} type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={handlepassword} type="password" />
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
              <GoogleAuthUI />
              <Button onClick={Authenticate}
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
