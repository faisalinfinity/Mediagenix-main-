import {
  Center,
  HStack,
  Box,
  Text,
  VStack,
  Heading,
  Flex,
  Grid,
  Container,
} from "@chakra-ui/react";
import Btn from "../Components/Buttons/Btn-1";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import {
  BehindImg,
  Midpara,
  Para,
  ParaB,
  ParaC,
  ParaD,
} from "../Components/para/Para";
import Testimonials from "../Components/Testimonials/Testimonial";


export default function Homepage({ colorMode }) {
  const testimonials = [
    {
      src: "https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg",
      text1:
        "Mediagenix has made sharing our story and building our brand on social media so much easier.",
      text2: "Luis Cancel, Managing Editor",
    },
    {
      src: "https://buffer.com/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg",
      text1:
        "On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.",
      text2: "Liz Gillis, Digital Marketer",
    },
    {
      src: "https://buffer.com/static/testimonials/troy-petrunoff@mobile.jpg",
      text1:
        "For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
      text2: "Luis Cancel, Managing Editor",
    },
    {
      src: "https://buffer.com/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg",
      text1:
        "Mediagenix makes it easy for us to monitor all of our engagement and strengthen the connection with our audience.",
      text2: "Rodrigo Hyago, Social Media Content Manager",
    },
    {
      src: "https://buffer.com/static/testimonials/joe-mercy-for-animals@mobile.jpg",
      text1:
        "Mediagenix saves us, literally, hours and in turn helps us spread our message even further.",
      text2: "Joe Loria, Content Manager",
    },
  ];

  return (
    <>
      <Navbar />
      <Para colorMode={colorMode} />
      <BehindImg />

      <Midpara colorMode={colorMode} />
      <ParaB colorMode={colorMode} />
      <ParaC colorMode={colorMode} />
      <ParaD colorMode={colorMode} />
      <Center>
        <HStack spacing={100} overflowX="scroll">
          {testimonials.map((el, i) => (
            <Testimonials
              key={i + 1}
              src={el.src}
              text1={el.text1}
              text2={el.text2}
            />
          ))}
        </HStack>
      </Center>
      <Center>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          w={"80%"}
          justifyContent={"space-between"}
        >
          <Box>
            <Heading color={"#2c4bff"}>10 years</Heading>
            <Text>in business</Text>
          </Box>
          <Box>
            <Heading color={"#2c4bff"}>140,000</Heading>
            <Text>users</Text>
          </Box>
          <Box>
            <Heading color={"#2c4bff"}>100k+</Heading>
            <Text>monthly blog readers</Text>
          </Box>
          <Box>
            <Heading color={"#2c4bff"}>1.2m+</Heading>
            <Text>social followers</Text>{" "}
          </Box>
        </Grid>
      </Center>
      <HStack bg={"#2c4bff"} mt={"70px"} w={"100%"} h="500px">
        <Center>
          <Heading w="50%" >
            140,000+ people like you use Buffer to build their brand on social
            media every month
            <Btn wd={"60px"} clr={"#e97284"} text={"Get Started Now"} />
          </Heading>

        </Center>
      </HStack>

      <Footer />
    </>
  );
}
