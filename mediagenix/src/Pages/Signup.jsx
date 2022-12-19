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
import { useNavigate } from "react-router-dom";
  
 
  
  export default function Signup() {
   
    const{GoogleAuthUI,profile,UserData}=useContext(AuthContext)
  
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  
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
  

    const Register=()=>{
        let arr=[]
        arr.push(obj)
        localStorage.setItem("muser",JSON.stringify(arr))
         navigate("/login")
    }
    
  
      
  
  
    return (
      <Grid
        templateColumns={{base:"100%",lg:"65% 35%"}}
        
        minH={"100vh"}
       justifyContent={"space-between"}
       alignItems="space-between"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Logo/>
          <Stack align={"start"}>
            <Heading fontSize={"4xl"}>Let's get your account set up</Heading>
            
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
          
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input onChange={handleemail} type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Create Password</FormLabel>
                <Input onChange={handlepassword} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  
                  <Link to="/login" color={"blue.400"}>Already have an Account?</Link>
                </Stack>
               
                <Button onClick={Register}
                  bg={"#2c4bff"}
                  color={"white"}
                  _hover={{
                    bg: "white",
                    color:"black",
                    border:"1px solid #2c4bff"
                  }}
                >
                  Sign up
                </Button>
               
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack display={{base:"none",lg:"block"}} >
        <Center>
          <VStack w={"50%"}>
         
            {/* <Heading>Introducing: A free micro-site by Mediagenix</Heading>
            <Text>
              A Start Page is a beautiful, flexible, mobile-friendly landing page
              that you can build in minutes and update in seconds
            </Text>
       */}
  
          </VStack>
          </Center>
          <Image  src="https://i.postimg.cc/kX4tgDH1/su.png"></Image>
                
        </Stack>  
   
      </Grid>
    );
  }
  